import React from 'react';

/**
 * Asia-Connect — Avatar
 * Partner portrait. Falls back to a serif monogram on bone. Optional brass
 * ring evokes the meridian seal for "principal" emphasis.
 */
export function Avatar({ name = '', src = null, size = 56, ring = false, className = '', style = {}, ...rest }) {
  const initials = name.split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0]).join('').toUpperCase();
  return (
    <span
      className={className}
      style={{
        width: size, height: size, flex: 'none',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        borderRadius: '50%', overflow: 'hidden', position: 'relative',
        background: 'var(--bone-100)', color: 'var(--ink-700)',
        boxShadow: ring ? '0 0 0 1.5px var(--accent), 0 0 0 4px var(--bg), 0 0 0 5px var(--border)' : 'var(--ring-inset)',
        ...style,
      }}
      {...rest}
    >
      {src
        ? <img src={src} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        : <span style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: size * 0.38, letterSpacing: '0.01em' }}>{initials || '·'}</span>}
    </span>
  );
}
