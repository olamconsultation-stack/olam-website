import React from 'react';

/**
 * OLAM text input. Warm white field, hairline border, 8px radius,
 * blue focus ring. Optional label + uppercase tracked label style.
 */
export function Input({
  label,
  id,
  type = 'text',
  placeholder,
  value,
  onChange,
  required = false,
  disabled = false,
  style = {},
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);

  const fieldStyle = {
    width: '100%',
    boxSizing: 'border-box',
    fontFamily: 'var(--font-body)',
    fontSize: '0.9375rem',
    color: 'var(--text-body)',
    background: 'var(--surface-card)',
    border: `1px solid ${focused ? 'var(--focus-ring)' : 'var(--border-soft)'}`,
    borderRadius: 'var(--radius-sm)',
    padding: '13px 16px',
    outline: 'none',
    boxShadow: focused ? '0 0 0 3px rgba(75,168,200,0.15)' : 'none',
    transition: 'border-color var(--dur-fast) ease, box-shadow var(--dur-fast) ease',
    ...style,
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
      {label && (
        <label htmlFor={id} style={labelStyle}>
          {label}{required && <span style={{ color: 'var(--action-accent)' }}> *</span>}
        </label>
      )}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={fieldStyle}
        {...rest}
      />
    </div>
  );
}

export const labelStyle = {
  fontFamily: 'var(--font-body)',
  fontSize: '0.6875rem',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.12em',
  color: 'var(--text-subtle)',
};
