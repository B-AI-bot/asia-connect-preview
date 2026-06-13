import * as React from 'react';

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Selected (filter) state. @default false */
  selected?: boolean;
  /** Enable hover/cursor affordance. @default false */
  interactive?: boolean;
  children?: React.ReactNode;
}

/** Rounded chip for sectors and capabilities; doubles as a filter pill. */
export function Tag(props: TagProps): JSX.Element;
