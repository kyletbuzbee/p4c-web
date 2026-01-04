
import React, { useState, useRef } from 'react';
import { Sparkles, Image as ImageIcon, Loader2, Upload, AlertCircle } from 'lucide-react';
import { editImageWithGemini } from '../services/geminiService';

const GeminiImageEditor: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [mimeType, setMimeType] = useState<string>('image/jpeg');
  const [prompt, setPrompt] = useState('');
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setError("Image size too large. Please use an image under 5MB.");
        return;
      }
      
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setSelectedImage(result);
        setMimeType(file.type);
        setGeneratedImage(null); // Reset generated image on new upload
        setError(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerate = async () => {
    if (!selectedImage || !prompt) return;

    setLoading(true);
    setError(null);

    try {
      // Strip base64 prefix for the API call
      const base64Data = selectedImage.split(',')[1];
      const result = await editImageWithGemini(base64Data, mimeType, prompt);
      setGeneratedImage(result);
    } catch (err) {
      setError("Failed to process image. Please try again with a different prompt.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 ring-1 ring-gray-900/5">
      <div className="bg-p4c-navy p-6 border-b border-gray-800">
        <h3 className="text-xl font-serif font-bold text-p4c-beige flex items-center gap-2">
          <Sparkles className="text-p4c-gold w-5 h-5" />
          AI Renovation Visualizer
        </h3>
        <p className="text-gray-300 text-sm mt-2">
          Visualize potential upgrades. Upload a photo of a room and describe changes (e.g., "Add hardwood floors and modern lighting").
        </p>
      </div>

      <div className="p-6 space-y-6">
        {/* Upload Section */}
        {!selectedImage ? (
          <div 
            onClick={() => fileInputRef.current?.click()}
            className="border-2 border-dashed border-gray-300 rounded-2xl p-12 flex flex-col items-center justify-center cursor-pointer hover:border-p4c-gold hover:bg-p4c-beige/50 transition-all group"
          >
            <div className="bg-gray-50 p-4 rounded-full mb-4 group-hover:scale-110 transition-transform">
              <Upload className="w-8 h-8 text-gray-400 group-hover:text-p4c-gold" />
            </div>
            <p className="font-medium text-p4c-navy text-lg">Click to upload a room photo</p>
            <p className="text-sm text-gray-500 mt-1">Supports JPG, PNG (Max 5MB)</p>
            <input 
              type="file" 
              ref={fileInputRef} 
              className="hidden" 
              accept="image/*"
              onChange={handleImageUpload}
            />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Original Image / Input View */}
            <div className="space-y-4">
              <div className="relative rounded-2xl overflow-hidden h-64 bg-gray-100 border border-gray-200 shadow-inner">
                <img src={selectedImage} alt="Original upload" className="w-full h-full object-cover" />
                <button 
                  onClick={() => { setSelectedImage(null); setGeneratedImage(null); }}
                  className="absolute top-2 right-2 bg-black/60 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full hover:bg-black/80 font-medium transition-colors"
                >
                  Change Photo
                </button>
                <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm text-p4c-navy text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                  Original
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="prompt" className="block text-sm font-medium text-gray-700">
                  What would you like to change?
                </label>
                <div className="flex gap-2">
                  <input
                    id="prompt"
                    type="text"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="e.g. Add a retro filter, remove clutter..."
                    className="flex-1 rounded-lg border-gray-300 shadow-sm focus:border-p4c-gold focus:ring focus:ring-p4c-gold/50 px-4 py-2 border"
                  />
                  <button
                    onClick={handleGenerate}
                    disabled={loading || !prompt}
                    className="bg-p4c-navy text-white px-6 py-2 rounded-lg font-medium hover:bg-p4c-navy/90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 transition-colors shadow-md"
                  >
                    {loading ? <Loader2 className="animate-spin w-4 h-4" /> : <Sparkles className="w-4 h-4 text-p4c-gold" />}
                    Visualize
                  </button>
                </div>
              </div>
            </div>

            {/* Result View */}
            <div className="relative rounded-2xl overflow-hidden h-64 bg-gray-100 border border-gray-200 flex items-center justify-center shadow-inner">
              {loading ? (
                <div className="text-center p-6">
                  <Loader2 className="w-10 h-10 text-p4c-gold animate-spin mx-auto mb-4" />
                  <p className="text-sm text-gray-600 font-medium">Renovating pixel by pixel...</p>
                </div>
              ) : generatedImage ? (
                <>
                  <img src={generatedImage} alt="AI Generated renovation" className="w-full h-full object-cover animate-fade-in" />
                  <div className="absolute bottom-2 left-2 bg-p4c-gold text-p4c-navy text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                    AI Preview
                  </div>
                </>
              ) : (
                <div className="text-center text-gray-400 p-6">
                  <ImageIcon className="w-12 h-12 mx-auto mb-3 opacity-30" />
                  <p className="text-sm font-medium">Your visual renovation will appear here</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 text-red-700 p-4 rounded-lg flex items-center gap-3 text-sm border border-red-100">
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
            {error}
          </div>
        )}
      </div>
    </div>
  );
};

export default GeminiImageEditor;
