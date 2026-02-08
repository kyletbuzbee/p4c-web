import React, { useState, useRef } from 'react';
import { ArrowLeftRight } from 'lucide-react';

interface BeforeAfterProps {
  beforeImage: string;
  afterImage: string;
  label: string;
}

const BeforeAfterSlider: React.FC<BeforeAfterProps> = ({
  beforeImage,
  afterImage,
  label,
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <div className="group relative h-[300px] w-full select-none overflow-hidden rounded-2xl border border-gray-200 shadow-xl ring-1 ring-gray-900/5 md:h-[400px]">
      {/* After Image (Background) */}
      <img
        src={afterImage}
        alt={`Renovated ${label} - After`}
        loading="lazy"
        className="absolute left-0 top-0 size-full object-cover"
      />
      <div className="bg-p4c-navy/90 absolute right-4 top-4 rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg">
        After
      </div>

      {/* Before Image (Foreground - Clipped) */}
      <div
        className="absolute left-0 top-0 size-full overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <img
          src={beforeImage}
          alt={`Original ${label} - Before`}
          loading="lazy"
          className="absolute left-0 top-0 h-full max-w-none object-cover"
          style={{
            width: containerRef.current
              ? containerRef.current.offsetWidth
              : '100%',
          }}
        />
        <div className="absolute left-4 top-4 rounded-full bg-gray-900/90 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg">
          Before
        </div>
      </div>

      {/* Slider Control Line */}
      <div
        className="pointer-events-none absolute inset-y-0 z-20 w-1 cursor-ew-resize bg-white shadow-[0_0_15px_rgba(0,0,0,0.5)]"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-p4c-gold p-3 shadow-xl">
          <ArrowLeftRight className="size-5 text-p4c-navy" />
        </div>
      </div>

      {/* Hidden Range Input for Accessibility & Interaction */}
      <input
        type="range"
        min="0"
        max="100"
        value={sliderPosition}
        onChange={handleRangeChange}
        className="absolute left-0 top-0 z-30 size-full cursor-ew-resize opacity-0 focus:outline-none focus:ring-2 focus:ring-p4c-gold focus:ring-offset-2"
        aria-label={`Compare before and after renovation of ${label}`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={sliderPosition}
      />
    </div>
  );
};

export default BeforeAfterSlider;
