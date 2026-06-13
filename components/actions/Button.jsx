import React from 'react';

/**
 * Asia-Connect — Button
 * Primary action uses the brass accent; secondary is solid ink; outline and
 * ghost recede. An optional trailing arrow nudges on hover (the "forward
 * motion" of an operator who moves fast).
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  arrow = false,
  iconLeft = null,
  fullWidth = false,
  disabled = false,
  as = 'button',
  className = '',
  style = {},
  ...rest
}) {
  const Tag = as;

  const sizes = {
    sm: { padding: '0 14px', height: 36, font: 'var(--text-sm)' },
    md: { padding: '0 20px', height: 46, font: 'var(--text-base)' },
    lg: { padding: '0 28px', height: 56, font: 'var(--text-lg)' },
  };
  const s = sizes[size] || sizes.md;

  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.6em',
    height: s.height,
    padding: s.padding,
    width: fullWidth ? '100%' : 'auto',
    fontFamily: 'var(--font-text)',
    fontSize: s.font,
    fontWeight: 600,
    letterSpacing: '-0.005em',
    lineHeight: 1,
    borderRadius: 'var(--radius-sm)',
    border: '1.5px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    transition: 'background var(--dur-fast) var(--ease-standard), color var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard), transform var(--dur-fast) var(--ease-standard)',
    WebkitTapHighlightColor: 'transparent',
  };

  const variants = {
    primary: { background: 'var(--accent)', color: 'var(--on-accent)', borderColor: 'var(--accent)' },
    secondary: { background: 'var(--text-strong)', color: 'var(--bg)', borderColor: 'var(--text-strong)' },
    outline: { background: 'transparent', color: 'var(--text-strong)', borderColor: 'var(--border-strong)' },
    ghost: { background: 'transparent', color: 'var(--text-strong)', borderColor: 'transparent' },
  };

  const v = variants[variant] || variants.primary;

  const onEnter = (e) => {
    if (disabled) return;
    const el = e.currentTarget;
    if (variant === 'primary') el.style.background = 'var(--accent-hover)';
    else if (variant === 'secondary') el.style.background = 'var(--ink-600)';
    else if (variant === 'outline') { el.style.borderColor = 'var(--accent)'; el.style.color = 'var(--accent-strong)'; }
    else if (variant === 'ghost') el.style.background = 'color-mix(in oklab, var(--text-strong) 7%, transparent)';
    const arr = el.querySelector('[data-arrow]');
    if (arr) arr.style.transform = 'translateX(3px)';
  };
  const onLeave = (e) => {
    const el = e.currentTarget;
    Object.assign(el.style, { background: v.background, color: v.color, borderColor: v.borderColor });
    const arr = el.querySelector('[data-arrow]');
    if (arr) arr.style.transform = 'translateX(0)';
  };
  const onDown = (e) => { if (!disabled) e.currentTarget.style.transform = 'scale(var(--press-scale))'; };
  const onUp = (e) => { e.currentTarget.style.transform = 'scale(1)'; };

  return (
    <Tag
      className={className}
      disabled={as === 'button' ? disabled : undefined}
      style={{ ...base, ...v, ...style }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onMouseDown={onDown}
      onMouseUp={onUp}
      {...rest}
    >
      {iconLeft && <span style={{ display: 'inline-flex' }}>{iconLeft}</span>}
      <span>{children}</span>
      {arrow && (
        <span data-arrow aria-hidden="true" style={{ display: 'inline-flex', transition: 'transform var(--dur-fast) var(--ease-out)' }}>→</span>
      )}
    </Tag>
  );
}
