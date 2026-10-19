import React from "react";

export interface CardGridProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  max?: 2 | 3 | 4 | 5 | 6;
  className?: string;
}

const CardGrid = React.forwardRef<HTMLDivElement, CardGridProps>(
  function CardGrid(
    { children, max = 4, className = "", ...props },
    ref
  ) {
    const maxClass = `v3-card-grid-max-${max} card-grid-max-${max}`;

    return (
      <div ref={ref} className={`card-grid v3-card-grid ${maxClass} ${className}`} {...props}>
        {children}
      </div>
    );
  }
);

CardGrid.displayName = "CardGrid";

export default CardGrid;
