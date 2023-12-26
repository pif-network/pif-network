import { createContext, useContext, useEffect, useRef } from 'react';

import { PositionContext, ScrollDirection } from '~/lib/contexts';

interface Value {
  numberOfTiles: number;
  progress: number;
}

export const SnapTileContext = createContext<Value>({
  numberOfTiles: 0,
  progress: 0,
});

export const SnapTileWrapper = ({
  children,
  numberOfTiles,
}: {
  children: React.ReactNode;
  numberOfTiles: number;
}) => {
  const { scrollY, scrollDirection } = useContext(PositionContext);
  const { navBar } = useContext(PositionContext);
  const containerRef = useRef<HTMLDivElement>(null);
  let currentTile = 0;

  if (containerRef.current) {
    const { clientHeight, offsetTop } = containerRef.current;
    const screenHeight = window.innerHeight;
    const halfScreenHeight = screenHeight / 2;
    const percentScrolled =
      Math.min(
        clientHeight + halfScreenHeight,
        Math.max(-screenHeight, scrollY - offsetTop) + halfScreenHeight
      ) / clientHeight;

    currentTile = percentScrolled * numberOfTiles;
  }

  useEffect(() => {
    if (containerRef.current) {
      const { clientHeight, offsetTop } = containerRef.current;

      const scrollDownAndTouchTopEdge =
        scrollDirection === ScrollDirection.DOWN &&
        Math.abs(scrollY - offsetTop) < 90;
      const scrollInside =
        scrollY > offsetTop && scrollY < offsetTop + clientHeight;

      if (scrollDownAndTouchTopEdge || scrollInside) {
        navBar.setShouldHide?.(true);
      } else {
        navBar.setShouldHide?.(false);
      }
    }
  });

  return (
    <SnapTileContext.Provider value={{ numberOfTiles, progress: currentTile }}>
      <div
        ref={containerRef}
        className="relative"
        style={{
          height: numberOfTiles * 100 + 'vh',
        }}
      >
        {children}
      </div>
    </SnapTileContext.Provider>
  );
};

export const SnapTileBackground = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <div className="absolute w-full h-full">{children}</div>;
};

export const SnapTileContent = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="sticky top-0 h-screen overflow-hidden">{children}</div>
  );
};

interface SnapTileProps {
  tileNumber: number;
  render: (progress: number) => React.ReactNode;
}

export const SnapTile = ({ tileNumber, render }: SnapTileProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { numberOfTiles, progress } = useContext(SnapTileContext);
  const currentTileProgress = Math.max(0, progress - tileNumber);

  let opacity = Math.min(1, Math.max(0, currentTileProgress * 4));
  if (currentTileProgress > 0.85 && tileNumber < numberOfTiles - 1) {
    opacity = Math.max(0, (1 - currentTileProgress) * 4);
  }

  return (
    <div
      ref={containerRef}
      className="absolute top-0 w-full"
      style={{
        pointerEvents:
          currentTileProgress >= 0 || currentTileProgress >= 1
            ? 'none'
            : undefined,
        opacity,
      }}
    >
      {render(currentTileProgress)}
    </div>
  );
};
