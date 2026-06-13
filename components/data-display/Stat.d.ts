import * as React from 'react';

export interface StatProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The headline figure, e.g. "20+" or "< 10 days". */
  value: React.ReactNode;
  /** Mono caption under the figure. */
  label: string;
  /** Optional supporting line. */
  sub?: React.ReactNode;
  /** @default "left" */
  align?: 'left' | 'center';
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
}

/** Headline proof-point metric (serif figure + mono label). */
export function Stat(props: StatProps): JSX.Element;
