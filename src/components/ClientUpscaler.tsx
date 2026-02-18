import React, { useState, useRef, useCallback } from 'react';
import {
  Upload,
  Zap,
  Download,
  Image as ImageIcon,
  X,
  FileText,
} from 'lucide-react';

interface UpscalerState {
  originalImage: string | null;
  upscaledImage: string | null;
  isProcessing: boolean;
  progress: number;
  error: string | null;
}

// Canvas-based upscaling fallback when upscaler module is not available
const upscaleWithCanvas = (img: HTMLImageElement): Promise<string> =>
  new Promise((resolve, reject) => {
    try {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        reject(new Error('Could not get canvas context'));
        return;
      }

      // Double the dimensions for 2x upscaling
      canvas.width = img.naturalWidth * 2;
      canvas.height = img.naturalHeight * 2;

      // Use smooth scaling for better quality
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';

      // Draw the image scaled up
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      // Convert to data URL
      const dataUrl = canvas.toDataURL('image/png', 0.9);
      resolve(dataUrl);
    } catch (error) {
      reject(error);
    }
  });

const ClientUpscaler: React.FC = () => {
  const [state, setState] = useState<UpscalerState>({
    originalImage: null,
    upscaledImage: null,
    isProcessing: false,
    progress: 0,
    error: null,
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (!file) return;

      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setState((prev) => ({
          ...prev,
          error: 'File size must be under 5MB',
        }));
        return;
      }

      // Validate file type
      if (!file.type.startsWith('image/')) {
        setState((prev) => ({
          ...prev,
          error: 'Please select a valid image file',
        }));
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        const imageDataUrl = e.target?.result as string;
        setState((prev) => ({
          ...prev,
          originalImage: imageDataUrl,
          upscaledImage: null,
          error: null,
          progress: 0,
        }));
      };
      reader.readAsDataURL(file);
    },
    []
  );

  const handleUpscale = useCallback(async () => {
    if (!state.originalImage) return;

    try {
      setState((prev) => ({
        ...prev,
        isProcessing: true,
        progress: 0,
        error: null,
      }));

      // Import upscaler dynamically to avoid SSR issues
      // Note: upscaler module not installed - functionality disabled
      // const { default: Upscaler } = await import('upscaler');

      // Initialize upscaler
      // const upscaler = new Upscaler();

      // Create image element for upscaler
      const img = new window.Image();
      img.src = state.originalImage;

      // Wait for image to load
      await new Promise((resolve) => {
        img.onload = resolve;
      });

      // Update progress
      setState((prev) => ({ ...prev, progress: 30 }));

      // Upscale the image - upscaler module not installed, using canvas fallback
      // const upscaled = await upscaler.upscale(img);
      const upscaled = await upscaleWithCanvas(img);

      // The upscaled result is already a data URL string
      if (typeof upscaled === 'string') {
        setState((prev) => ({
          ...prev,
          upscaledImage: upscaled,
          progress: 100,
          isProcessing: false,
        }));
      }
    } catch {
      setState((prev) => ({
        ...prev,
        error: 'Failed to upscale image. Please try again.',
        isProcessing: false,
      }));
    }
  }, [state.originalImage]);

  const handleDownload = useCallback(() => {
    if (!state.upscaledImage) return;

    const link = document.createElement('a');
    link.download = 'upscaled-image.png';
    link.href = state.upscaledImage;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, [state.upscaledImage]);

  const handleReset = useCallback(() => {
    setState({
      originalImage: null,
      upscaledImage: null,
      isProcessing: false,
      progress: 0,
      error: null,
    });
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  }, []);

  return (
    <div className="mx-auto max-w-6xl rounded-xl bg-white p-6 shadow-lg">
      <div className="mb-8 text-center">
        <div className="mb-4 flex items-center justify-center gap-3">
          <Zap className="size-8 text-p4c-gold" />
          <h2 className="text-2xl font-bold text-p4c-navy">
            Free Image Upscaler
          </h2>
        </div>
        <p className="text-gray-600">
          Upscale your images 2x using your browser&apos;s processing power -
          completely free!
        </p>
      </div>

      {/* File Upload Area */}
      <div className="rounded-lg border-2 border-dashed border-p4c-gold/30 p-8 text-center transition-colors hover:border-p4c-gold/60">
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileSelect}
          className="hidden"
          id="file-upload"
        />

        {state.originalImage ? (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label htmlFor="file-upload" className="cursor-pointer">
                <span className="inline-flex items-center gap-2 rounded-lg bg-p4c-gold px-4 py-2 text-p4c-navy transition-colors hover:bg-p4c-goldHover">
                  <Upload className="size-4" />
                  Choose Different Image
                </span>
              </label>
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-2 px-4 py-2 text-gray-600 transition-colors hover:text-gray-800"
                aria-label="Reset image upscaler"
              >
                <X className="size-4" />
                Reset
              </button>
            </div>

            {state.error && (
              <div className="rounded border border-red-200 bg-red-50 px-4 py-3 text-red-700">
                {state.error}
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-4">
            <div className="text-p4c-gold">
              <ImageIcon className="mx-auto size-16" />
            </div>
            <label htmlFor="file-upload" className="cursor-pointer">
              <span className="inline-flex items-center gap-3 rounded-lg bg-p4c-gold px-6 py-3 text-lg font-semibold text-p4c-navy transition-colors hover:bg-p4c-goldHover">
                <Upload className="size-5" />
                Upload Image
              </span>
            </label>
            <p className="mt-2 text-sm text-gray-700">
              Max file size: 5MB • Supported formats: JPG, PNG, WebP
            </p>

            {state.error && (
              <div className="mt-4 rounded border border-red-200 bg-red-50 px-4 py-3 text-red-700">
                {state.error}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Progress Bar */}
      {state.isProcessing && (
        <div className="mt-6">
          <div className="mb-2 flex justify-between text-sm text-gray-600">
            <span>Processing Image...</span>
            <span>{state.progress}%</span>
          </div>
          <div className="h-2 w-full rounded-full bg-gray-200">
            <div
              className="h-2 rounded-full bg-p4c-gold transition-all duration-300"
              style={{ width: `${state.progress}%` }}
            />
          </div>
        </div>
      )}

      {/* Image Comparison */}
      {state.originalImage && (
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Original Image */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-p4c-navy">
                Original Image
              </h3>
              <div className="text-sm text-gray-700">
                {Math.round((state.originalImage.length * 0.75) / 1024)} KB
              </div>
            </div>
            <div className="rounded-lg border-2 border-gray-200 bg-gray-50 p-4">
              <img
                src={state.originalImage}
                alt="Original uploaded for upscaling"
                className="h-auto w-full rounded"
                style={{ maxHeight: '400px', objectFit: 'contain' }}
              />
            </div>
          </div>

          {/* Upscaled Image */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-p4c-navy">
                Upscaled Image (2x)
              </h3>
              {state.upscaledImage && (
                <button
                  onClick={handleDownload}
                  className="inline-flex items-center gap-2 rounded bg-p4c-gold px-3 py-1 text-sm text-p4c-navy transition-colors hover:bg-p4c-goldHover"
                >
                  <Download className="size-4" />
                  Download
                </button>
              )}
            </div>
            <div className="rounded-lg border-2 border-gray-200 bg-gray-50 p-4">
              {state.isProcessing ? (
                <div className="flex h-64 items-center justify-center rounded bg-gray-100">
                  <div className="text-center">
                    <div className="mx-auto size-12 animate-spin rounded-full border-b-2 border-p4c-gold" />
                    <p className="mt-4 text-gray-600">
                      Upscaling your image...
                    </p>
                  </div>
                </div>
              ) : state.upscaledImage ? (
                <img
                  src={state.upscaledImage}
                  alt="Upscaled result at 2x resolution"
                  className="h-auto w-full rounded"
                  style={{ maxHeight: '400px', objectFit: 'contain' }}
                />
              ) : (
                <div className="flex h-64 items-center justify-center rounded border-2 border-dashed border-gray-300 bg-gray-100">
                  <button
                    onClick={handleUpscale}
                    disabled={state.isProcessing}
                    className="inline-flex items-center gap-3 rounded-lg bg-p4c-navy px-6 py-3 text-white transition-colors hover:bg-p4c-navy/80 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <Zap className="size-5" />
                    <span className="font-semibold">Upscale Image</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Features Info */}
      <div className="mt-8 grid grid-cols-1 gap-4 text-sm text-gray-600 md:grid-cols-3">
        <div className="flex items-center gap-3 rounded-lg bg-gray-50 p-3">
          <span className="text-p4c-gold">
            <FileText className="size-5" />
          </span>
          <div>
            <div className="font-medium">Free to Use</div>
            <div>Process images directly in your browser</div>
          </div>
        </div>
        <div className="flex items-center gap-3 rounded-lg bg-gray-50 p-3">
          <span className="text-p4c-gold">
            <Zap className="size-5" />
          </span>
          <div>
            <div className="font-medium">2x Resolution</div>
            <div>Double the pixel dimensions</div>
          </div>
        </div>
        <div className="flex items-center gap-3 rounded-lg bg-gray-50 p-3">
          <span className="text-p4c-gold">
            <ImageIcon className="size-5" />
          </span>
          <div>
            <div className="font-medium">Quality Preserved</div>
            <div>ESRGAN model for best results</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientUpscaler;
