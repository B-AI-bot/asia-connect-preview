import React from 'react';

/**
 * Asia-Connect — Select
 * Native select styled to match Input, with a custom mono chevron.
 */
export function Select({ label, hint, error, id, children, style = {}, className = '', ...rest }) {
  const inputId = id || (label ? `sel-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const [focused, setFocused] = React.useState(false);
  const borderColor = error ? 'var(--danger)' : focused ? 'var(--accent)' : 'var(--border-strong)';
  return (
    <div className={className} style={{ display: 'flex', flexDirection: 'column', gap: 7, ...style }}>
      {label && <label htmlFor={inputId} style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-label)', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{label}</label>}
      <div style={{ position: 'relative' }}>
        <select
          id={inputId}
          onFocus={(e) => { setFocused(true); rest.onFocus && rest.onFocus(e); }}
          onBlur={(e) => { setFocused(false); rest.onBlur && rest.onBlur(e); }}
          style={{
            appearance: 'none', width: '100%', height: 48, padding: '0 38px 0 14px',
            fontFamily: 'var(--font-text)', fontSize: 'var(--text-base)', color: 'var(--text-strong)',
            background: 'var(--surface)', border: `1.5px solid ${borderColor}`, borderRadius: 'var(--radius-sm)', outline: 'none', cursor: 'pointer',
            transition: 'border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)',
            boxShadow: focused && !error ? '0 0 0 3px var(--accent-tint)' : 'none',
          }}
          {...rest}
        >
          {children}
        </select>
        <span aria-hidden="true" style={{ position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', fontSize: 13 }}>▾</span>
      </div>
      {(hint || error) && <span style={{ fontFamily: 'var(--font-text)', fontSize: 'var(--text-sm)', color: error ? 'var(--danger)' : 'var(--text-faint)' }}>{error || hint}</span>}
    </div>
  );
}
