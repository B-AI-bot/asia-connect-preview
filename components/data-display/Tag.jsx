import React from 'react';

/**
 * Asia-Connect — Tag
 * Pill used for sectors and capability chips. Interactive variant supports
 * a selected state for filters.
 */
export function Tag({ children, selected = false, interactive = false, className = '', style = {}, ...rest }) {
  const base = {
    display: 'inline-flex', alignItems: 'center', gap: '0.5em',
    fontFamily: 'var(--font-text)', fontWeight: 500, fontSize: 'var(--text-sm)',
    lineHeight: 1, padding: '7px 14px', borderRadius: 'var(--radius-pill)',
    border: '1.5px solid var(--border)', color: 'var(--text-body)', background: 'transparent',
    cursor: interactive ? 'pointer' : 'default',
    transition: 'border-color var(--dur-fast) var(--ease-standard), color var(--dur-fast) var(--ease-standard), background var(--dur-fast) var(--ease-standard)',
  };
  const selStyle = selected
    ? { borderColor: 'var(--accent)', color: 'var(--text-strong)', background: 'var(--accent-tint)' }
    : {};

  return (
    <span
      className={className}
      style={{ ...base, ...selStyle, ...style }}
      onMouseEnter={(e) => { if (interactive && !selected) e.currentTarget.style.borderColor = 'var(--border-strong)'; }}
      onMouseLeave={(e) => { if (interactive && !selected) e.currentTarget.style.borderColor = 'var(--border)'; }}
      {...rest}
    >
      {children}
    </span>
  );
}
