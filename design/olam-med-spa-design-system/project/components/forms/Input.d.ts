import * as React from 'react';

/**
 * Single-line text input with optional tracked-uppercase label and blue focus ring.
 *
 * @startingPoint section="Forms" subtitle="Input, textarea & select fields" viewport="700x320"
 */
export interface InputProps {
  label?: string;
  id?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  disabled?: boolean;
  style?: React.CSSProperties;
}

export function Input(props: InputProps): JSX.Element;
export const labelStyle: React.CSSProperties;
