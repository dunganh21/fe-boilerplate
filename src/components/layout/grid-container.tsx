import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface GridContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className }: GridContainerProps) {
  return (
    <div
      className={cn('mx-auto px-6', className)}
      style={{ maxWidth: 'var(--max-width-grid)' }}
    >
      {children}
    </div>
  );
}

interface GridProps {
  children: ReactNode;
  className?: string;
}

export function Grid({ children, className }: GridProps) {
  return (
    <div
      className={cn(
        'grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-3 sm:gap-4 lg:gap-8 w-full',
        className
      )}
    >
      {children}
    </div>
  );
}

interface GridItemProps {
  children: ReactNode;
  span?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  start?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  end?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13;
  className?: string;
}

export function GridItem({
  children,
  span,
  start,
  end,
  className,
}: GridItemProps) {
  const gridClasses = (() => {
    const classes: string[] = [];

    if (span) {
      classes.push(`col-span-${span}`);
    }
    if (start) {
      classes.push(`col-start-${start}`);
    }
    if (end) {
      classes.push(`col-end-${end}`);
    }

    return classes.join(' ');
  })();

  return <div className={cn(gridClasses, className)}>{children}</div>;
}
