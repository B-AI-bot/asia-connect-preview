import React from 'react';

/**
 * Asia-Connect — Textarea
 * Multi-line field sharing Input's styling. Used for the "your project" note
 * on the contact form.
 */
export function Textarea({ label, hint, error, id, rows = 4, style = {}, className = '', ...rest }) {
  const inputId = id || (label ? `ta-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const [focused, setFocused] = React.useState(false);
  const borderColor = error ? 'var(--danger)' : focused ? 'var(--accent)' : 'var(--border-strong)';
  return (
    <div className={className} style={{ display: 'flex', flexDirection: 'column', gap: 7, ...style }}>
      {label && <label htmlFor={inputId} style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-label)', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{label}</label>}
      <textarea
        id={inputId} rows={rows}
        onFocus={(e) => { setFocused(true); rest.onFocus && rest.onFocus(e); }}
        onBlur={(e) => { setFocused(false); rest.onBlur && rest.onBlur(e); }}
        style={{
          appearance: 'none', width: '100%', padding: '12px 14px', resize: 'vertical',
          fontFamily: 'var(--font-text)', fontSize: 'var(--text-base)', lineHeight: 'var(--leading-body)', color: 'var(--text-strong)',
          background: 'var(--surface)', border: `1.5px solid ${borderColor}`, borderRadius: 'var(--radius-sm)', outline: 'none',
          transition: 'border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)',
          boxShadow: focused && !error ? '0 0 0 3px var(--accent-tint)' : 'none',
        }}
        {...rest}
      />
      {(hint || error) && <span style={{ fontFamily: 'var(--font-text)', fontSize: 'var(--text-sm)', color: error ? 'var(--danger)' : 'var(--text-faint)' }}>{error || hint}</span>}
    </div>
  );
}
