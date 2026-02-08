import React from 'react';
import { TimelineItem } from '../ui/TimelineItem';
import { TIMELINE_DATA } from '../../constants/timelineData';

export const TimelineSection: React.FC = () => (
  <section
    className="overflow-hidden bg-p4c-beige py-20"
    aria-label="Our Growth Timeline"
  >
    <div className="container relative mx-auto px-4">
      <h2 className="mb-16 animate-fade-in-up text-center font-serif text-4xl text-p4c-gold">
        Our Journey of Revitalization
      </h2>

      {/* The Continuous Vertical Line */}
      <div
        className="absolute bottom-0 left-7 top-40 w-0.5 bg-gradient-to-b from-p4c-gold via-p4c-gold/20 to-transparent md:left-1/2 md:-translate-x-1/2"
        aria-hidden="true"
      />

      <ol className="relative z-10 list-none">
        {TIMELINE_DATA.map((milestone, index) => (
          <TimelineItem
            key={milestone.id}
            milestone={milestone}
            index={index}
          />
        ))}
      </ol>
    </div>
  </section>
);
