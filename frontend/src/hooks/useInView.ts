import { useEffect, useState } from 'react';
import type { RefObject } from 'react';

export default function useInView<T extends Element = Element>(
  ref: RefObject<T | null>,
  options?: IntersectionObserverInit,
  once = false
) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.unobserve(entry.target);
        } else {
          if (!once) setInView(false);
        }
      });
    }, options);

    observer.observe(el);

    return () => observer.disconnect();
  }, [ref, options, once]);

  return inView;
}
