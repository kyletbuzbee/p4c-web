import React from 'react';

interface BotAvatarProps {
  className?: string;
  size?: number;
}

const BotAvatar: React.FC<BotAvatarProps> = ({ className = '', size = 48 }) => {
  // Brand Colors from index.css
  const colors = {
    navy: '#0B1120',
    gold: '#C5A059',
    white: '#FFFFFF',
    beige: '#F5F5F0',
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`block ${className}`}
      aria-label="Properties 4 Creation Digital Architect Avatar"
      role="img"
    >
      {/* 1. Background Container (Navy with Gold Ring) */}
      <circle cx="32" cy="32" r="30" fill={colors.navy} />
      <circle cx="32" cy="32" r="30" stroke={colors.gold} strokeWidth="2" />

      {/* 2. The 'Structure' (House Outline) */}
      {/* Represents Housing/Stability */}
      <path
        d="M32 14L15 27V50H49V27L32 14Z"
        fill="none"
        stroke={colors.gold}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* 3. The 'Digital' Core (Internal Circuitry) */}
      {/* Represents Intelligence/Analysis */}
      <path
        d="M32 24V34"
        stroke={colors.gold}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="32" cy="38" r="3" fill={colors.gold} />

      {/* Circuit Nodes connecting to the house frame */}
      <path
        d="M22 34H26"
        stroke={colors.gold}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M38 34H42"
        stroke={colors.gold}
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* 4. Subtle Glow/Highlight (Top Reflection) */}
      <path
        d="M32 4C47.464 4 60 16.536 60 32"
        stroke="url(#glowGradient)"
        strokeWidth="1"
        strokeOpacity="0.4"
        strokeLinecap="round"
      />

      <defs>
        <linearGradient
          id="glowGradient"
          x1="32"
          y1="4"
          x2="60"
          y2="32"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={colors.white} />
          <stop offset="1" stopColor={colors.white} stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default BotAvatar;
