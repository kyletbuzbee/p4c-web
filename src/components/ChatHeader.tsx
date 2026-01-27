import { IMAGES } from '../constants/images';

/* src/components/bot/ChatHeader.tsx */
<div className="p4c-bot-header">
  <div className="flex items-center gap-3">
    {/* The Avatar */}
    <div className="w-8 h-8 rounded-full bg-white/10 p-1 border border-p4c-gold overflow-hidden">
      <img
        src={IMAGES.BOT.ARCHITECT}
        alt="Properties 4 Creation Digital Architect"
        className="w-full h-full object-cover"
      />
    </div>
    <div>
      <h3>Digital Architect</h3>
      <span className="status-indicator">
        <span className="status-dot" />
        Online
      </span>
    </div>
  </div>
</div>;
