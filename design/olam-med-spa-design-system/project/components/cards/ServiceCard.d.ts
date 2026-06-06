import * as React from 'react';

/**
 * Numbered service / problem card with cushion hover.
 *
 * @startingPoint section="Cards" subtitle="Service, testimonial & result cards" viewport="700x300"
 */
export interface ServiceCardProps {
  /** Index label, e.g. "01". */
  index?: string;
  title: React.ReactNode;
  children?: React.ReactNode;
  /** Accent color for index + hover title. */
  accent?: 'blue' | 'green';
  style?: React.CSSProperties;
}

export function ServiceCard(props: ServiceCardProps): JSX.Element;
