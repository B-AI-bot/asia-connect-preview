import * as React from 'react';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  hint?: string;
  error?: string;
  /** @default 4 */
  rows?: number;
}

/** Multi-line text field, matching Input styling. */
export function Textarea(props: TextareaProps): JSX.Element;
