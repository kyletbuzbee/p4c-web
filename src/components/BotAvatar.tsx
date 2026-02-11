import React from 'react';
import { IMAGES } from '../constants/images';

interface BotAvatarProps {
  className?: string;
  size?: number;
}

const BotAvatar: React.FC<BotAvatarProps> = ({ className = '', size = 48 }) => (
  <img
    src={IMAGES.BOT.ARCHITECT}
    alt="Properties 4 Creation Digital Architect Avatar"
    width={size}
    height={size}
    className={`block rounded-full ${className}`}
    role="img"
  />
);

export default BotAvatar;