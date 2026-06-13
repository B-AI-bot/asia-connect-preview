import * as React from 'react';

export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Full name — drives the monogram fallback and alt text. */
  name?: string;
  /** Image URL; omit to show the serif monogram. */
  src?: string | null;
  /** Diameter in px. @default 56 */
  size?: number;
  /** Brass seal ring for "principal" emphasis. @default false */
  ring?: boolean;
}

/** Partner portrait with serif-monogram fallback. */
export function Avatar(props: AvatarProps): JSX.Element;
