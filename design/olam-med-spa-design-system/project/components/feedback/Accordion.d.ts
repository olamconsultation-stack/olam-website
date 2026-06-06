import * as React from 'react';

interface AccordionItem { q: React.ReactNode; a: React.ReactNode; }

/**
 * FAQ accordion with rotating "+" and smooth height reveal.
 *
 * @startingPoint section="Feedback" subtitle="Badge, Tag & FAQ accordion" viewport="700x360"
 */
export interface AccordionProps {
  items: AccordionItem[];
  /** Only one panel open at a time (default true). */
  single?: boolean;
  style?: React.CSSProperties;
}

export function Accordion(props: AccordionProps): JSX.Element;
