import { useRef } from 'react';
import type { PropsWithChildren } from 'react';
import useInView from '../../hooks/useInView';

export default function LazyLoad({ children, height = 320, once = false }: PropsWithChildren<{ height?: number; once?: boolean }>) {
  const ref = useRef<HTMLDivElement | null>(null);
  // use threshold so partial entry triggers animation
  const inView = useInView(ref, { threshold: 0.15 }, once);

  return (
    <div
      ref={ref}
      className={`lazy-wrapper ${inView ? 'lazy-visible' : 'lazy-hidden'}`}
      style={{ minHeight: height }}
      aria-hidden={!inView}
      aria-busy={!inView}
    >
      {children}
    </div>
  );
}
