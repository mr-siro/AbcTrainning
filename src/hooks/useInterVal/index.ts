import {useRef, useEffect} from 'react';

export const useInterval = (callback: () => void, delay = 1000) => {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    // @ts-ignore
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    // @ts-ignore
    const tick = (...args: any[]) => savedCallback.current(...args);

    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};
