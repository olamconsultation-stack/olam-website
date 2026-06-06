import React from 'react';
import { labelStyle } from './Input.jsx';

/**
 * OLAM select dropdown. Custom chevron, matches Input field styling.
 * Pass options as [{value, label}] or string[].
 */
export function Select({
  label,
  id,
  options = [],
  value,
  onChange,
  placeholder,
  required = false,
  disabled = false,
  style = {},
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const opts = options.map((o) => (typeof o === 'string' ? { value: o, label: o } : o));

  const fieldStyle = {
    width: '100%',
    boxSizing: 'border-box',
    fontFamily: 'var(--font-body)',
    fontSize: '0.9375rem',
    color: value ? 'var(--text-body)' : 'var(--text-subtle)',
    background: 'var(--surface-card)',
    border: `1px solid ${focused ? 'var(--focus-ring)' : 'var(--border-soft)'}`,
    borderRadius: 'var(--radius-sm)',
    padding: '13px 40px 13px 16px',
    outline: 'none',
    appearance: 'none',
    WebkitAppearance: 'none',
    cursor: 'pointer',
    boxShadow: focused ? '0 0 0 3px rgba(75,168,200,0.15)' : 'none',
    transition: 'border-color var(--dur-fast) ease, box-shadow var(--dur-fast) ease',
    backgroundImage: 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'16\' height=\'16\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%236B6B6B\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'><polyline points=\'6 9 12 15 18 9\'/></svg>")',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 14px center',
    ...style,
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
      {label && (
        <label htmlFor={id} style={labelStyle}>
          {label}{required && <span style={{ color: 'var(--action-accent)' }}> *</span>}
        </label>
      )}
      <select
        id={id}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={fieldStyle}
        {...rest}
      >
        {placeholder && <option value="" disabled>{placeholder}</option>}
        {opts.map((o) => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
    </div>
  );
}
