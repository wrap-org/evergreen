import { useEffect, useRef } from 'react';

// https://www.alltimepower.com/blog/react-hook-forms-custom-checkbox/
// tl;dr make custom inputs work like normal inputs
export default function useCombinedRefs(...refs) {
  const targetRef = useRef<any>();

  useEffect(() => {
    refs.forEach((ref) => {
      if (!ref) return;

      if (typeof ref === 'function') {
        ref(targetRef.current);
      } else {
        // eslint-disable-next-line no-param-reassign
        ref.current = targetRef.current;
      }
    });
  }, [refs]);

  return targetRef;
}
