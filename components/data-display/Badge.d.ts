import * as React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Semantic tone. @default "neutral" */
  tone?: 'neutral' | 'brass' | 'success' | 'warning' | 'danger';
  /** Filled style instead of tinted. @default false */
  solid?: boolean;
  /** Show a leading status dot. @default false */
  dot?: boolean;
  children?: React.ReactNode;
}

/** Compact status / category marker. */
export function Badge(props: BadgeProps): JSX.Element;
