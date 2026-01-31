import React, { createContext, useContext, useState, useEffect } from 'react';

interface ImageFormatContextType {
  supportedFormat: string;
  isLoading: boolean;
}

const ImageFormatContext = createContext<ImageFormatContextType | undefined>(
  undefined
);

export const ImageFormatProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [supportedFormat, setSupportedFormat] = useState<string>('jpeg');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Check browser WebP/AVIF support
  const checkFormatSupport = () =>
    new Promise<string>((resolve) => {
      const canvas = document.createElement('canvas');
      canvas.width = 1;
      canvas.height = 1;

      // Test AVIF support
      const format = canvas
        .toDataURL('image/avif')
        .startsWith('data:image/avif')
        ? 'avif'
        : canvas.toDataURL('image/webp').startsWith('data:image/webp')
          ? 'webp'
          : 'jpeg';
      resolve(format);
    });

  useEffect(() => {
    const detectFormat = async () => {
      try {
        const format = await checkFormatSupport();
        setSupportedFormat(format);
      } catch (_error) {
        setSupportedFormat('jpeg');
      } finally {
        setIsLoading(false);
      }
    };

    detectFormat();
  }, []);

  return (
    <ImageFormatContext.Provider value={{ supportedFormat, isLoading }}>
      {children}
    </ImageFormatContext.Provider>
  );
};

export const useImageFormat = () => {
  const context = useContext(ImageFormatContext);
  if (context === undefined) {
    throw new Error(
      'useImageFormat must be used within an ImageFormatProvider'
    );
  }
  return context;
};
