import React from 'react';

/**
 * Asia-Connect — Stat
 * A headline metric in the display serif with a mono label. Used for proof
 * points (years in region, mandates delivered, days to deploy).
 */
export function Stat({ value, label, sub = null, align = 'left', size = 'md', className = '', style = {}, ...rest }) {
  const sizes = { sm: 'clamp(1.8rem,1.4rem+1.4vw,2.4rem)', md: 'clamp(2.4rem,1.8rem+2.2vw,3.4rem)', lg: 'clamp(3rem,2.2rem+3vw,4.6rem)' };
  return (
    <div className={className} style={{ display: 'flex', flexDirection: 'column', gap: 6, textAlign: align, alignItems: align === 'center' ? 'center' : 'flex-start', ...style }} {...rest}>
      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: sizes[size] || sizes.md, lineHeight: 0.95, letterSpacing: '-0.02em', color: 'var(--text-strong)', fontOpticalSizing: 'auto' }}>{value}</span>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-label)', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{label}</span>
      {sub && <span style={{ fontFamily: 'var(--font-text)', fontSize: 'var(--text-sm)', color: 'var(--text-faint)' }}>{sub}</span>}
    </div>
  );
}
