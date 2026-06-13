import * as React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Serif title. */
  title?: React.ReactNode;
  /** Mono kicker above the title. */
  kicker?: React.ReactNode;
  /** Coordinate index shown top-right, e.g. "01". */
  index?: string | number | null;
  /** Footer node (e.g. a text link). */
  footer?: React.ReactNode;
  /** Hover lift + brass top-rule. @default false */
  interactive?: boolean;
  /** "ink" for dark-section cards. @default "default" */
  theme?: 'default' | 'ink';
  /** Render as a link. */
  href?: string | null;
  children?: React.ReactNode;
}

/**
 * Primary content surface — services, insights, capability cards.
 * @startingPoint section="Surfaces" subtitle="Hairline card with kicker, title, body" viewport="700x260"
 */
export function Card(props: CardProps): JSX.Element;
