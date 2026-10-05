import React from 'react';
import { useInView } from '../hooks/useInView';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;

  variant?: 'default' | '3d';

  direction?: 'up' | 'down' | 'left' | 'right';

  delay?: number;

  threshold?: number | number[];

  rootMargin?: string;

  triggerOnce?: boolean;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  variant = 'default',
  direction = 'up',
  delay = 0,

  /*
   * Keep the default trigger forgiving.
   * The animation should NEVER get stuck invisible.
   */
  threshold = 0.05,

  rootMargin = '0px 0px -10% 0px',

  triggerOnce = true,
}) => {
  const [ref, isInView] = useInView<HTMLDivElement>({
    threshold,
    rootMargin,
    triggerOnce,
  });

  return (
    <div
      ref={ref}
      className={`
        scroll-reveal
        scroll-reveal-${variant}
        scroll-reveal-${direction}
        ${isInView ? 'is-visible' : ''}
        ${className}
      `}
      style={
        {
          '--scroll-reveal-delay': `${delay}ms`,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
};

export default ScrollReveal;