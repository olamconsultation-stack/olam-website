import * as React from 'react';

/** Pill tag / chip for metadata, technology labels, and image overlays. */
export interface TagProps {
  children: React.ReactNode;
  variant?: 'soft' | 'green' | 'solid' | 'outline' | 'glass';
  style?: React.CSSProperties;
}

export function Tag(props: TagProps): JSX.Element;
