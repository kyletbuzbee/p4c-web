
import React, { useState, useRef } from 'react';
import { ArrowLeftRight } from 'lucide-react';

interface BeforeAfterProps {
  beforeImage: string;
  afterImage: string;
  label: string;
}

const BeforeAfterSlider: React.FC<BeforeAfterProps> = ({ beforeImage, afterImage, label }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSliderPosition(Number(e.target.value));
  }

  return (
    <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-2xl shadow-xl border border-gray-200 ring-1 ring-gray-900/5 group select-none">
      
      {/* After Image (Background) */}
      <img
        src={afterImage}
        alt={`Renovated ${label} - After`}
        loading="lazy"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute top-4 right-4 bg-p4c-navy/90 text-white text-xs px-3 py-1.5 rounded-full uppercase font-bold tracking-wider shadow-lg">
        After
      </div>

      {/* Before Image (Foreground - Clipped) */}
      <div
        className="absolute top-0 left-0 h-full w-full overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <img
          src={beforeImage}
          alt={`Original ${label} - Before`}
          loading="lazy"
          className="absolute top-0 left-0 h-full max-w-none object-cover"
          style={{ width: containerRef.current ? containerRef.current.offsetWidth : '100%' }}
        />
         <div className="absolute top-4 left-4 bg-gray-900/90 text-white text-xs px-3 py-1.5 rounded-full uppercase font-bold tracking-wider shadow-lg">
            Before
         </div>
      </div>

      {/* Slider Control Line */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-[0_0_15px_rgba(0,0,0,0.5)] z-20 pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-p4c-gold rounded-full p-3 shadow-xl border-2 border-white">
            <ArrowLeftRight className="w-5 h-5 text-p4c-navy" />
        </div>
      </div>

      {/* Hidden Range Input for Accessibility & Interaction */}
      <input
        type="range"
        min="0"
        max="100"
        value={sliderPosition}
        onChange={handleRangeChange}
        className="absolute top-0 left-0 w-full h-full opacity-0 cursor-ew-resize z-30 focus:outline-none"
        aria-label={`Compare before and after renovation of ${label}`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={sliderPosition}
      />
    </div>
  );
};

export default BeforeAfterSlider;
