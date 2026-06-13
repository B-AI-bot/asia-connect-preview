import * as React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. @default "primary" */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  /** Control height. @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Show a trailing arrow that nudges right on hover. @default false */
  arrow?: boolean;
  /** Optional leading icon node. */
  iconLeft?: React.ReactNode;
  /** Stretch to fill the container. @default false */
  fullWidth?: boolean;
  /** Render as another element (e.g. "a" for links). @default "button" */
  as?: 'button' | 'a';
  children?: React.ReactNode;
}

/**
 * Primary call-to-action and supporting buttons.
 * @startingPoint section="Actions" subtitle="Button variants & sizes" viewport="700x150"
 */
export function Button(props: ButtonProps): JSX.Element;
