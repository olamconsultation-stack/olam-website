import * as React from 'react';

/**
 * OLAM pill button. Direct, specific CTAs ("Reserve my consultation →").
 *
 * @startingPoint section="Buttons" subtitle="Primary / accent / secondary / ghost pill buttons" viewport="700x180"
 */
export interface ButtonProps {
  children: React.ReactNode;
  /** Visual style. primary=green, accent=steel blue (live-site CTA), secondary=ink outline, ghost=text+arrow. */
  variant?: 'primary' | 'accent' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  /** Render as an anchor instead of a button. */
  href?: string;
  /** Append a trailing → glyph (brand CTA convention). */
  arrow?: boolean;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  type?: 'button' | 'submit' | 'reset';
  style?: React.CSSProperties;
}

export function Button(props: ButtonProps): JSX.Element;
