import * as React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Mono uppercase label above the field. */
  label?: string;
  /** Helper text below the field. */
  hint?: string;
  /** Error message (overrides hint, turns the field cinnabar). */
  error?: string;
}

/** Single-line text field with label, hint and error states. */
export function Input(props: InputProps): JSX.Element;
