import React from 'react';

/**
 * Asia-Connect — Badge
 * Small status/label marker. Tones map to the semantic palette; the default
 * "neutral" reads as a quiet meta tag.
 */
export function Badge({ children, tone = 'neutral', solid = false, dot = false, className = '', style = {}, ...rest }) {
  const tones = {
    neutral: { fg: 'var(--text-muted)', bg: 'var(--bone-100)', bd: 'var(--border)' },
    brass:   { fg: 'var(--brass-700)', bg: 'var(--brass-100)', bd: 'var(--brass-300)' },
    success: { fg: 'var(--jade-600)', bg: 'var(--jade-100)', bd: 'color-mix(in oklab, var(--jade-500) 30%, transparent)' },
    warning: { fg: 'var(--amber-500)', bg: 'var(--amber-100)', bd: 'color-mix(in oklab, var(--amber-500) 32%, transparent)' },
    danger:  { fg: 'var(--cinnabar-600)', bg: 'var(--cinnabar-100)', bd: 'color-mix(in oklab, var(--cinnabar-500) 30%, transparent)' },
  };
  const t = tones[tone] || tones.neutral;
  const solidStyle = { background: t.fg, color: 'var(--white)', border: '1px solid transparent' };

  return (
    <span
      className={className}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: '0.5em',
        fontFamily: 'var(--font-mono)', fontWeight: 500,
        fontSize: 'var(--text-micro)', letterSpacing: '0.1em', textTransform: 'uppercase',
        lineHeight: 1, padding: '5px 9px', borderRadius: 'var(--radius-xs)',
        ...(solid ? solidStyle : { color: t.fg, background: t.bg, border: `1px solid ${t.bd}` }),
        ...style,
      }}
      {...rest}
    >
      {dot && <span style={{ width: 6, height: 6, borderRadius: '50%', background: solid ? 'currentColor' : t.fg }} />}
      {children}
    </span>
  );
}
