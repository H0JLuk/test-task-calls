import { RefObject, useEffect } from 'react';

export default function useOutsideAlerter(ref: RefObject<HTMLElement>, cb: () => void) {
  useEffect(() => {
    const handleClickOutside: EventListener = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        cb();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
}
