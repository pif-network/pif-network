'use client';

import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react';

export const ScrollDirection = {
  UP: 'UP',
  DOWN: 'DOWN',
} as const;

type TScrollDirection = (typeof ScrollDirection)[keyof typeof ScrollDirection];

interface Value {
  scrollY: number;
  scrollDirection: TScrollDirection;
  navBar: {
    shouldHide: boolean;
    setShouldHide?: (value: boolean) => void;
  };
}

export const PositionContext = createContext<Value>({
  scrollY: 0,
  scrollDirection: ScrollDirection.DOWN,
  navBar: {
    shouldHide: false,
  },
});

export const PositionObserver = ({ children }: { children: ReactNode }) => {
  const [scrollY, setScrollY] = useState(0);
  const [shouldHideNavBar, setShouldHideNavBar] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<TScrollDirection>(
    ScrollDirection.DOWN
  );

  const handleScroll = useCallback(() => {
    if (window.scrollY > scrollY) {
      setScrollDirection(ScrollDirection.DOWN);
    } else {
      setScrollDirection(ScrollDirection.UP);
    }

    setScrollY(window.scrollY);
  }, [scrollY]);

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
        scrollDirection,
        navBar: {
          shouldHide: shouldHideNavBar,
          setShouldHide: v => {
            setShouldHideNavBar(v);
          },
        },
      }}
    >
      {children}
    </PositionContext.Provider>
  );
};
