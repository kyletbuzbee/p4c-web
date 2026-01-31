import React from 'react';
import { useInView } from 'react-intersection-observer';
import { TimelineMilestone } from '../../types/timeline';

interface TimelineItemProps {
  milestone: TimelineMilestone;
  index: number;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({
  milestone,
  index,
}) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const isEven = index % 2 === 0;

  return (
    <li
      ref={ref}
      className={`relative mb-16 flex w-full flex-col items-center md:mb-24 md:flex-row ${
        isEven ? 'md:flex-row-reverse' : ''
      }`}
    >
      {/* The Central Spine Node */}
      <div
        className={`absolute left-4 z-20 size-6 -translate-x-1/2 rounded-full border-4 border-p4c-navy transition-all duration-1000 md:left-1/2 ${
          inView
            ? 'scale-125 bg-p4c-gold shadow-[0_0_15px_rgba(212,175,55,0.6)]'
            : 'scale-100 bg-gray-400'
        }`}
        aria-hidden="true"
      />

      {/* Content Card */}
      <div
        className={`ml-12 w-full transition-all delay-300 duration-1000 md:ml-0 md:w-[42%] ${
          inView
            ? 'translate-y-0 opacity-100'
            : 'translate-y-10 opacity-0'
        }`}
      >
        <article className="rounded-xl border border-p4c-gold/20 bg-p4c-navy p-6 shadow-2xl transition-colors hover:border-p4c-gold/60">
          <time className="mb-2 block font-serif text-3xl font-bold text-p4c-gold">
            {milestone.year}
          </time>
          <h3 className="mb-3 text-xl font-bold text-white">
            {milestone.title}
          </h3>
          <p className="text-sm leading-relaxed text-gray-300">
            {milestone.description}
          </p>
        </article>
      </div>
    </li>
  );
};
