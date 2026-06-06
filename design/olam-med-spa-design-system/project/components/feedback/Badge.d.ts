import * as React from 'react';

/** Eyebrow / status badge — tracked-uppercase label with optional dot. */
export interface BadgeProps {
  children: React.ReactNode;
  tone?: 'accent' | 'green' | 'danger' | 'muted';
  dot?: boolean;
  style?: React.CSSProperties;
}

export function Badge(props: BadgeProps): JSX.Element;
