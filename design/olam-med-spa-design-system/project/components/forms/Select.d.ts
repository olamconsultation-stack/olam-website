import * as React from 'react';

interface SelectOption { value: string; label: string; }

/** Styled select with custom chevron. Options as string[] or {value,label}[]. */
export interface SelectProps {
  label?: string;
  id?: string;
  options?: Array<string | SelectOption>;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  style?: React.CSSProperties;
}

export function Select(props: SelectProps): JSX.Element;
