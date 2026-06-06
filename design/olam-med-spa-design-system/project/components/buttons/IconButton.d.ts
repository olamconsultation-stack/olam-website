import * as React from 'react';

/**
 * Circular Material-Symbols icon button.
 */
export interface IconButtonProps {
  /** Material Symbols Outlined ligature name, e.g. "chevron_right". */
  icon: string;
  variant?: 'accent' | 'primary' | 'ink' | 'outline';
  /** Diameter in px (default 40). */
  size?: number;
  /** Accessible label. */
  label?: string;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}

export function IconButton(props: IconButtonProps): JSX.Element;
