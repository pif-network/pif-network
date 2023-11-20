'use client';

import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react';

interface ScrollValue {
  scrollY: number;
  navBar: {
    shouldHide: boolean;
    setShouldHide?: (value: boolean) => void;
  };
}

export const PositionContext = createContext<ScrollValue>({
  scrollY: 0,
  navBar: {
    shouldHide: false,
  },
});

export const PositionObserver = ({ children }: { children: ReactNode }) => {
  const [scrollY, setScrollY] = useState(0);
  const [shouldHideNavBar, setShouldHideNavBar] = useState(false);

  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  useEffect(() => {
    document.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <PositionContext.Provider
      value={{
        scrollY,
        navBar: {
          shouldHide: shouldHideNavBar,
          setShouldHide: setShouldHideNavBar,
        },
      }}
    >
      {children}
    </PositionContext.Provider>
  );
};
