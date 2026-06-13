import React from 'react';

/**
 * Asia-Connect — Kicker
 * The brand's signature overline: a mono, letterspaced label, optionally
 * prefixed with a coordinate tick or index number. Sits above headings.
 */
export function Kicker({ children, index = null, tick = false, accent = false, className = '', style = {}, ...rest }) {
  return (
    <span
      className={className}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: '0.7em',
        fontFamily: 'var(--font-mono)', fontWeight: 500,
        fontSize: 'var(--text-label)', letterSpacing: 'var(--tracking-label)',
        textTransform: 'uppercase',
        color: accent ? 'var(--accent-strong)' : 'var(--text-muted)',
        ...style,
      }}
      {...rest}
    >
      {index != null && <span style={{ color: 'var(--accent-strong)' }}>{index}</span>}
      {tick && <span aria-hidden="true" style={{ width: 18, height: 1, background: 'var(--accent)', display: 'inline-block' }} />}
      {children}
    </span>
  );
}
