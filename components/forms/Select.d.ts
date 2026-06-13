import * as React from 'react';

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  hint?: string;
  error?: string;
  children?: React.ReactNode;
}

/** Native select styled to match Input, with a mono chevron. */
export function Select(props: SelectProps): JSX.Element;
