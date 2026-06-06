import * as React from 'react';

/**
 * Sticky site header: logo, EN/ES toggle, phone CTA.
 *
 * @startingPoint section="Navigation" subtitle="Sticky header with language toggle + price block" viewport="700x200"
 */
export interface SiteHeaderProps {
  /** Logo image URL (relative to the consuming page). */
  logoSrc?: string;
  phone?: string;
  lang?: 'en' | 'es';
  onLangChange?: (lang: 'en' | 'es') => void;
  style?: React.CSSProperties;
}

export function SiteHeader(props: SiteHeaderProps): JSX.Element;
