/**
 * Image Optimization Utilities
 * Supports WebP/AVIF format detection and conversion
 */

export interface ImageFormat {
  webp: boolean;
  avif: boolean;
  original: string;
}

export interface OptimizedImageConfig {
  quality: number;
  progressive: boolean;
  lossy: boolean;
  effort: number;
}

export interface ResponsiveImageConfig {
  breakpoints: number[];
  formats: ('webp' | 'avif' | 'jpeg' | 'png')[];
  quality: number;
  sizes: string[];
}

// Check browser support for modern image formats
export const detectImageFormatSupport = (): ImageFormat => {
  const webp = checkWebPSupport();
  const avif = checkAVIFSupport();

  return {
    webp,
    avif,
    original: 'jpeg',
  };
};

// Check WebP support
const checkWebPSupport = (): boolean => {
  const canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = 1;
  return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
};

// Check AVIF support
const checkAVIFSupport = (): boolean => {
  const canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = 1;
  return canvas.toDataURL('image/avif').indexOf('data:image/avif') === 0;
};

// Get optimal image format based on browser support
export const getOptimalImageFormat = (
  formats: ImageFormat
): 'avif' | 'webp' | 'jpeg' => {
  if (formats.avif) return 'avif';
  if (formats.webp) return 'webp';
  return 'jpeg';
};

// Generate responsive image srcset
export const generateResponsiveSrcset = (
  baseUrl: string,
  widths: number[],
  format: 'avif' | 'webp' | 'jpeg' = 'webp'
): string =>
  widths
    .map((width) => {
      const url = `${baseUrl}-${width}w.${format}`;
      return `${url} ${width}w`;
    })
    .join(', ');

// Generate optimized image URL
export const generateOptimizedImageUrl = (
  baseUrl: string,
  options: {
    width?: number;
    height?: number;
    quality?: number;
    format?: 'avif' | 'webp' | 'jpeg';
    blur?: boolean;
  } = {}
): string => {
  const {
    width,
    height,
    quality = 80,
    format = 'webp',
    blur = false,
  } = options;

  const params = new URLSearchParams();
  if (width) params.set('w', width.toString());
  if (height) params.set('h', height.toString());
  if (quality !== 80) params.set('q', quality.toString());
  if (blur) params.set('blur', '50');

  const formatParam = format === 'jpeg' ? 'jpg' : format;
  return `${baseUrl}.${formatParam}${params.toString() ? `?${params.toString()}` : ''}`;
};

// Image lazy loading with intersection observer
export class LazyImageLoader {
  private observer: IntersectionObserver;
  private config: IntersectionObserverInit;

  constructor(
    callback?: (entries: IntersectionObserverEntry[]) => void,
    config: IntersectionObserverInit = {}
  ) {
    this.config = {
      rootMargin: '50px',
      threshold: 0.01,
      ...config,
    };

    this.observer = new IntersectionObserver(
      callback || this.handleIntersection.bind(this),
      this.config
    );
  }

  observe(element: HTMLElement): void {
    this.observer.observe(element);
  }

  unobserve(element: HTMLElement): void {
    this.observer.unobserve(element);
  }

  disconnect(): void {
    this.observer.disconnect();
  }

  private handleIntersection(entries: IntersectionObserverEntry[]): void {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        this.loadImage(img);
        this.unobserve(img);
      }
    });
  }

  private loadImage(img: HTMLImageElement): void {
    // eslint-disable-next-line dot-notation
    const src = img.dataset['src'];
    // eslint-disable-next-line dot-notation
    const srcset = img.dataset['srcset'];

    if (src) {
      img.src = src;
    }
    if (srcset) {
      img.srcset = srcset;
    }

    img.onload = () => {
      img.classList.add('loaded');
    };

    img.onerror = () => {
      img.classList.add('error');
    };
  }
}

// Image optimization configuration
export const imageOptimizationConfig: OptimizedImageConfig = {
  quality: 80,
  progressive: true,
  lossy: true,
  effort: 4,
};

// Responsive image configuration
export const responsiveImageConfig: ResponsiveImageConfig = {
  breakpoints: [320, 640, 768, 1024, 1280, 1536, 1920],
  formats: ['avif', 'webp', 'jpeg'],
  quality: 80,
  sizes: [
    '(max-width: 640px) 100vw',
    '(max-width: 768px) 100vw',
    '(max-width: 1024px) 100vw',
    '(max-width: 1280px) 100vw',
    '100vw',
  ],
};

// Preload critical images
export const preloadCriticalImages = (imageUrls: string[]): void => {
  imageUrls.forEach((url) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = url;
    link.type = `image/${url.split('.').pop()}`;
    document.head.appendChild(link);
  });
};

// Generate blur placeholder for lazy loading
export const generateBlurPlaceholder = (): string =>
  // This would typically be handled by a build-time process
  // For now, return a simple data URL
  `data:image/svg+xml;base64,${btoa(`
    <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="blur">
          <feGaussianBlur stdDeviation="20" />
        </filter>
      </defs>
      <rect width="400" height="300" fill="#f0f0f0" filter="url(#blur)" />
    </svg>
  `)}`;
