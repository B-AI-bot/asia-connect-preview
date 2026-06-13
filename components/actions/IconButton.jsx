import React from 'react';

/**
 * Asia-Connect — IconButton
 * A square, quiet control for single glyph actions (close, menu, arrows).
 * Pass an SVG/text glyph as children.
 */
export function IconButton({
  children,
  label,
  variant = 'outline',
  size = 'md',
  disabled = false,
  className = '',
  style = {},
  ...rest
}) {
  const dim = { sm: 34, md: 44, lg: 52 }[size] || 44;

  const variants = {
    solid: { background: 'var(--text-strong)', color: 'var(--bg)', border: '1.5px solid var(--text-strong)' },
    outline: { background: 'transparent', color: 'var(--text-strong)', border: '1.5px solid var(--border-strong)' },
    ghost: { background: 'transparent', color: 'var(--text-body)', border: '1.5px solid transparent' },
  };
  const v = variants[variant] || variants.outline;

  return (
    <button
      aria-label={label}
      title={label}
      disabled={disabled}
      className={className}
      style={{
        width: dim, height: dim,
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        borderRadius: 'var(--radius-sm)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.45 : 1,
        transition: 'background var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard)',
        ...v, ...style,
      }}
      onMouseEnter={(e) => { if (!disabled && variant === 'outline') e.currentTarget.style.borderColor = 'var(--accent)'; if (!disabled && variant === 'ghost') e.currentTarget.style.background = 'color-mix(in oklab, var(--text-strong) 7%, transparent)'; }}
      onMouseLeave={(e) => { Object.assign(e.currentTarget.style, { borderColor: v.border.split(' ').pop(), background: v.background }); }}
      {...rest}
    >
      {children}
    </button>
  );
}
