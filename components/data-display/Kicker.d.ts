import * as React from 'react';

export interface KickerProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Optional leading index, e.g. "01" or "№ 01 / 04". */
  index?: string | number | null;
  /** Show a short brass tick rule before the text. @default false */
  tick?: boolean;
  /** Use the brass accent for the whole label. @default false */
  accent?: boolean;
  children?: React.ReactNode;
}

/** Signature mono overline that sits above headings. */
export function Kicker(props: KickerProps): JSX.Element;
