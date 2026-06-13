import React from 'react';

/**
 * Asia-Connect — Card
 * The workhorse surface: hairline border, optional index coordinate, serif
 * title and quiet body. Interactive cards lift and draw a brass top-rule on
 * hover. Pass theme="ink" for dark sections.
 */
export function Card({
  title,
  kicker = null,
  index = null,
  children,
  footer = null,
  interactive = false,
  theme = 'default',
  href = null,
  className = '',
  style = {},
  ...rest
}) {
  const Tag = href ? 'a' : 'div';
  const isInk = theme === 'ink';

  const base = {
    position: 'relative',
    display: 'flex', flexDirection: 'column', gap: 14,
    padding: '26px 26px 24px',
    background: isInk ? 'var(--ink-700)' : 'var(--surface)',
    border: `1px solid ${isInk ? 'var(--ink-600)' : 'var(--border)'}`,
    borderRadius: 'var(--radius-md)',
    textDecoration: 'none',
    transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)',
    cursor: interactive || href ? 'pointer' : 'default',
    overflow: 'hidden',
  };

  const onEnter = (e) => {
    if (!(interactive || href)) return;
    const el = e.currentTarget;
    el.style.transform = 'translateY(var(--hover-lift))';
    el.style.boxShadow = 'var(--shadow-md)';
    el.style.borderColor = isInk ? 'var(--ink-500)' : 'var(--border-strong)';
    const r = el.querySelector('[data-toprule]'); if (r) r.style.transform = 'scaleX(1)';
  };
  const onLeave = (e) => {
    const el = e.currentTarget;
    el.style.transform = 'translateY(0)';
    el.style.boxShadow = 'none';
    el.style.borderColor = isInk ? 'var(--ink-600)' : 'var(--border)';
    const r = el.querySelector('[data-toprule]'); if (r) r.style.transform = 'scaleX(0)';
  };

  return (
    <Tag
      href={href || undefined}
      className={className}
      data-theme={isInk ? 'ink' : undefined}
      style={{ ...base, ...style }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      {...rest}
    >
      {(interactive || href) && (
        <span data-toprule aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'var(--accent)', transform: 'scaleX(0)', transformOrigin: 'left', transition: 'transform var(--dur-base) var(--ease-out)' }} />
      )}
      {index != null && (
        <span style={{ position: 'absolute', top: 22, right: 24, fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', color: isInk ? 'var(--stone-400)' : 'var(--text-faint)' }}>{index}</span>
      )}
      {kicker && (
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-label)', letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', color: 'var(--accent-strong)' }}>{kicker}</span>
      )}
      {title && (
        <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'var(--text-h3)', lineHeight: 'var(--leading-heading)', letterSpacing: 'var(--tracking-heading)', color: isInk ? 'var(--paper)' : 'var(--text-strong)', margin: 0 }}>{title}</h3>
      )}
      {children && (
        <div style={{ fontFamily: 'var(--font-text)', fontSize: 'var(--text-base)', lineHeight: 'var(--leading-body)', color: isInk ? 'var(--bone-200)' : 'var(--text-body)' }}>{children}</div>
      )}
      {footer && <div style={{ marginTop: 'auto', paddingTop: 8 }}>{footer}</div>}
    </Tag>
  );
}
