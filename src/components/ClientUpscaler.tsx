import React, { useState, useRef, useCallback } from 'react';
import {
  Upload,
  Zap,
  Download,
  Image as ImageIcon,
  X,
  FileText
} from 'lucide-react';

interface UpscalerState {
  originalImage: string | null;
  upscaledImage: string | null;
  isProcessing: boolean;
  progress: number;
  error: string | null;
}

const ClientUpscaler: React.FC = () => {
  const [state, setState] = useState<UpscalerState>({
    originalImage: null,
    upscaledImage: null,
    isProcessing: false,
    progress: 0,
    error: null
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setState(prev => ({
        ...prev,
        error: 'File size must be under 5MB'
      }));
      return;
    }

    // Validate file type
    if (!file.type.startsWith('image/')) {
      setState(prev => ({
        ...prev,
        error: 'Please select a valid image file'
      }));
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const imageDataUrl = e.target?.result as string;
      setState(prev => ({
        ...prev,
        originalImage: imageDataUrl,
        upscaledImage: null,
        error: null,
        progress: 0
      }));
    };
    reader.readAsDataURL(file);
  }, []);

  const handleUpscale = useCallback(async () => {
    if (!state.originalImage) return;

    try {
      setState(prev => ({
        ...prev,
        isProcessing: true,
        progress: 0,
        error: null
      }));

      // Import upscaler dynamically to avoid SSR issues
      const { default: Upscaler } = await import('upscaler');

      // Initialize upscaler
      const upscaler = new Upscaler();

      // Create image element for upscaler
      const img = new Image();
      img.src = state.originalImage;

      // Wait for image to load
      await new Promise((resolve) => {
        img.onload = resolve;
      });

      // Update progress
      setState(prev => ({ ...prev, progress: 30 }));

      // Upscale the image
      const upscaled = await upscaler.upscale(img);

      // The upscaled result is already a data URL string
      if (typeof upscaled === 'string') {
        setState(prev => ({
          ...prev,
          upscaledImage: upscaled,
          progress: 100,
          isProcessing: false
        }));
      }

    } catch (error) {
      console.error('Upscaling failed:', error);
      setState(prev => ({
        ...prev,
        error: 'Failed to upscale image. Please try again.',
        isProcessing: false
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
      error: null
    });
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Zap className="w-8 h-8 text-p4c-gold" />
          <h2 className="text-2xl font-bold text-p4c-navy">Free Image Upscaler</h2>
        </div>
        <p className="text-gray-600">
          Upscale your images 2x using your browser's processing power - completely free!
        </p>
      </div>

      {/* File Upload Area */}
      <div className="border-2 border-dashed border-p4c-gold/30 rounded-lg p-8 text-center hover:border-p4c-gold/60 transition-colors">
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
            <div className="flex justify-between items-center">
              <label htmlFor="file-upload" className="cursor-pointer">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-p4c-gold text-p4c-navy rounded-lg hover:bg-p4c-goldHover transition-colors">
                  <Upload className="w-4 h-4" />
                  Choose Different Image
                </span>
              </label>
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                <X className="w-4 h-4" />
                Reset
              </button>
            </div>

            {state.error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
                {state.error}
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-4">
            <div className="text-p4c-gold">
              <ImageIcon className="w-16 h-16 mx-auto" />
            </div>
            <label htmlFor="file-upload" className="cursor-pointer">
              <span className="inline-flex items-center gap-3 px-6 py-3 bg-p4c-gold text-p4c-navy rounded-lg hover:bg-p4c-goldHover transition-colors text-lg font-semibold">
                <Upload className="w-5 h-5" />
                Upload Image
              </span>
            </label>
            <p className="text-sm text-gray-500 mt-2">
              Max file size: 5MB • Supported formats: JPG, PNG, WebP
            </p>

            {state.error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mt-4">
                {state.error}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Progress Bar */}
      {state.isProcessing && (
        <div className="mt-6">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Processing Image...</span>
            <span>{state.progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-p4c-gold h-2 rounded-full transition-all duration-300"
              style={{ width: `${state.progress}%` }}
            ></div>
          </div>
        </div>
      )}

      {/* Image Comparison */}
      {state.originalImage && (
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Original Image */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-p4c-navy">Original Image</h3>
              <div className="text-sm text-gray-500">
                {Math.round((state.originalImage.length * 0.75) / 1024)} KB
              </div>
            </div>
            <div className="border-2 border-gray-200 rounded-lg p-4 bg-gray-50">
              <img
                src={state.originalImage}
                alt="Original"
                className="w-full h-auto rounded"
                style={{ maxHeight: '400px', objectFit: 'contain' }}
              />
            </div>
          </div>

          {/* Upscaled Image */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-p4c-navy">Upscaled Image (2x)</h3>
              {state.upscaledImage && (
                <button
                  onClick={handleDownload}
                  className="inline-flex items-center gap-2 px-3 py-1 bg-p4c-gold text-p4c-navy rounded hover:bg-p4c-goldHover transition-colors text-sm"
                >
                  <Download className="w-4 h-4" />
                  Download
                </button>
              )}
            </div>
            <div className="border-2 border-gray-200 rounded-lg p-4 bg-gray-50">
              {state.isProcessing ? (
                <div className="flex items-center justify-center h-64 bg-gray-100 rounded">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-p4c-gold mx-auto"></div>
                    <p className="mt-4 text-gray-600">Upscaling your image...</p>
                  </div>
                </div>
              ) : state.upscaledImage ? (
                <img
                  src={state.upscaledImage}
                  alt="Upscaled"
                  className="w-full h-auto rounded"
                  style={{ maxHeight: '400px', objectFit: 'contain' }}
                />
              ) : (
                <div className="flex items-center justify-center h-64 bg-gray-100 rounded border-2 border-dashed border-gray-300">
                  <button
                    onClick={handleUpscale}
                    disabled={state.isProcessing}
                    className="inline-flex items-center gap-3 px-6 py-3 bg-p4c-navy text-white rounded-lg hover:bg-p4c-navy/80 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <Zap className="w-5 h-5" />
                    <span className="font-semibold">Upscale Image</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Features Info */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
          <span className="text-p4c-gold">
            <FileText className="w-5 h-5" />
          </span>
          <div>
            <div className="font-medium">Free to Use</div>
            <div>Process images directly in your browser</div>
          </div>
        </div>
        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
          <span className="text-p4c-gold">
            <Zap className="w-5 h-5" />
          </span>
          <div>
            <div className="font-medium">2x Resolution</div>
            <div>Double the pixel dimensions</div>
          </div>
        </div>
        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
          <span className="text-p4c-gold">
            <ImageIcon className="w-5 h-5" />
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