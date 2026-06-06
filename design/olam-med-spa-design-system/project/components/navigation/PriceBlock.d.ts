import * as React from 'react';

/** Price-transparency block: big Sora range + caption + financing note. */
export interface PriceBlockProps {
  range?: string;
  caption?: string;
  note?: React.ReactNode;
  style?: React.CSSProperties;
}

export function PriceBlock(props: PriceBlockProps): JSX.Element;
