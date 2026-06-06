import React from 'react';

/**
 * Circular icon button using Material Symbols. Used for the
 * filled-blue chevron pills in feature rows and compact controls.
 */
export function IconButton({
  icon,
  variant = 'accent',
  size = 40,
  label,
  href,
  onClick,
  style = {},
  ...rest
}) {
  const variants = {
    accent: { background: 'var(--action-accent)', color: '#fff' },
    primary: { background: 'var(--action-primary)', color: '#fff' },
    ink: { background: 'var(--ink-900)', color: '#fff' },
    outline: { background: 'transparent', color: 'var(--text-strong)', border: '1px solid var(--border-soft)' },
  };

  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: size,
    height: size,
    borderRadius: 'var(--radius-pill)',
    border: '1px solid transparent',
    cursor: 'pointer',
    flexShrink: 0,
    transition: 'all var(--dur-base) var(--ease-cushion)',
    ...variants[variant],
    ...style,
  };

  const Tag = href ? 'a' : 'button';
  const tagProps = href ? { href } : { type: 'button' };

  return (
    <Tag
      {...tagProps}
      aria-label={label}
      onClick={onClick}
      style={base}
      {...rest}
    >
      <span className="material-symbols-outlined" style={{ fontSize: size * 0.55, lineHeight: 1 }}>
        {icon}
      </span>
    </Tag>
  );
}
