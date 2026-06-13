import * as React from 'react';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Accessible label (also the tooltip). Required. */
  label: string;
  /** @default "outline" */
  variant?: 'solid' | 'outline' | 'ghost';
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** The glyph / SVG node. */
  children?: React.ReactNode;
}

/** Square single-glyph control (close, menu, directional arrows). */
export function IconButton(props: IconButtonProps): JSX.Element;
