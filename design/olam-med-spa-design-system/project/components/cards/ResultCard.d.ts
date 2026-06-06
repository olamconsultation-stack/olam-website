import * as React from 'react';

/** Before/after result card: tagged photo (zoom-on-hover) + title/caption. */
export interface ResultCardProps {
  /** Image URL. Omit for a neutral placeholder. */
  image?: string;
  /** Uppercase chip, e.g. "MID-FACE LIFT". */
  tag?: string;
  title: string;
  caption?: string;
  /** CSS aspect-ratio (default "3 / 4"). */
  ratio?: string;
  style?: React.CSSProperties;
}

export function ResultCard(props: ResultCardProps): JSX.Element;
