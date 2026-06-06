import * as React from 'react';

/** Testimonial / review card: stars, display-type quote, attribution. */
export interface TestimonialCardProps {
  quote: string;
  name: string;
  detail?: string;
  /** 1–5 filled stars (default 5). */
  rating?: number;
  style?: React.CSSProperties;
}

export function TestimonialCard(props: TestimonialCardProps): JSX.Element;
