/* @ds-bundle: {"format":3,"namespace":"AsiaConnectDesignSystem_f91cce","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"Avatar","sourcePath":"components/data-display/Avatar.jsx"},{"name":"Badge","sourcePath":"components/data-display/Badge.jsx"},{"name":"Kicker","sourcePath":"components/data-display/Kicker.jsx"},{"name":"Stat","sourcePath":"components/data-display/Stat.jsx"},{"name":"Tag","sourcePath":"components/data-display/Tag.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"b1da8bb71f4f","components/actions/IconButton.jsx":"e4ee84b01b18","components/data-display/Avatar.jsx":"83eea14ad403","components/data-display/Badge.jsx":"e3d57c59c4b9","components/data-display/Kicker.jsx":"149d5b0baafc","components/data-display/Stat.jsx":"1f39e7793a72","components/data-display/Tag.jsx":"7ca71ac27a9e","components/forms/Input.jsx":"130c362a0f8b","components/forms/Select.jsx":"0f63225dd645","components/forms/Textarea.jsx":"4d752ffbecfd","components/surfaces/Card.jsx":"a68c3d47fad6","ui_kits/website/ContactScreen.jsx":"dd3ff116cd98","ui_kits/website/HomeScreen.jsx":"5fbae33222ef","ui_kits/website/InsightScreen.jsx":"187858435ca7","ui_kits/website/NewsletterScreen.jsx":"e4837b65ac38","ui_kits/website/PartnersScreen.jsx":"037d9e99ef90","ui_kits/website/RoutingConcierge.jsx":"a1f80d478668","ui_kits/website/ServicesScreen.jsx":"566cdaf6ce8b","ui_kits/website/SiteChrome.jsx":"268e813b0a7e","ui_kits/website/data.js":"7ce20ab40212"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AsiaConnectDesignSystem_f91cce = window.AsiaConnectDesignSystem_f91cce || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Asia-Connect — Button
 * Primary action uses the brass accent; secondary is solid ink; outline and
 * ghost recede. An optional trailing arrow nudges on hover (the "forward
 * motion" of an operator who moves fast).
 */
function Button({
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
    sm: {
      padding: '0 14px',
      height: 36,
      font: 'var(--text-sm)'
    },
    md: {
      padding: '0 20px',
      height: 46,
      font: 'var(--text-base)'
    },
    lg: {
      padding: '0 28px',
      height: 56,
      font: 'var(--text-lg)'
    }
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
    WebkitTapHighlightColor: 'transparent'
  };
  const variants = {
    primary: {
      background: 'var(--accent)',
      color: 'var(--on-accent)',
      borderColor: 'var(--accent)'
    },
    secondary: {
      background: 'var(--text-strong)',
      color: 'var(--bg)',
      borderColor: 'var(--text-strong)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--text-strong)',
      borderColor: 'var(--border-strong)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-strong)',
      borderColor: 'transparent'
    }
  };
  const v = variants[variant] || variants.primary;
  const onEnter = e => {
    if (disabled) return;
    const el = e.currentTarget;
    if (variant === 'primary') el.style.background = 'var(--accent-hover)';else if (variant === 'secondary') el.style.background = 'var(--ink-600)';else if (variant === 'outline') {
      el.style.borderColor = 'var(--accent)';
      el.style.color = 'var(--accent-strong)';
    } else if (variant === 'ghost') el.style.background = 'color-mix(in oklab, var(--text-strong) 7%, transparent)';
    const arr = el.querySelector('[data-arrow]');
    if (arr) arr.style.transform = 'translateX(3px)';
  };
  const onLeave = e => {
    const el = e.currentTarget;
    Object.assign(el.style, {
      background: v.background,
      color: v.color,
      borderColor: v.borderColor
    });
    const arr = el.querySelector('[data-arrow]');
    if (arr) arr.style.transform = 'translateX(0)';
  };
  const onDown = e => {
    if (!disabled) e.currentTarget.style.transform = 'scale(var(--press-scale))';
  };
  const onUp = e => {
    e.currentTarget.style.transform = 'scale(1)';
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: className,
    disabled: as === 'button' ? disabled : undefined,
    style: {
      ...base,
      ...v,
      ...style
    },
    onMouseEnter: onEnter,
    onMouseLeave: onLeave,
    onMouseDown: onDown,
    onMouseUp: onUp
  }, rest), iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex'
    }
  }, iconLeft), /*#__PURE__*/React.createElement("span", null, children), arrow && /*#__PURE__*/React.createElement("span", {
    "data-arrow": true,
    "aria-hidden": "true",
    style: {
      display: 'inline-flex',
      transition: 'transform var(--dur-fast) var(--ease-out)'
    }
  }, "\u2192"));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Asia-Connect — IconButton
 * A square, quiet control for single glyph actions (close, menu, arrows).
 * Pass an SVG/text glyph as children.
 */
function IconButton({
  children,
  label,
  variant = 'outline',
  size = 'md',
  disabled = false,
  className = '',
  style = {},
  ...rest
}) {
  const dim = {
    sm: 34,
    md: 44,
    lg: 52
  }[size] || 44;
  const variants = {
    solid: {
      background: 'var(--text-strong)',
      color: 'var(--bg)',
      border: '1.5px solid var(--text-strong)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--text-strong)',
      border: '1.5px solid var(--border-strong)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-body)',
      border: '1.5px solid transparent'
    }
  };
  const v = variants[variant] || variants.outline;
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    title: label,
    disabled: disabled,
    className: className,
    style: {
      width: dim,
      height: dim,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-sm)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'background var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard)',
      ...v,
      ...style
    },
    onMouseEnter: e => {
      if (!disabled && variant === 'outline') e.currentTarget.style.borderColor = 'var(--accent)';
      if (!disabled && variant === 'ghost') e.currentTarget.style.background = 'color-mix(in oklab, var(--text-strong) 7%, transparent)';
    },
    onMouseLeave: e => {
      Object.assign(e.currentTarget.style, {
        borderColor: v.border.split(' ').pop(),
        background: v.background
      });
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Asia-Connect — Avatar
 * Partner portrait. Falls back to a serif monogram on bone. Optional brass
 * ring evokes the meridian seal for "principal" emphasis.
 */
function Avatar({
  name = '',
  src = null,
  size = 56,
  ring = false,
  className = '',
  style = {},
  ...rest
}) {
  const initials = name.split(/\s+/).filter(Boolean).slice(0, 2).map(w => w[0]).join('').toUpperCase();
  return /*#__PURE__*/React.createElement("span", _extends({
    className: className,
    style: {
      width: size,
      height: size,
      flex: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '50%',
      overflow: 'hidden',
      position: 'relative',
      background: 'var(--bone-100)',
      color: 'var(--ink-700)',
      boxShadow: ring ? '0 0 0 1.5px var(--accent), 0 0 0 4px var(--bg), 0 0 0 5px var(--border)' : 'var(--ring-inset)',
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: size * 0.38,
      letterSpacing: '0.01em'
    }
  }, initials || '·'));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Asia-Connect — Badge
 * Small status/label marker. Tones map to the semantic palette; the default
 * "neutral" reads as a quiet meta tag.
 */
function Badge({
  children,
  tone = 'neutral',
  solid = false,
  dot = false,
  className = '',
  style = {},
  ...rest
}) {
  const tones = {
    neutral: {
      fg: 'var(--text-muted)',
      bg: 'var(--bone-100)',
      bd: 'var(--border)'
    },
    brass: {
      fg: 'var(--brass-700)',
      bg: 'var(--brass-100)',
      bd: 'var(--brass-300)'
    },
    success: {
      fg: 'var(--jade-600)',
      bg: 'var(--jade-100)',
      bd: 'color-mix(in oklab, var(--jade-500) 30%, transparent)'
    },
    warning: {
      fg: 'var(--amber-500)',
      bg: 'var(--amber-100)',
      bd: 'color-mix(in oklab, var(--amber-500) 32%, transparent)'
    },
    danger: {
      fg: 'var(--cinnabar-600)',
      bg: 'var(--cinnabar-100)',
      bd: 'color-mix(in oklab, var(--cinnabar-500) 30%, transparent)'
    }
  };
  const t = tones[tone] || tones.neutral;
  const solidStyle = {
    background: t.fg,
    color: 'var(--white)',
    border: '1px solid transparent'
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    className: className,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5em',
      fontFamily: 'var(--font-mono)',
      fontWeight: 500,
      fontSize: 'var(--text-micro)',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      lineHeight: 1,
      padding: '5px 9px',
      borderRadius: 'var(--radius-xs)',
      ...(solid ? solidStyle : {
        color: t.fg,
        background: t.bg,
        border: `1px solid ${t.bd}`
      }),
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: solid ? 'currentColor' : t.fg
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Kicker.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Asia-Connect — Kicker
 * The brand's signature overline: a mono, letterspaced label, optionally
 * prefixed with a coordinate tick or index number. Sits above headings.
 */
function Kicker({
  children,
  index = null,
  tick = false,
  accent = false,
  className = '',
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: className,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.7em',
      fontFamily: 'var(--font-mono)',
      fontWeight: 500,
      fontSize: 'var(--text-label)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: accent ? 'var(--accent-strong)' : 'var(--text-muted)',
      ...style
    }
  }, rest), index != null && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent-strong)'
    }
  }, index), tick && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 18,
      height: 1,
      background: 'var(--accent)',
      display: 'inline-block'
    }
  }), children);
}
Object.assign(__ds_scope, { Kicker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Kicker.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Asia-Connect — Stat
 * A headline metric in the display serif with a mono label. Used for proof
 * points (years in region, mandates delivered, days to deploy).
 */
function Stat({
  value,
  label,
  sub = null,
  align = 'left',
  size = 'md',
  className = '',
  style = {},
  ...rest
}) {
  const sizes = {
    sm: 'clamp(1.8rem,1.4rem+1.4vw,2.4rem)',
    md: 'clamp(2.4rem,1.8rem+2.2vw,3.4rem)',
    lg: 'clamp(3rem,2.2rem+3vw,4.6rem)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    className: className,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      textAlign: align,
      alignItems: align === 'center' ? 'center' : 'flex-start',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: sizes[size] || sizes.md,
      lineHeight: 0.95,
      letterSpacing: '-0.02em',
      color: 'var(--text-strong)',
      fontOpticalSizing: 'auto'
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-label)',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label), sub && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-text)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-faint)'
    }
  }, sub));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Stat.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Asia-Connect — Tag
 * Pill used for sectors and capability chips. Interactive variant supports
 * a selected state for filters.
 */
function Tag({
  children,
  selected = false,
  interactive = false,
  className = '',
  style = {},
  ...rest
}) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5em',
    fontFamily: 'var(--font-text)',
    fontWeight: 500,
    fontSize: 'var(--text-sm)',
    lineHeight: 1,
    padding: '7px 14px',
    borderRadius: 'var(--radius-pill)',
    border: '1.5px solid var(--border)',
    color: 'var(--text-body)',
    background: 'transparent',
    cursor: interactive ? 'pointer' : 'default',
    transition: 'border-color var(--dur-fast) var(--ease-standard), color var(--dur-fast) var(--ease-standard), background var(--dur-fast) var(--ease-standard)'
  };
  const selStyle = selected ? {
    borderColor: 'var(--accent)',
    color: 'var(--text-strong)',
    background: 'var(--accent-tint)'
  } : {};
  return /*#__PURE__*/React.createElement("span", _extends({
    className: className,
    style: {
      ...base,
      ...selStyle,
      ...style
    },
    onMouseEnter: e => {
      if (interactive && !selected) e.currentTarget.style.borderColor = 'var(--border-strong)';
    },
    onMouseLeave: e => {
      if (interactive && !selected) e.currentTarget.style.borderColor = 'var(--border)';
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Asia-Connect — Input
 * Text field with optional label, hint and error. Underline-forward styling
 * keeps forms quiet and editorial; focus brings in the brass accent.
 */
function Input({
  label,
  hint,
  error,
  id,
  style = {},
  className = '',
  ...rest
}) {
  const inputId = id || (label ? `in-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const [focused, setFocused] = React.useState(false);
  const borderColor = error ? 'var(--danger)' : focused ? 'var(--accent)' : 'var(--border-strong)';
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 7,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-label)',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    onFocus: e => {
      setFocused(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocused(false);
      rest.onBlur && rest.onBlur(e);
    },
    style: {
      appearance: 'none',
      width: '100%',
      height: 48,
      padding: '0 14px',
      fontFamily: 'var(--font-text)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-strong)',
      background: 'var(--surface)',
      border: `1.5px solid ${borderColor}`,
      borderRadius: 'var(--radius-sm)',
      outline: 'none',
      transition: 'border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)',
      boxShadow: focused && !error ? '0 0 0 3px var(--accent-tint)' : 'none'
    }
  }, rest)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-text)',
      fontSize: 'var(--text-sm)',
      color: error ? 'var(--danger)' : 'var(--text-faint)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Asia-Connect — Select
 * Native select styled to match Input, with a custom mono chevron.
 */
function Select({
  label,
  hint,
  error,
  id,
  children,
  style = {},
  className = '',
  ...rest
}) {
  const inputId = id || (label ? `sel-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const [focused, setFocused] = React.useState(false);
  const borderColor = error ? 'var(--danger)' : focused ? 'var(--accent)' : 'var(--border-strong)';
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 7,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-label)',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: inputId,
    onFocus: e => {
      setFocused(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocused(false);
      rest.onBlur && rest.onBlur(e);
    },
    style: {
      appearance: 'none',
      width: '100%',
      height: 48,
      padding: '0 38px 0 14px',
      fontFamily: 'var(--font-text)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-strong)',
      background: 'var(--surface)',
      border: `1.5px solid ${borderColor}`,
      borderRadius: 'var(--radius-sm)',
      outline: 'none',
      cursor: 'pointer',
      transition: 'border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)',
      boxShadow: focused && !error ? '0 0 0 3px var(--accent-tint)' : 'none'
    }
  }, rest), children), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: 14,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      fontFamily: 'var(--font-mono)',
      color: 'var(--text-muted)',
      fontSize: 13
    }
  }, "\u25BE")), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-text)',
      fontSize: 'var(--text-sm)',
      color: error ? 'var(--danger)' : 'var(--text-faint)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Asia-Connect — Textarea
 * Multi-line field sharing Input's styling. Used for the "your project" note
 * on the contact form.
 */
function Textarea({
  label,
  hint,
  error,
  id,
  rows = 4,
  style = {},
  className = '',
  ...rest
}) {
  const inputId = id || (label ? `ta-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const [focused, setFocused] = React.useState(false);
  const borderColor = error ? 'var(--danger)' : focused ? 'var(--accent)' : 'var(--border-strong)';
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 7,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-label)',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    id: inputId,
    rows: rows,
    onFocus: e => {
      setFocused(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocused(false);
      rest.onBlur && rest.onBlur(e);
    },
    style: {
      appearance: 'none',
      width: '100%',
      padding: '12px 14px',
      resize: 'vertical',
      fontFamily: 'var(--font-text)',
      fontSize: 'var(--text-base)',
      lineHeight: 'var(--leading-body)',
      color: 'var(--text-strong)',
      background: 'var(--surface)',
      border: `1.5px solid ${borderColor}`,
      borderRadius: 'var(--radius-sm)',
      outline: 'none',
      transition: 'border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)',
      boxShadow: focused && !error ? '0 0 0 3px var(--accent-tint)' : 'none'
    }
  }, rest)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-text)',
      fontSize: 'var(--text-sm)',
      color: error ? 'var(--danger)' : 'var(--text-faint)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Asia-Connect — Card
 * The workhorse surface: hairline border, optional index coordinate, serif
 * title and quiet body. Interactive cards lift and draw a brass top-rule on
 * hover. Pass theme="ink" for dark sections.
 */
function Card({
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
    display: 'flex',
    flexDirection: 'column',
    gap: 14,
    padding: '26px 26px 24px',
    background: isInk ? 'var(--ink-700)' : 'var(--surface)',
    border: `1px solid ${isInk ? 'var(--ink-600)' : 'var(--border)'}`,
    borderRadius: 'var(--radius-md)',
    textDecoration: 'none',
    transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)',
    cursor: interactive || href ? 'pointer' : 'default',
    overflow: 'hidden'
  };
  const onEnter = e => {
    if (!(interactive || href)) return;
    const el = e.currentTarget;
    el.style.transform = 'translateY(var(--hover-lift))';
    el.style.boxShadow = 'var(--shadow-md)';
    el.style.borderColor = isInk ? 'var(--ink-500)' : 'var(--border-strong)';
    const r = el.querySelector('[data-toprule]');
    if (r) r.style.transform = 'scaleX(1)';
  };
  const onLeave = e => {
    const el = e.currentTarget;
    el.style.transform = 'translateY(0)';
    el.style.boxShadow = 'none';
    el.style.borderColor = isInk ? 'var(--ink-600)' : 'var(--border)';
    const r = el.querySelector('[data-toprule]');
    if (r) r.style.transform = 'scaleX(0)';
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href || undefined,
    className: className,
    "data-theme": isInk ? 'ink' : undefined,
    style: {
      ...base,
      ...style
    },
    onMouseEnter: onEnter,
    onMouseLeave: onLeave
  }, rest), (interactive || href) && /*#__PURE__*/React.createElement("span", {
    "data-toprule": true,
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 2,
      background: 'var(--accent)',
      transform: 'scaleX(0)',
      transformOrigin: 'left',
      transition: 'transform var(--dur-base) var(--ease-out)'
    }
  }), index != null && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 22,
      right: 24,
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-sm)',
      color: isInk ? 'var(--stone-400)' : 'var(--text-faint)'
    }
  }, index), kicker && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-label)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--accent-strong)'
    }
  }, kicker), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'var(--text-h3)',
      lineHeight: 'var(--leading-heading)',
      letterSpacing: 'var(--tracking-heading)',
      color: isInk ? 'var(--paper)' : 'var(--text-strong)',
      margin: 0
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-text)',
      fontSize: 'var(--text-base)',
      lineHeight: 'var(--leading-body)',
      color: isInk ? 'var(--bone-200)' : 'var(--text-body)'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 8
    }
  }, footer));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ContactScreen.jsx
try { (() => {
/* Asia-Connect website — Contact (token-driven) */
const {
  Button,
  Kicker,
  Input,
  Textarea,
  Select,
  Badge
} = window.AsiaConnectDesignSystem_f91cce;
function ContactScreen({
  go,
  prefill,
  bandTheme
}) {
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    className: "ac-band",
    "data-theme": bandTheme,
    style: {
      minHeight: '78vh'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ac-grid-bg",
    style: {
      WebkitMaskImage: 'radial-gradient(100% 110% at 80% 20%, #000 35%, transparent 80%)',
      maskImage: 'radial-gradient(100% 110% at 80% 20%, #000 35%, transparent 80%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "ac-meridian",
    style: {
      left: '64%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "ac-node",
    style: {
      left: 'calc(64% - 6px)',
      top: '30%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      position: 'relative',
      paddingBlock: 'clamp(3rem,2rem+4vw,6rem)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'clamp(2rem,1rem+5vw,6rem)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Kicker, {
    tick: true,
    accent: true,
    style: {
      marginBottom: 24
    }
  }, "Send a brief"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'var(--text-display-3)',
      lineHeight: 1.06,
      letterSpacing: '-0.022em',
      color: 'var(--text-strong)',
      margin: 0,
      maxWidth: '16ch'
    }
  }, "Tell us what you\u2019re facing."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 22,
      fontSize: 'var(--text-lead)',
      color: 'var(--text-body)',
      lineHeight: 'var(--leading-relaxed)',
      maxWidth: '42ch'
    }
  }, "A principal will respond within two working days. Everything you share is held in confidence."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "coord",
    style: {
      color: 'var(--text-faint)'
    }
  }, "Companies"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-text)',
      fontSize: 'var(--text-lg)',
      color: 'var(--accent-strong)',
      marginTop: 4
    }
  }, "help@asia-connect.partners")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "coord",
    style: {
      color: 'var(--text-faint)'
    }
  }, "Candidates"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-text)',
      fontSize: 'var(--text-lg)',
      color: 'var(--accent-strong)',
      marginTop: 4
    }
  }, "leaders@asia-connect.partners")), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "coord",
    style: {
      color: 'var(--text-faint)'
    }
  }, "Asia-Connect Executive Partners Pte. Ltd. \xB7 Singapore \xB7 1\xB017\u2032N 103\xB050\u2032E")))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-lg)',
      padding: 'clamp(1.5rem,1rem+2vw,2.5rem)',
      boxShadow: 'var(--shadow-lg)'
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '40px 8px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "success",
    dot: true
  }, "Received"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'var(--text-h2)',
      color: 'var(--text-strong)',
      margin: '18px 0 10px'
    }
  }, "Thank you \u2014 we\u2019ll be in touch."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      maxWidth: '36ch',
      margin: '0 auto 24px'
    }
  }, "A partner will read your note personally and respond within two working days."), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => setSent(false)
  }, "Send another")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'grid',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "First name",
    placeholder: "Jane",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Last name",
    placeholder: "Doe",
    required: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Work email",
    type: "email",
    placeholder: "you@company.com",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Company",
    placeholder: "Company Ltd"
  })), /*#__PURE__*/React.createElement(Select, {
    label: "What do you need?",
    defaultValue: prefill && prefill.service ? prefill.service : 'Interim executive'
  }, /*#__PURE__*/React.createElement("option", null, "Interim executive"), /*#__PURE__*/React.createElement("option", null, "Project leadership"), /*#__PURE__*/React.createElement("option", null, "Crisis & recovery"), /*#__PURE__*/React.createElement("option", null, "I\u2019m a candidate")), /*#__PURE__*/React.createElement(Textarea, {
    label: "Your situation",
    rows: 4,
    placeholder: "A sentence or two on what you\u2019re facing and where.",
    defaultValue: prefill && prefill.note ? prefill.note : ''
  }), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    variant: "primary",
    size: "lg",
    arrow: true,
    fullWidth: true
  }, "Send to a partner"))))));
}
Object.assign(window, {
  ContactScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ContactScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
/* Asia-Connect website — Home (token-driven; reskins under both themes) */
const {
  Button,
  Kicker,
  Card,
  Tag,
  Stat,
  Avatar
} = window.AsiaConnectDesignSystem_f91cce;
const SERVICES = [{
  n: '01',
  k: 'Interim Leadership',
  t: 'Executive on demand',
  d: 'When a CEO, CFO or COO leaves unexpectedly, we deploy a seasoned principal in days — to hold the line, reassure the board, and keep strategy moving.'
}, {
  n: '02',
  k: 'Project Delivery',
  t: 'Complex projects, led',
  d: 'Market entry, M&A, carve-outs and transformation — run from inside your teams by operators who have done it before, in-region.'
}, {
  n: '03',
  k: 'Crisis & Recovery',
  t: 'Stability, restored',
  d: 'In financial, operational or reputational distress, we take over, stabilise the situation, and lead the recovery through to a clean hand-over.'
}];
function HomeScreen({
  go,
  openAgent,
  bandTheme
}) {
  const D = window.AC_DATA;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    className: "ac-band",
    "data-theme": bandTheme
  }, /*#__PURE__*/React.createElement("div", {
    className: "ac-grid-bg",
    style: {
      WebkitMaskImage: 'radial-gradient(120% 110% at 78% 30%, #000 35%, transparent 78%)',
      maskImage: 'radial-gradient(120% 110% at 78% 30%, #000 35%, transparent 78%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "ac-meridian",
    style: {
      left: '72%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "ac-node",
    style: {
      left: 'calc(72% - 6px)',
      top: '46%'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "coord",
    style: {
      position: 'absolute',
      top: '46%',
      left: 'calc(72% + 16px)',
      color: 'var(--accent)'
    }
  }, "SGP \xB7 1\xB017\u2032N"), /*#__PURE__*/React.createElement("span", {
    className: "coord",
    style: {
      position: 'absolute',
      top: 40,
      right: 'var(--gutter)',
      color: 'var(--text-faint)'
    }
  }, "103\xB050\u2032E"), /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      position: 'relative',
      paddingTop: 'clamp(4rem,3rem+6vw,8rem)',
      paddingBottom: 'clamp(3rem,2rem+5vw,6rem)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '17ch'
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    tick: true,
    accent: true,
    style: {
      marginBottom: 26
    }
  }, "Executive Interim \xB7 Singapore"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'var(--text-display-1)',
      lineHeight: 1.02,
      letterSpacing: '-0.025em',
      color: 'var(--text-strong)',
      fontOpticalSizing: 'auto',
      margin: 0
    }
  }, "The bridge between your ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: 'italic',
      color: 'var(--accent)'
    }
  }, "HQ"), " and Asia.")), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: '52ch',
      marginTop: 28,
      fontSize: 'var(--text-lead)',
      lineHeight: 'var(--leading-relaxed)',
      color: 'var(--text-body)'
    }
  }, "A partner-led firm of senior operators who step in as interim executives, project leaders and crisis managers across Asia \u2014 and are accountable for the result. Not advice from a distance. Principals, on the ground."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 38,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    arrow: true,
    onClick: openAgent
  }, "Ask the concierge"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    onClick: () => go('services')
  }, "How we work")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'clamp(2rem,1rem+4vw,5rem)',
      marginTop: 'clamp(3rem,2rem+4vw,5.5rem)',
      paddingTop: 34,
      borderTop: '1px solid var(--border)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: D.facts.deploy,
    label: "To deploy a principal"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: D.facts.partners,
    label: "Senior partners",
    sub: "across 13 markets"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "20+",
    label: "Years led in region"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "C-suite",
    label: "Mandate seniority"
  })))), /*#__PURE__*/React.createElement("section", {
    className: "section container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ac-eyebrow"
  }, /*#__PURE__*/React.createElement(Kicker, {
    index: "\u2116 01"
  }, "What we do"), /*#__PURE__*/React.createElement("div", {
    className: "ac-rule-grow"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.1fr 1fr',
      gap: 'clamp(1.5rem,1rem+3vw,4rem)',
      alignItems: 'end',
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'var(--text-display-3)',
      lineHeight: 1.06,
      letterSpacing: '-0.02em',
      color: 'var(--text-strong)',
      margin: 0
    }
  }, "Three ways we step in \u2014 each one accountable for an outcome, not a deck."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-lg)',
      color: 'var(--text-muted)',
      lineHeight: 'var(--leading-body)'
    }
  }, "Every engagement is run by a partner who has held the seat before, with a clear assessment, implementation and hand-over framework.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 18
    }
  }, SERVICES.map(s => /*#__PURE__*/React.createElement(Card, {
    key: s.n,
    interactive: true,
    index: s.n,
    kicker: s.k,
    title: s.t,
    footer: /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      arrow: true,
      style: {
        padding: 0,
        height: 'auto'
      },
      onClick: () => go('services')
    }, "Learn more")
  }, s.d)))), /*#__PURE__*/React.createElement("section", {
    className: "ac-band",
    "data-theme": bandTheme,
    style: {
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container section",
    style: {
      position: 'relative',
      display: 'grid',
      gridTemplateColumns: '1.1fr 0.9fr',
      gap: 'clamp(2rem,1rem+4vw,5rem)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Kicker, {
    tick: true,
    accent: true,
    style: {
      marginBottom: 22
    }
  }, "New \xB7 Routing concierge"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'var(--text-display-3)',
      lineHeight: 1.06,
      letterSpacing: '-0.02em',
      color: 'var(--text-strong)',
      margin: 0,
      maxWidth: '18ch'
    }
  }, "Tell us the situation. We\u2019ll route you to the right partner."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 20,
      fontSize: 'var(--text-lg)',
      color: 'var(--text-body)',
      lineHeight: 'var(--leading-relaxed)',
      maxWidth: '46ch'
    }
  }, "Describe what you\u2019re facing in a sentence. The concierge reads the situation, points to the right service, and names the principal who has done it before \u2014 or books the call."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 30
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    arrow: true,
    onClick: openAgent
  }, "Describe your situation"))), /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-lg)',
      background: 'var(--surface)',
      padding: 22,
      boxShadow: 'var(--shadow-md)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "coord",
    style: {
      color: 'var(--text-faint)',
      marginBottom: 14
    }
  }, "\u25F7 Concierge \xB7 sample"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      alignSelf: 'flex-end',
      maxWidth: '85%',
      background: 'var(--accent)',
      color: 'var(--on-accent)',
      padding: '10px 14px',
      borderRadius: '12px 12px 3px 12px',
      fontSize: 'var(--text-sm)'
    }
  }, "\u201CEV local-content deadline in Indonesia, 2026. Behind on suppliers.\u201D"), /*#__PURE__*/React.createElement("div", {
    style: {
      alignSelf: 'flex-start',
      maxWidth: '90%',
      background: 'var(--surface-sunken)',
      color: 'var(--text-body)',
      padding: '10px 14px',
      borderRadius: '12px 12px 12px 3px',
      fontSize: 'var(--text-sm)'
    }
  }, "That\u2019s an execution clock. I\u2019d put ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--text-strong)'
    }
  }, "Franck Euvrard"), " on it \u2014 Faurecia, VinFast, Tata. Shall I introduce you?"))))), /*#__PURE__*/React.createElement("section", {
    className: "section container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ac-eyebrow"
  }, /*#__PURE__*/React.createElement(Kicker, {
    index: "\u2116 02"
  }, "Where we operate"), /*#__PURE__*/React.createElement("div", {
    className: "ac-rule-grow"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '0.8fr 1.2fr',
      gap: 'clamp(1.5rem,1rem+3vw,4rem)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'var(--text-h1)',
      lineHeight: 1.1,
      letterSpacing: '-0.02em',
      color: 'var(--text-strong)',
      margin: 0
    }
  }, "Senior experience across the sectors that drive Asia."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 10
    }
  }, D.sectors.map(s => /*#__PURE__*/React.createElement(Tag, {
    key: s,
    interactive: true
  }, s))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-sunken)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container section"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'auto 1fr',
      gap: 'clamp(1.5rem,1rem+3vw,3.5rem)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Patrick Laredo",
    size: 92,
    ring: true
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Kicker, {
    style: {
      marginBottom: 20
    }
  }, "From the Chairman"), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'var(--text-h2)',
      lineHeight: 1.32,
      letterSpacing: '-0.01em',
      color: 'var(--text-strong)',
      margin: 0,
      maxWidth: '40ch',
      textWrap: 'balance'
    }
  }, "\u201CAsia is now central to global strategy. We run growth and transformation projects, provide true leaders, and secure results \u2014 across Asia. Time is of the essence.\u201D"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-text)',
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, "Patrick Laredo"), /*#__PURE__*/React.createElement("span", {
    className: "coord",
    style: {
      color: 'var(--text-faint)'
    }
  }, "\u2014 Chairman & Founder")))))), /*#__PURE__*/React.createElement("section", {
    className: "ac-band",
    "data-theme": bandTheme,
    style: {
      borderTop: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ac-grid-bg",
    style: {
      WebkitMaskImage: 'radial-gradient(120% 120% at 50% 30%, #000 30%, transparent 72%)',
      maskImage: 'radial-gradient(120% 120% at 50% 30%, #000 30%, transparent 72%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      position: 'relative',
      paddingBlock: 'clamp(3.5rem,2rem+5vw,6rem)',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    tick: true,
    accent: true,
    style: {
      marginBottom: 24
    }
  }, "Let\u2019s find out how we can help"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'var(--text-display-2)',
      lineHeight: 1.05,
      letterSpacing: '-0.025em',
      color: 'var(--text-strong)',
      margin: 0,
      maxWidth: '18ch',
      textWrap: 'balance'
    }
  }, "Tell us what you\u2019re facing."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 22,
      maxWidth: '48ch',
      fontSize: 'var(--text-lg)',
      color: 'var(--text-body)',
      lineHeight: 'var(--leading-relaxed)'
    }
  }, "Whether it\u2019s a sudden gap at the top, a project that must land, or a situation to recover \u2014 a principal will respond within two working days."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 34,
      display: 'flex',
      gap: 14,
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    arrow: true,
    onClick: openAgent
  }, "Ask the concierge"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    onClick: () => go('contact')
  }, "Send a brief")))));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/InsightScreen.jsx
try { (() => {
/* Asia-Connect website — Insight (reference-grade article; token-driven) */
const {
  Button,
  Kicker,
  Badge,
  Stat
} = window.AsiaConnectDesignSystem_f91cce;
const TOC = ['Definition', 'When to engage', 'Interim vs. consulting', 'How it works in Asia', 'Key facts'];
function InsightScreen({
  go,
  openAgent,
  bandTheme
}) {
  const H = ({
    id,
    n,
    children
  }) => /*#__PURE__*/React.createElement("h2", {
    id: id,
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'var(--text-h2)',
      lineHeight: 1.12,
      letterSpacing: '-0.02em',
      color: 'var(--text-strong)',
      margin: '48px 0 14px',
      display: 'flex',
      gap: 14,
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "coord",
    style: {
      color: 'var(--accent-strong)'
    }
  }, n), children);
  const P = ({
    children
  }) => /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-lg)',
      color: 'var(--text-body)',
      lineHeight: 'var(--leading-relaxed)',
      margin: '0 0 16px',
      maxWidth: '68ch'
    }
  }, children);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    className: "container",
    style: {
      paddingTop: 'clamp(2.5rem,2rem+3vw,4.5rem)',
      paddingBottom: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-narrow)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "brass"
  }, "Reference"), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, "Interim Management"), /*#__PURE__*/React.createElement("span", {
    className: "coord",
    style: {
      color: 'var(--text-faint)',
      alignSelf: 'center'
    }
  }, "Updated June 2026 \xB7 6 min")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'var(--text-display-3)',
      lineHeight: 1.08,
      letterSpacing: '-0.022em',
      color: 'var(--text-strong)',
      margin: 0
    }
  }, "Interim management in Asia: what it is, when to use it, and how it differs from consulting."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 20,
      fontSize: 'var(--text-lead)',
      fontStyle: 'italic',
      fontFamily: 'var(--font-display)',
      color: 'var(--text-muted)',
      lineHeight: 1.5,
      maxWidth: '60ch'
    }
  }, "A plain-language reference for boards, owners and HQ leaders weighing interim leadership across the region."))), /*#__PURE__*/React.createElement("section", {
    className: "container",
    style: {
      paddingBlock: 'clamp(2rem,1.5rem+2vw,3.5rem)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-narrow)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '200px 1fr',
      gap: 'clamp(1.5rem,1rem+3vw,4rem)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("nav", {
    style: {
      position: 'sticky',
      top: 100,
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "coord",
    style: {
      color: 'var(--text-faint)',
      marginBottom: 10
    }
  }, "On this page"), TOC.map((t, i) => /*#__PURE__*/React.createElement("a", {
    key: t,
    style: {
      fontFamily: 'var(--font-text)',
      fontSize: 'var(--text-sm)',
      color: i === 0 ? 'var(--text-strong)' : 'var(--text-muted)',
      padding: '6px 0 6px 14px',
      borderLeft: i === 0 ? '2px solid var(--accent)' : '2px solid var(--border)',
      cursor: 'pointer'
    }
  }, t)), /*#__PURE__*/React.createElement("div", {
    "data-theme": bandTheme,
    className: "ac-band",
    style: {
      marginTop: 22,
      padding: 16,
      borderRadius: 'var(--radius-md)',
      border: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-body)',
      lineHeight: 1.5,
      margin: '0 0 12px'
    }
  }, "Facing one of these situations now?"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    arrow: true,
    onClick: openAgent
  }, "Ask the concierge"))), /*#__PURE__*/React.createElement("article", null, /*#__PURE__*/React.createElement("div", {
    style: {
      borderLeft: '2px solid var(--accent)',
      paddingLeft: 22,
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "coord",
    style: {
      color: 'var(--accent-strong)'
    }
  }, "Definition"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-h3)',
      lineHeight: 1.4,
      color: 'var(--text-strong)',
      margin: '8px 0 0',
      maxWidth: '58ch'
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      fontWeight: 600
    }
  }, "Interim management"), " is the temporary appointment of a seasoned executive to a senior role \u2014 to lead through transition, crisis or strategic change, and be accountable for the result.")), /*#__PURE__*/React.createElement(H, {
    id: "definition",
    n: "01"
  }, "A working definition"), /*#__PURE__*/React.createElement(P, null, "Unlike a temporary placement that holds the fort, an interim executive operates at or near board level with the authority to make and own difficult decisions. They are independent \u2014 able to act in the company\u2019s interest without the politics of an incumbent \u2014 and they are measured on outcomes, not advice."), /*#__PURE__*/React.createElement(H, {
    id: "when",
    n: "02"
  }, "When to engage one"), /*#__PURE__*/React.createElement(P, null, "Boards typically reach for interim leadership in five moments: a sudden departure at the top; coverage during a recruitment or restructuring; a carve-out, acquisition or post-merger integration; a transformation that must land on time; or a crisis that needs a steady, experienced hand."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12,
      margin: '20px 0 8px'
    }
  }, ['Sudden C-suite departure', 'Cover during recruitment', 'M&A & carve-outs', 'Transformation delivery', 'Turnaround & recovery', 'Board-mandated change'].map(s => /*#__PURE__*/React.createElement("div", {
    key: s,
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center',
      padding: '12px 0',
      borderTop: '1px solid var(--border-faint)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-strong)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      height: 1,
      background: 'var(--accent)'
    }
  }), s))), /*#__PURE__*/React.createElement(H, {
    id: "vs",
    n: "03"
  }, "Interim vs. consulting"), /*#__PURE__*/React.createElement(P, null, "A consultant advises and hands you a recommendation; an interim executive takes the seat and is accountable for delivering it. In Asia, where a global HQ and a local team can read the same situation very differently, that distinction matters \u2014 the interim is inside the organisation, bridging both."), /*#__PURE__*/React.createElement(H, {
    id: "asia",
    n: "04"
  }, "How it works in Asia"), /*#__PURE__*/React.createElement(P, null, "Cross-border mandates demand cultural and market fluency that cannot be improvised. The most effective interim leaders in the region have lived and led there \u2014 they understand local realities and global expectations, and move between them. That is the bridge Asia-Connect is built to be."), /*#__PURE__*/React.createElement("div", {
    id: "facts",
    style: {
      marginTop: 36,
      padding: '26px 28px',
      background: 'var(--surface-sunken)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-md)'
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    style: {
      marginBottom: 18
    }
  }, "Key facts"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    size: "sm",
    value: "3\u201312 mo",
    label: "Typical mandate"
  }), /*#__PURE__*/React.createElement(Stat, {
    size: "sm",
    value: "< 10 days",
    label: "To deploy"
  }), /*#__PURE__*/React.createElement(Stat, {
    size: "sm",
    value: "Board-level",
    label: "Seniority"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      paddingTop: 26,
      borderTop: '1px solid var(--border)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 16,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-h3)',
      color: 'var(--text-strong)',
      margin: 0,
      maxWidth: '24ch'
    }
  }, "Weighing interim leadership for a situation in Asia?"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    arrow: true,
    onClick: openAgent
  }, "Ask the concierge"))))));
}
Object.assign(window, {
  InsightScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/InsightScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/NewsletterScreen.jsx
try { (() => {
/* Asia-Connect website — "The Asia Operator" newsletter, Issue No. 01 */
const {
  Button,
  Kicker,
  Badge,
  Avatar
} = window.AsiaConnectDesignSystem_f91cce;

/* Editorial illustration placeholder — carries a ready-to-paste image-gen
   prompt and a copy button. Swap each <NLFigure> for real art in production. */
function NLFigure({
  idx,
  kind = 'Illustration',
  ratio = '16 / 9',
  title,
  caption,
  prompt
}) {
  const [done, setDone] = React.useState(false);
  const STYLE = 'Editorial line illustration, warm ink charcoal with a single brass-gold accent on a cream/bone paper ground, fine hairline linework, restrained documentary feel, subtle paper grain, no text, no logos, generous negative space. ';
  const full = STYLE + prompt;
  const copy = () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(full).catch(() => {});
      }
    } catch (e) {/* clipboard unavailable — non-fatal */}
    setDone(true);
    setTimeout(() => setDone(false), 1600);
  };
  return /*#__PURE__*/React.createElement("figure", {
    className: "ac-fig"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ac-fig-frame",
    style: {
      aspectRatio: ratio
    }
  }, /*#__PURE__*/React.createElement("img", {
    className: "ac-fig-seal",
    src: "../../assets/mark.svg",
    alt: ""
  }), /*#__PURE__*/React.createElement("figcaption", {
    className: "ac-fig-kind"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), kind, " \xB7 ", ratio.replace(' ', '')), title && /*#__PURE__*/React.createElement("div", {
    className: "ac-fig-title"
  }, "\u201C", title, "\u201D"), /*#__PURE__*/React.createElement("div", {
    className: "ac-fig-prompt"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pl"
  }, "Prompt"), /*#__PURE__*/React.createElement("span", {
    className: "pt"
  }, full), /*#__PURE__*/React.createElement("button", {
    className: 'ac-fig-copy' + (done ? ' done' : ''),
    onClick: copy
  }, done ? '✓ Copied' : 'Copy'))), caption && /*#__PURE__*/React.createElement("div", {
    className: "ac-fig-cap"
  }, /*#__PURE__*/React.createElement("span", {
    className: "idx"
  }, "Fig. ", idx), /*#__PURE__*/React.createElement("span", null, caption)));
}
function NewsletterScreen({
  go,
  openAgent,
  bandTheme
}) {
  const Sub = ({
    children
  }) => /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'var(--text-h2)',
      lineHeight: 1.16,
      letterSpacing: '-0.018em',
      color: 'var(--text-strong)',
      margin: '46px 0 14px',
      textWrap: 'balance'
    }
  }, children);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    className: "ac-band",
    "data-theme": bandTheme
  }, /*#__PURE__*/React.createElement("div", {
    className: "ac-grid-bg",
    style: {
      WebkitMaskImage: 'radial-gradient(120% 130% at 80% 10%, #000 35%, transparent 80%)',
      maskImage: 'radial-gradient(120% 130% at 80% 10%, #000 35%, transparent 80%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      position: 'relative',
      paddingBlock: 'clamp(2.5rem,2rem+3vw,4.5rem)',
      maxWidth: 'var(--container-narrow)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '1px solid var(--border)',
      paddingBottom: 20,
      flexWrap: 'wrap',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "coord",
    style: {
      color: 'var(--text-faint)'
    }
  }, "Asia-Connect Executive Partners"), /*#__PURE__*/React.createElement("span", {
    className: "coord",
    style: {
      color: 'var(--accent-strong)'
    }
  }, "Issue No. 01")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'clamp(2.6rem,1.6rem+4vw,4.6rem)',
      lineHeight: 0.98,
      letterSpacing: '-0.03em',
      color: 'var(--text-strong)',
      margin: '26px 0 0'
    }
  }, "The Asia Operator"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 18,
      maxWidth: '54ch',
      fontSize: 'var(--text-lead)',
      color: 'var(--text-body)',
      lineHeight: 1.5
    }
  }, "The operator\u2019s view of doing business in Asia. Where the compliance newsletters tell you the rules, this one tells you what actually happens on the ground \u2014 and what to do about it."))), /*#__PURE__*/React.createElement("section", {
    className: "container",
    style: {
      paddingBlock: 'clamp(2.5rem,2rem+3vw,4.5rem)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ac-nl-body",
    style: {
      maxWidth: '68ch',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginBottom: 22,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "brass"
  }, "Mobility & EV"), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, "Southeast Asia"), /*#__PURE__*/React.createElement("span", {
    className: "coord",
    style: {
      color: 'var(--text-faint)',
      alignSelf: 'center'
    }
  }, "June 2026 \xB7 5 min read")), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'var(--text-display-3)',
      lineHeight: 1.08,
      letterSpacing: '-0.022em',
      color: 'var(--text-strong)',
      margin: 0
    }
  }, "The EV clock just started in Southeast Asia"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 16,
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: 'var(--text-lead)',
      color: 'var(--text-muted)',
      lineHeight: 1.5
    }
  }, "Local-content deadlines are landing across the region. The strategy was the easy part."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      margin: '28px 0 0',
      paddingBlock: 18,
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Franck Euvrard",
    size: 52,
    ring: true
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-text)',
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, "Franck Euvrard"), /*#__PURE__*/React.createElement("div", {
    className: "coord",
    style: {
      color: 'var(--text-faint)'
    }
  }, "Partner \u2014 Mobility & EV \xB7 Asia-Connect"))), /*#__PURE__*/React.createElement(NLFigure, {
    idx: "1",
    kind: "Hero illustration",
    ratio: "16 / 9",
    title: "The EV clock just started in Southeast Asia",
    caption: "Opening image \u2014 sets the \u2018deadline with a date attached\u2019 tone.",
    prompt: "A modern EV assembly line inside a Southeast-Asian factory at dusk, a large wall clock and a regional map faintly visible in the background, a few workers mid-task; sense of a countdown beginning. Wide cinematic framing."
  }), /*#__PURE__*/React.createElement("div", {
    className: "ac-fieldnotes"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ac-fieldnotes-h"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: 'var(--accent)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-label)',
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--text-strong)'
    }
  }, "Field notes \xB7 the 30-second version")), [['01', 'Incentives across SE Asia are now tied to local production — and the rules bite in 2026.'], ['02', 'The hard part isn’t the engineering. It’s the pace — decisions made and acted on locally, fast.'], ['03', 'A local-content threshold is a deadline, not a target. Win it with someone on the ground, not another deck.']].map(([k, t]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    className: "ac-fieldnotes-li"
  }, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-base)',
      color: 'var(--text-strong)',
      lineHeight: 1.5
    }
  }, t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "ac-nl-dropcap"
  }, "Several Southeast Asian governments have tied their EV incentives to local production, and the rules start to bite in 2026. If you build or sell vehicles in the region, market entry now comes with a date attached. I spent years running automotive and EV operations across Asia before I moved back to Europe, so I know what a deadline like that does to a plan."), /*#__PURE__*/React.createElement(Sub, null, "The real problem was never the engineering"), /*#__PURE__*/React.createElement("p", null, "I ran those operations on site, not over a video call from a head office. I led vehicle systems integration for ICONIQ Motors in Shanghai, then product development for VinFast\u2019s full EV lineup in Hanoi, as Deputy CEO. Decisions I expected to argue over for a month in Europe were closed in a week, and the local team had moved on before head office had even booked the call."), /*#__PURE__*/React.createElement("p", null, "What European companies underestimate about EV in Asia is rarely the technology. It is the pace: how fast a decision has to be made and acted on. When I ran a global vehicle program out of Tokyo, from 2015 to 2017, with parts coming out of Mexico, Poland and China at once, the hard part was never the engineering. It was that the people closest to the work often could not move without a call to a head office eight time zones away."), /*#__PURE__*/React.createElement("blockquote", {
    className: "ac-pullquote"
  }, "That distance is the real tax on an Asian operation \u2014 and you don\u2019t pay it down with a better strategy. You pay it down by letting the people on the spot decide, and decide fast."), /*#__PURE__*/React.createElement(Sub, null, "What changed this quarter"), /*#__PURE__*/React.createElement("p", null, "Indonesia now ties its import-duty and luxury-tax breaks to a local-production commitment, backed by a bank guarantee the carmaker forfeits if it does not deliver. Local content has to reach 40 percent in 2026 and 60 percent by 2029. BYD has started trial production at its Subang plant this year, and Chery opens its largest ASEAN factory in Vietnam in mid-2026. Thailand and Vietnam are pulling assembly onshore with their own subsidies and duty waivers."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 20,
      margin: '28px 0',
      padding: '24px 26px',
      background: 'var(--surface-sunken)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-md)'
    }
  }, [['40%', 'Local content · 2026'], ['60%', 'Local content · 2029'], ['~$6B', 'Regional EV market, 2026']].map(([v, l]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(1.8rem,1.3rem+1.6vw,2.6rem)',
      lineHeight: 0.9,
      color: 'var(--text-strong)'
    }
  }, v), /*#__PURE__*/React.createElement("div", {
    className: "coord",
    style: {
      color: 'var(--text-muted)',
      marginTop: 8
    }
  }, l)))), /*#__PURE__*/React.createElement("p", null, "A local-content threshold is not a target you meet at your own pace. It is a deadline. Hitting those numbers means qualifying suppliers, fixing their quality, and standing up a line \u2014 usually faster than a European head office is used to moving. The companies that win in 2027 will be the ones that hit the number, not the ones with the best market-entry plan from 2025."), /*#__PURE__*/React.createElement(Sub, null, "What this looks like on the ground"), /*#__PURE__*/React.createElement(NLFigure, {
    idx: "2",
    kind: "Section illustration",
    ratio: "3 / 2",
    title: "Month seven: the plan meets the plant",
    caption: "Breaks the longest text block \u2014 the \u2018plan vs. reality\u2019 beat.",
    prompt: "Split-scene composition: on the left, a polished boardroom strategy slide; on the right, the messy reality of a factory floor with a supplier issue being worked out by hand. Visual tension between the clean plan and the real plant."
  }), /*#__PURE__*/React.createElement("p", null, "I have watched this play out more than once. A European group commits to a localization target to protect its incentives. The strategy is sound. The plan is thorough. Then month seven arrives, and the plan runs into a supplier who does not deliver, a regulator nobody put in the slides, and a local team that sends every real decision back to Europe. The deadline holds. The progress is what slips."), /*#__PURE__*/React.createElement("p", null, "What closes that gap is not another adviser, and it is not another deck. It is someone on the spot \u2014 yours or ours \u2014 who has done this before: who can qualify a supplier, read the regulator, and make the call on site this week instead of next quarter. That is the difference between a localization plan and a localized plant."), /*#__PURE__*/React.createElement(Sub, null, "Five questions before you commit"), /*#__PURE__*/React.createElement("p", null, "If you are weighing a local-content commitment in Southeast Asia, ask these before you sign:"), /*#__PURE__*/React.createElement("ol", {
    style: {
      listStyle: 'none',
      counterReset: 'q',
      margin: '8px 0 0',
      padding: 0
    }
  }, ['Who on the ground can make a binding decision without calling Europe first?', 'Have we qualified real suppliers, or only mapped them on a slide?', 'What is the true lead time to the threshold, counted backward from the deadline?', 'When something breaks at 2am local time, who fixes it — and do they already know the system?', 'Who owns the local-content number by name, and what happens if it slips?'].map((q, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'flex',
      gap: 18,
      alignItems: 'baseline',
      padding: '16px 0',
      borderTop: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-h3)',
      color: 'var(--accent)',
      lineHeight: 1,
      flex: 'none'
    }
  }, '0' + (i + 1)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-lg)',
      color: 'var(--text-strong)',
      lineHeight: 1.5
    }
  }, q)))), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 18
    }
  }, "If those answers are not clear, you do not have an execution plan yet. You have a strategy, and a clock running against it."), /*#__PURE__*/React.createElement(Sub, null, "Where I would start"), /*#__PURE__*/React.createElement("p", null, "If you are staring at one of these deadlines, start with the first question: who on the ground can actually say yes. Tell me which market you are working in, and I will tell you what I would watch first."), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '28px 0',
      padding: 'clamp(1.5rem,1rem+2vw,2.2rem)',
      background: 'var(--surface)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-lg)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 20,
      flexWrap: 'wrap',
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Kicker, {
    accent: true,
    style: {
      marginBottom: 8
    }
  }, "Reply to this issue"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-h3)',
      color: 'var(--text-strong)'
    }
  }, "Which market are you working in?")), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    arrow: true,
    onClick: openAgent
  }, "Ask the concierge")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-h3)',
      color: 'var(--text-strong)',
      margin: '32px 0 18px'
    }
  }, "Franck"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 18,
      alignItems: 'flex-start',
      borderTop: '1px solid var(--border)',
      paddingTop: 20
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Franck Euvrard",
    size: 64,
    ring: true
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)',
      lineHeight: 1.65,
      margin: 0
    }
  }, "Franck Euvrard, Asia-Connect Executive Partners. 30+ years building and running automotive and EV operations. Built and ran Faurecia\u2019s automotive R&D center in India as its CEO (Pune, 2006\u20132011), then Managing Director India. Ran a global vehicle program from Tokyo (2015\u20132017) with production across Mexico, Poland and China. Led vehicle systems integration for ICONIQ Motors in Shanghai. Deputy CEO, Product Development for VinFast\u2019s full EV lineup in Hanoi. EVP Global Engineering at Tata Technologies. Most recently ran software-defined-vehicle development as KPIT Managing Director in France. French Foreign-Trade Advisor since 2021."))))), /*#__PURE__*/React.createElement("section", {
    className: "ac-band",
    "data-theme": bandTheme,
    style: {
      borderTop: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      paddingBlock: 'clamp(2.5rem,2rem+3vw,4rem)',
      maxWidth: 'var(--container-narrow)',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    accent: true,
    style: {
      marginBottom: 16
    }
  }, "The Asia Operator"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'var(--text-h1)',
      color: 'var(--text-strong)',
      margin: 0,
      maxWidth: '22ch'
    }
  }, "One operator\u2019s field note, once a month."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 16,
      maxWidth: '46ch',
      color: 'var(--text-body)',
      fontSize: 'var(--text-lg)',
      lineHeight: 1.6
    }
  }, "What actually happens on the ground in Asia, and what to do about it. No fluff, no decks."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    arrow: true
  }, "Subscribe")), /*#__PURE__*/React.createElement("span", {
    className: "coord",
    style: {
      marginTop: 26,
      color: 'var(--text-faint)'
    }
  }, "You receive this because you subscribed or exchanged with Franck \xB7 Unsubscribe \xB7 Update preferences"))));
}
Object.assign(window, {
  NewsletterScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/NewsletterScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/PartnersScreen.jsx
try { (() => {
/* Asia-Connect website — Partners (real roster, token-driven, filterable) */
const {
  Button,
  Kicker,
  Tag,
  Stat,
  Avatar
} = window.AsiaConnectDesignSystem_f91cce;
const FILTERS = [{
  id: 'all',
  label: 'All',
  test: () => true
}, {
  id: 'mobility',
  label: 'Mobility & Industry',
  test: p => /mobilit|industr|machinery|engineer|supply|turnaround/i.test(p.domains.join(' '))
}, {
  id: 'tech',
  label: 'Tech & Innovation',
  test: p => /tech|digital|ai|innovation|media|telecom/i.test(p.domains.join(' '))
}, {
  id: 'finance',
  label: 'Finance & M&A',
  test: p => /finance|m&a|capital|debt|invest/i.test(p.domains.join(' '))
}, {
  id: 'energy',
  label: 'Energy & Health',
  test: p => /energy|chemical|health|biotech|esg|climate|sustain/i.test(p.domains.join(' '))
}, {
  id: 'entry',
  label: 'Market Entry',
  test: p => /entry|cross-border|expansion|greenfield|gcc|globaliz/i.test(p.domains.join(' '))
}];
function PartnersScreen({
  go,
  openAgent,
  bandTheme
}) {
  const D = window.AC_DATA;
  const [filter, setFilter] = React.useState('all');
  const active = FILTERS.find(f => f.id === filter) || FILTERS[0];
  const shown = D.partners.filter(active.test);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    className: "ac-band",
    "data-theme": bandTheme
  }, /*#__PURE__*/React.createElement("div", {
    className: "ac-grid-bg",
    style: {
      WebkitMaskImage: 'radial-gradient(110% 120% at 20% 30%, #000 35%, transparent 78%)',
      maskImage: 'radial-gradient(110% 120% at 20% 30%, #000 35%, transparent 78%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      position: 'relative',
      paddingBlock: 'clamp(3rem,2rem+5vw,6rem)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.3fr 0.7fr',
      gap: 40,
      alignItems: 'end'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Kicker, {
    tick: true,
    accent: true,
    style: {
      marginBottom: 22
    }
  }, "The Partners"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'var(--text-display-2)',
      lineHeight: 1.04,
      letterSpacing: '-0.025em',
      color: 'var(--text-strong)',
      margin: 0,
      maxWidth: '18ch'
    }
  }, "A unified team of senior operators."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 22,
      maxWidth: '50ch',
      fontSize: 'var(--text-lead)',
      color: 'var(--text-body)',
      lineHeight: 'var(--leading-relaxed)'
    }
  }, "Most are based in the region; all have lived and led here. You engage a principal \u2014 not a profile from a pool.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 36,
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: D.facts.partners,
    label: "Partners"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: D.facts.markets,
    label: "Markets"
  }))))), /*#__PURE__*/React.createElement("section", {
    className: "container section"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 10,
      marginBottom: 32
    }
  }, FILTERS.map(f => /*#__PURE__*/React.createElement(Tag, {
    key: f.id,
    interactive: true,
    selected: filter === f.id,
    onClick: () => setFilter(f.id)
  }, f.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 2,
      border: '1px solid var(--border)',
      background: 'var(--border)'
    }
  }, shown.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    style: {
      background: 'var(--surface)',
      padding: '28px 26px',
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      minHeight: 230
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: p.name,
    size: 58,
    ring: p.id === 'laredo'
  }), /*#__PURE__*/React.createElement("span", {
    className: "coord",
    style: {
      color: 'var(--text-faint)'
    }
  }, p.base)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'var(--text-h3)',
      color: 'var(--text-strong)',
      margin: '0 0 3px'
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-text)',
      fontSize: 'var(--text-sm)',
      color: 'var(--accent-strong)',
      fontWeight: 600
    }
  }, p.role)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)',
      lineHeight: 'var(--leading-body)',
      margin: 0
    }
  }, p.note), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 12,
      borderTop: '1px solid var(--border-faint)',
      display: 'flex',
      flexWrap: 'wrap',
      gap: 6
    }
  }, p.domains.slice(0, 2).map(d => /*#__PURE__*/React.createElement("span", {
    key: d,
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-micro)',
      letterSpacing: '0.04em',
      color: 'var(--text-muted)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-xs)',
      padding: '3px 7px'
    }
  }, d)))))), /*#__PURE__*/React.createElement("p", {
    className: "coord",
    style: {
      textAlign: 'center',
      color: 'var(--text-faint)',
      marginTop: 18
    }
  }, "Roster & bios from asia-connect.partners \xB7 portraits to be added.")), /*#__PURE__*/React.createElement("section", {
    className: "ac-band",
    "data-theme": bandTheme,
    style: {
      borderTop: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      paddingBlock: 'clamp(3rem,2rem+4vw,5rem)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 24,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'var(--text-h1)',
      color: 'var(--text-strong)',
      margin: 0,
      maxWidth: '24ch'
    }
  }, "Not sure who you need? Let the concierge match you."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    arrow: true,
    onClick: openAgent
  }, "Ask the concierge"))));
}
Object.assign(window, {
  PartnersScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/PartnersScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/RoutingConcierge.jsx
try { (() => {
/* Asia-Connect website — Routing Concierge
   A floating agent: reads a visitor's situation, routes to the right
   service + names the principal who has done it before. Scripted demo
   over the real routing map in data.js. */
const {
  Button,
  Avatar,
  Badge
} = window.AsiaConnectDesignSystem_f91cce;
const SERVICE_TO_SELECT = {
  'Interim Leadership': 'Interim executive',
  'Project Delivery': 'Project leadership',
  'Crisis & Recovery': 'Crisis & recovery'
};
function matchRoute(text) {
  const t = (text || '').toLowerCase();
  let best = null,
    bestScore = 0;
  for (const r of window.AC_DATA.routes) {
    let score = 0;
    for (const kw of r.match) {
      if (t.includes(kw)) score += 1;
    }
    if (score > bestScore) {
      bestScore = score;
      best = r;
    }
  }
  return bestScore > 0 ? best : null;
}
function RoutingConcierge({
  open,
  onClose,
  navigate,
  bandTheme
}) {
  const D = window.AC_DATA;
  const [msgs, setMsgs] = React.useState([]);
  const [input, setInput] = React.useState('');
  const [busy, setBusy] = React.useState(false);
  const scroller = React.useRef(null);
  const greet = {
    role: 'agent',
    kind: 'text',
    text: 'I’m the Asia-Connect concierge. In a sentence — what are you facing, and in which market? I’ll point you to the right partner.'
  };
  React.useEffect(() => {
    if (open && msgs.length === 0) setMsgs([greet]);
  }, [open]);
  React.useEffect(() => {
    if (scroller.current) scroller.current.scrollTop = scroller.current.scrollHeight;
  }, [msgs, busy]);
  const push = m => setMsgs(prev => [...prev, m]);
  const respond = text => {
    if (!text.trim()) return;
    push({
      role: 'user',
      kind: 'text',
      text
    });
    setInput('');
    setBusy(true);
    setTimeout(() => {
      const route = matchRoute(text);
      setBusy(false);
      if (!route) {
        push({
          role: 'agent',
          kind: 'text',
          text: 'Got it. That could sit with a few of our principals — the fastest path is a two-line brief and a partner will route it personally within two working days.'
        });
        push({
          role: 'agent',
          kind: 'fallback'
        });
        return;
      }
      const partners = route.partners.map(D.byId).filter(Boolean);
      push({
        role: 'agent',
        kind: 'text',
        text: route.line
      });
      push({
        role: 'agent',
        kind: 'result',
        route,
        partners
      });
    }, 650);
  };
  const closeGo = (screen, prefill) => {
    onClose();
    navigate(screen, prefill);
  };
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 200,
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      padding: 'clamp(0px, 2vw, 28px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'absolute',
      inset: 0,
      background: 'color-mix(in oklab, var(--ink-900) 42%, transparent)',
      backdropFilter: 'blur(2px)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-label": "Asia-Connect concierge",
    style: {
      position: 'relative',
      width: 'min(440px, 100%)',
      height: 'min(620px, 92vh)',
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--surface)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-lg)',
      animation: 'acFade var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ac-band",
    "data-theme": bandTheme,
    style: {
      padding: '16px 18px',
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/mark-inverse.svg",
    alt: "",
    style: {
      width: 34,
      height: 34
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'var(--text-lg)',
      color: 'var(--text-strong)',
      lineHeight: 1
    }
  }, "Concierge"), /*#__PURE__*/React.createElement("div", {
    className: "coord",
    style: {
      color: 'var(--accent-strong)',
      marginTop: 4
    }
  }, "\u25F7 Routes you to the right partner")), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close",
    style: {
      width: 32,
      height: 32,
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--border)',
      background: 'transparent',
      color: 'var(--text-body)',
      cursor: 'pointer',
      fontSize: 18,
      lineHeight: 1
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    ref: scroller,
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '18px',
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      background: 'var(--bg)'
    }
  }, msgs.map((m, i) => /*#__PURE__*/React.createElement(Message, {
    key: i,
    m: m,
    closeGo: closeGo
  })), busy && /*#__PURE__*/React.createElement(Typing, null), msgs.length === 1 && !busy && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 7,
      marginTop: 4
    }
  }, D.routes.slice(0, 6).map(r => /*#__PURE__*/React.createElement("button", {
    key: r.id,
    onClick: () => respond(r.label),
    style: chipStyle
  }, r.label)))), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      respond(input);
    },
    style: {
      display: 'flex',
      gap: 8,
      padding: 14,
      borderTop: '1px solid var(--border)',
      background: 'var(--surface)'
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: input,
    onChange: e => setInput(e.target.value),
    placeholder: "Describe your situation\u2026",
    style: {
      flex: 1,
      height: 44,
      padding: '0 14px',
      borderRadius: 'var(--radius-sm)',
      border: '1.5px solid var(--border-strong)',
      background: 'var(--bg)',
      color: 'var(--text-strong)',
      fontFamily: 'var(--font-text)',
      fontSize: 'var(--text-sm)',
      outline: 'none'
    }
  }), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    variant: "primary",
    size: "md",
    "aria-label": "Send"
  }, "\u2192"))));
}
const chipStyle = {
  fontFamily: 'var(--font-text)',
  fontSize: 'var(--text-sm)',
  fontWeight: 500,
  padding: '8px 13px',
  borderRadius: 'var(--radius-pill)',
  border: '1.5px solid var(--border)',
  background: 'var(--surface)',
  color: 'var(--text-body)',
  cursor: 'pointer'
};
function Typing() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      alignSelf: 'flex-start',
      display: 'flex',
      gap: 4,
      padding: '12px 14px',
      background: 'var(--surface-sunken)',
      borderRadius: '12px 12px 12px 3px'
    }
  }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'var(--text-faint)',
      animation: `acBlink 1s ${i * 0.15}s infinite`
    }
  })));
}
function Message({
  m,
  closeGo
}) {
  if (m.role === 'user') {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        alignSelf: 'flex-end',
        maxWidth: '85%',
        background: 'var(--accent)',
        color: 'var(--on-accent)',
        padding: '10px 14px',
        borderRadius: '12px 12px 3px 12px',
        fontSize: 'var(--text-sm)',
        lineHeight: 1.5
      }
    }, m.text);
  }
  if (m.kind === 'text') {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        alignSelf: 'flex-start',
        maxWidth: '90%',
        background: 'var(--surface-sunken)',
        color: 'var(--text-body)',
        padding: '10px 14px',
        borderRadius: '12px 12px 12px 3px',
        fontSize: 'var(--text-sm)',
        lineHeight: 1.55
      }
    }, m.text);
  }
  if (m.kind === 'fallback') {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        alignSelf: 'flex-start',
        width: '92%'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "sm",
      arrow: true,
      onClick: () => closeGo('contact', {})
    }, "Send a two-line brief"));
  }
  if (m.kind === 'result') {
    const {
      route,
      partners
    } = m;
    const prefill = {
      service: SERVICE_TO_SELECT[route.service] || 'Project leadership',
      note: ''
    };
    return /*#__PURE__*/React.createElement("div", {
      style: {
        alignSelf: 'flex-start',
        width: '92%',
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-md)',
        padding: 14,
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "brass"
    }, route.service), /*#__PURE__*/React.createElement("span", {
      className: "coord",
      style: {
        color: 'var(--text-faint)'
      }
    }, "Recommended")), partners.map(p => /*#__PURE__*/React.createElement("div", {
      key: p.id,
      style: {
        display: 'flex',
        gap: 11,
        alignItems: 'flex-start',
        paddingTop: 10,
        borderTop: '1px solid var(--border-faint)'
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: p.name,
      size: 42,
      ring: true
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-text)',
        fontWeight: 600,
        fontSize: 'var(--text-sm)',
        color: 'var(--text-strong)'
      }
    }, p.name), /*#__PURE__*/React.createElement("div", {
      className: "coord",
      style: {
        color: 'var(--accent-strong)',
        margin: '2px 0 5px'
      }
    }, p.base, " \xB7 ", p.tenure), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 'var(--text-xs)',
        color: 'var(--text-muted)',
        lineHeight: 1.5
      }
    }, p.note)))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8,
        flexWrap: 'wrap',
        marginTop: 2
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "sm",
      arrow: true,
      onClick: () => closeGo('contact', prefill)
    }, "Introduce me"), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm",
      onClick: () => closeGo('partners')
    }, "Meet the team")));
  }
  return null;
}
Object.assign(window, {
  RoutingConcierge
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/RoutingConcierge.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ServicesScreen.jsx
try { (() => {
/* Asia-Connect website — Services (token-driven) */
const {
  Button,
  Kicker,
  Card
} = window.AsiaConnectDesignSystem_f91cce;
const DETAIL = [{
  n: '01',
  k: 'Interim Leadership',
  t: 'Executive on demand',
  lead: 'Leadership coverage when you cannot afford a gap.',
  body: 'When a key executive leaves unexpectedly — or you need senior capacity during recruitment, restructuring or a board mandate — we deploy an experienced C-suite leader who steps in, stabilises, and keeps strategy moving.',
  roles: ['Interim CEO', 'Interim CFO', 'Interim COO', 'Interim CHRO', 'Country Manager']
}, {
  n: '02',
  k: 'Project Delivery',
  t: 'Complex projects, led from within',
  lead: 'The projects that decide the year, run by operators.',
  body: 'From market entry and M&A to carve-outs and digital transformation, we embed senior program leaders who turn complex plans into delivered outcomes — with the cultural fluency that cross-border work demands.',
  roles: ['Market entry', 'M&A & integration', 'Carve-outs', 'Transformation', 'PMO leadership']
}, {
  n: '03',
  k: 'Crisis & Recovery',
  t: 'Stability, restored',
  lead: 'When the situation is serious, we take over.',
  body: 'In financial strain, operational disruption, disputes or reputational risk, we bring proven crisis managers who assess fast, take the wheel, manage stakeholders and lead the recovery — through to a clean hand-over.',
  roles: ['Turnaround', 'Restructuring', 'Dispute management', 'Business recovery']
}];
const PROCESS = [{
  s: 'Day 0–2',
  t: 'Assessment',
  d: 'A partner scopes the situation, the stakeholders and the decisive moves — in person, fast.'
}, {
  s: 'Week 1',
  t: 'Deployment',
  d: 'Your principal is in the seat, with clear milestones and a mandate the board has signed off.'
}, {
  s: 'Ongoing',
  t: 'Implementation',
  d: 'Hands-on execution, weekly governance, measurable progress against the milestones.'
}, {
  s: 'Exit',
  t: 'Hand-over',
  d: 'Knowledge transfer to permanent leadership; we leave the organisation stronger than we found it.'
}];
const FAQ = [{
  q: 'How fast can a principal start?',
  a: 'Typically within ten working days of an initial conversation — and faster in a genuine crisis. The first partner assessment can happen within 48 hours.'
}, {
  q: 'How long is a typical engagement?',
  a: 'Most mandates run three to twelve months, structured around clear milestones and a defined hand-over, rather than an open-ended retainer.'
}, {
  q: 'Where do you operate?',
  a: 'From our Singapore headquarters across the ASEAN — Singapore, Vietnam, Malaysia, Indonesia, Thailand, the Philippines — plus India, China, Japan, South Korea and the Gulf.'
}];
function ServicesScreen({
  go,
  openAgent,
  bandTheme
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    className: "ac-band",
    "data-theme": bandTheme
  }, /*#__PURE__*/React.createElement("div", {
    className: "ac-grid-bg",
    style: {
      WebkitMaskImage: 'radial-gradient(110% 120% at 85% 20%, #000 35%, transparent 78%)',
      maskImage: 'radial-gradient(110% 120% at 85% 20%, #000 35%, transparent 78%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      position: 'relative',
      paddingBlock: 'clamp(3rem,2rem+5vw,6rem)'
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    tick: true,
    accent: true,
    style: {
      marginBottom: 22
    }
  }, "Services"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'var(--text-display-2)',
      lineHeight: 1.04,
      letterSpacing: '-0.025em',
      color: 'var(--text-strong)',
      margin: 0,
      maxWidth: '20ch'
    }
  }, "Senior leadership, deployed where it\u2019s decisive."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 24,
      maxWidth: '54ch',
      fontSize: 'var(--text-lead)',
      color: 'var(--text-body)',
      lineHeight: 'var(--leading-relaxed)'
    }
  }, "Three mandates, one standard: a partner who has held the seat before, accountable for the outcome from day one."))), /*#__PURE__*/React.createElement("section", {
    className: "container",
    style: {
      paddingBlock: 'var(--section-y)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 2
    }
  }, DETAIL.map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: d.n,
    style: {
      display: 'grid',
      gridTemplateColumns: '88px 1fr 1fr',
      gap: 'clamp(1rem,0.5rem+2vw,3rem)',
      padding: 'clamp(2rem,1rem+2vw,3rem) 0',
      borderTop: i === 0 ? 'none' : '1px solid var(--border)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(2.4rem,1.6rem+2vw,3.4rem)',
      color: 'var(--accent)',
      lineHeight: 0.9
    }
  }, d.n), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Kicker, {
    style: {
      marginBottom: 12
    }
  }, d.k), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'var(--text-h1)',
      lineHeight: 1.1,
      letterSpacing: '-0.02em',
      color: 'var(--text-strong)',
      margin: '0 0 6px'
    }
  }, d.t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: 'var(--text-lead)',
      color: 'var(--accent-strong)',
      marginBottom: 14
    }
  }, d.lead), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-base)',
      color: 'var(--text-body)',
      lineHeight: 'var(--leading-body)',
      maxWidth: '50ch'
    }
  }, d.body)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      paddingTop: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "coord",
    style: {
      color: 'var(--text-faint)',
      marginBottom: 4
    }
  }, "Typical roles"), d.roles.map(r => /*#__PURE__*/React.createElement("div", {
    key: r,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      fontSize: 'var(--text-base)',
      color: 'var(--text-strong)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      height: 1,
      background: 'var(--accent)'
    }
  }), r))))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-sunken)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ac-eyebrow"
  }, /*#__PURE__*/React.createElement(Kicker, {
    index: "\u2116 01"
  }, "How an engagement runs"), /*#__PURE__*/React.createElement("div", {
    className: "ac-rule-grow"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 18,
      marginTop: 36
    }
  }, PROCESS.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.t,
    style: {
      position: 'relative',
      paddingTop: 26
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 2,
      background: 'var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 26,
      height: 2,
      background: 'var(--accent)'
    }
  })), /*#__PURE__*/React.createElement("span", {
    className: "coord",
    style: {
      color: 'var(--accent-strong)'
    }
  }, p.s), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'var(--text-h3)',
      color: 'var(--text-strong)',
      margin: '8px 0 8px'
    }
  }, p.t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)',
      lineHeight: 'var(--leading-body)'
    }
  }, p.d)))))), /*#__PURE__*/React.createElement("section", {
    className: "container section"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '0.7fr 1.3fr',
      gap: 'clamp(1.5rem,1rem+3vw,4rem)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Kicker, {
    index: "\u2116 02",
    style: {
      marginBottom: 16
    }
  }, "Common questions"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'var(--text-h1)',
      lineHeight: 1.1,
      letterSpacing: '-0.02em',
      color: 'var(--text-strong)',
      margin: 0
    }
  }, "The answers buyers \u2014 and their research \u2014 ask for.")), /*#__PURE__*/React.createElement("div", null, FAQ.map((f, i) => /*#__PURE__*/React.createElement("details", {
    key: i,
    style: {
      borderTop: '1px solid var(--border)',
      padding: '20px 0'
    },
    open: i === 0
  }, /*#__PURE__*/React.createElement("summary", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      cursor: 'pointer',
      listStyle: 'none',
      fontFamily: 'var(--font-text)',
      fontWeight: 600,
      fontSize: 'var(--text-lg)',
      color: 'var(--text-strong)'
    }
  }, f.q, /*#__PURE__*/React.createElement("span", {
    className: "coord",
    style: {
      color: 'var(--accent-strong)'
    }
  }, "\uFF0B")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 12,
      fontSize: 'var(--text-base)',
      color: 'var(--text-body)',
      lineHeight: 'var(--leading-body)',
      maxWidth: '60ch'
    }
  }, f.a))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 56,
      display: 'flex',
      justifyContent: 'center',
      gap: 14,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    arrow: true,
    onClick: openAgent
  }, "Ask the concierge"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    onClick: () => go('contact')
  }, "Send a brief"))));
}
Object.assign(window, {
  ServicesScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ServicesScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteChrome.jsx
try { (() => {
/* Asia-Connect website — shared chrome (header + footer + brand switcher) */
const {
  Button
} = window.AsiaConnectDesignSystem_f91cce;
const NAV = [{
  id: 'home',
  label: 'Home'
}, {
  id: 'services',
  label: 'Services'
}, {
  id: 'partners',
  label: 'Partners'
}, {
  id: 'insight',
  label: 'Insight'
}, {
  id: 'newsletter',
  label: 'The Asia Operator'
}];
function BrandSwitch({
  brand,
  setBrand
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "ac-brandswitch",
    title: "Brand direction"
  }, /*#__PURE__*/React.createElement("button", {
    className: brand === 'meridian' ? 'on' : '',
    onClick: () => setBrand('meridian')
  }, "Meridian"), /*#__PURE__*/React.createElement("button", {
    className: brand === 'almanac' ? 'on' : '',
    onClick: () => setBrand('almanac')
  }, "Almanac"));
}
function SiteHeader({
  screen,
  go,
  onInk,
  brand,
  setBrand,
  openAgent
}) {
  const logo = onInk ? '../../assets/mark-inverse.svg' : '../../assets/mark.svg';
  return /*#__PURE__*/React.createElement("header", {
    className: 'ac-header' + (onInk ? ' on-ink' : ''),
    "data-theme": onInk ? 'ink' : undefined
  }, /*#__PURE__*/React.createElement("div", {
    className: "container ac-header-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ac-logo",
    onClick: () => go('home')
  }, /*#__PURE__*/React.createElement("img", {
    src: logo,
    alt: "Asia-Connect"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "nm"
  }, "Asia\u2011Connect"), /*#__PURE__*/React.createElement("div", {
    className: "sub"
  }, "Executive Partners"))), /*#__PURE__*/React.createElement("nav", {
    className: "ac-nav"
  }, NAV.map(n => /*#__PURE__*/React.createElement("button", {
    key: n.id,
    className: 'ac-navlink' + (screen === n.id ? ' active' : ''),
    onClick: () => go(n.id)
  }, n.label)), /*#__PURE__*/React.createElement(BrandSwitch, {
    brand: brand,
    setBrand: setBrand
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    arrow: true,
    onClick: openAgent
  }, "Ask the concierge"))));
}
function SiteFooter({
  go,
  brand,
  openAgent,
  bandTheme
}) {
  const logo = brand === 'almanac' ? '../../assets/mark.svg' : '../../assets/mark-inverse.svg';
  return /*#__PURE__*/React.createElement("footer", {
    className: "ac-footer",
    "data-theme": bandTheme
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ac-foot-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "ac-logo",
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: logo,
    alt: "",
    style: {
      width: 40,
      height: 40
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "nm"
  }, "Asia\u2011Connect"), /*#__PURE__*/React.createElement("div", {
    className: "sub"
  }, "Executive Partners"))), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: '30ch',
      color: 'var(--text-body)',
      fontSize: 'var(--text-base)',
      lineHeight: 'var(--leading-body)'
    }
  }, "The bridge between your HQ and Asia. Interim leadership, project delivery and crisis recovery \u2014 from 1\xB0North."), /*#__PURE__*/React.createElement("div", {
    className: "coord",
    style: {
      marginTop: 22,
      color: 'var(--text-faint)'
    }
  }, "SGP \xB7 1\xB017\u2032N 103\xB050\u2032E")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "ac-foot-h"
  }, "Firm"), /*#__PURE__*/React.createElement("a", {
    className: "ac-foot-link",
    onClick: () => go('services')
  }, "Services"), /*#__PURE__*/React.createElement("a", {
    className: "ac-foot-link",
    onClick: () => go('partners')
  }, "Partners"), /*#__PURE__*/React.createElement("a", {
    className: "ac-foot-link",
    onClick: () => go('insight')
  }, "Insight"), /*#__PURE__*/React.createElement("a", {
    className: "ac-foot-link",
    onClick: () => go('newsletter')
  }, "The Asia Operator")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "ac-foot-h"
  }, "Coverage"), /*#__PURE__*/React.createElement("a", {
    className: "ac-foot-link"
  }, "Singapore \xB7 HQ"), /*#__PURE__*/React.createElement("a", {
    className: "ac-foot-link"
  }, "ASEAN"), /*#__PURE__*/React.createElement("a", {
    className: "ac-foot-link"
  }, "India & China"), /*#__PURE__*/React.createElement("a", {
    className: "ac-foot-link"
  }, "Gulf & KSA")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "ac-foot-h"
  }, "Engage"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-body)',
      fontSize: 'var(--text-sm)',
      lineHeight: 1.7,
      marginBottom: 14
    }
  }, "Companies \u2014 ", /*#__PURE__*/React.createElement("a", {
    style: {
      color: 'var(--accent-strong)'
    }
  }, "help@asia-connect.partners"), /*#__PURE__*/React.createElement("br", null), "Candidates \u2014 ", /*#__PURE__*/React.createElement("a", {
    style: {
      color: 'var(--accent-strong)'
    }
  }, "leaders@asia-connect.partners")), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    arrow: true,
    onClick: openAgent
  }, "Ask the concierge"))), /*#__PURE__*/React.createElement("div", {
    className: "ac-divider",
    style: {
      marginTop: 56
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '22px 0 30px',
      flexWrap: 'wrap',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "coord",
    style: {
      color: 'var(--text-faint)'
    }
  }, "\xA9 2026 Asia-Connect Executive Partners Pte. Ltd."), /*#__PURE__*/React.createElement("span", {
    className: "coord",
    style: {
      color: 'var(--text-faint)'
    }
  }, "Terms \xB7 Privacy"))));
}
Object.assign(window, {
  SiteHeader,
  SiteFooter,
  NAV
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteChrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
/* Asia-Connect — shared data (real roster from asia-connect.partners, June 2026).
   Exposed as window.AC_DATA for every screen + the routing agent. */
(function () {
  const partners = [{
    id: 'laredo',
    name: 'Patrick Laredo',
    role: 'Chairman & Founder',
    base: 'Singapore',
    tenure: '35+ yrs',
    domains: ['Interim & Consulting', 'Cross-Border Expansion'],
    note: 'Founded X-PM and Asia-Connect; ex-KPMG French consulting lead.'
  }, {
    id: 'euvrard',
    name: 'Franck Euvrard',
    role: 'Partner — Mobility & EV',
    base: 'Paris / Asia',
    tenure: '30+ yrs',
    domains: ['Mobility', 'Technology & Digital', 'Industry & Machinery'],
    note: 'Automotive & EV operator — Faurecia, VinFast, Tata Technologies, KPIT.'
  }, {
    id: 'mardrus',
    name: 'Christian Mardrus',
    role: 'Partner — Mobility',
    base: 'Paris',
    tenure: '30+ yrs',
    domains: ['Mobility', 'Technology & Digital', 'Supply Chain & Logistics'],
    note: 'Former Renault-Nissan Executive Committee; Senior Advisor at BCG.'
  }, {
    id: 'aidi',
    name: 'Asma Aidi',
    role: 'Partner — Transformation',
    base: 'Singapore',
    tenure: '35+ yrs',
    domains: ['Business Transformation', 'Transport & Supply Chain', 'Turnaround Strategy'],
    note: 'C-level at Thales, Vodafone, SNCF (Keolis, GEODIS).'
  }, {
    id: 'walti',
    name: 'Andy Wälti',
    role: 'Partner — Industry & Chemicals',
    base: 'Bangkok',
    tenure: '30 yrs',
    domains: ['Healthcare & Biotech', 'Energy & Chemicals', 'Finance & Investment'],
    note: 'Region Head China & APAC at Clariant; Novartis, Sandoz.'
  }, {
    id: 'ajacques',
    name: 'Nicolas Ajacques',
    role: 'Partner — Energy & Consumer',
    base: 'Shanghai',
    tenure: '25+ yrs',
    domains: ['Energy & Chemicals', 'Consumer Goods', 'Industry & Machinery'],
    note: 'CEO roles at Savencia, ARC; TotalEnergies Li-ion JV. Ex-President French Chamber China.'
  }, {
    id: 'wang',
    name: 'Christine Wang',
    role: 'Partner — Innovation & AI',
    base: 'Munich / Shanghai',
    tenure: '15+ yrs',
    domains: ['Innovation & New Models', 'AI & Digitization', 'Market Expansion'],
    note: 'Lufthansa, Alibaba, BCG X. INSEAD MBA, seven languages.'
  }, {
    id: 'piveteau',
    name: 'Jean-Michel Piveteau',
    role: 'Partner — Finance',
    base: 'Shanghai',
    tenure: '40+ yrs',
    domains: ['Finance & Investment', 'Interim & Consulting', 'Cross-Border Expansion'],
    note: 'BNP Paribas investment banking across Asia & the Gulf; 27 yrs in China.'
  }, {
    id: 'becker',
    name: 'Elise Becker',
    role: 'Partner — Aero & Hospitality',
    base: 'Europe / APAC',
    tenure: '20 yrs',
    domains: ['Aeronautics & Transport', 'Telecoms', 'Hospitality & Food'],
    note: 'BCG; Airbus, Lufthansa Group. Europe↔APAC crisis recovery.'
  }, {
    id: 'best',
    name: 'Friedhelm Best',
    role: 'Partner — Engineering',
    base: 'Singapore',
    tenure: '25 yrs',
    domains: ['Engineering & Machinery', 'Technology & Digital', 'Operational Excellence'],
    note: 'Ex-VP Singaporean-German Chamber of Industry & Commerce.'
  }, {
    id: 'chen',
    name: 'Lena Chen',
    role: 'Partner — TMT & GCC',
    base: 'Riyadh / Shanghai',
    tenure: '15+ yrs',
    domains: ['Technology, Media & Telecom', 'GCC Expansion', 'China Globalization'],
    note: 'Built a listed tech group\u2019s MENA HQ from scratch.'
  }, {
    id: 'bachar',
    name: 'Anas BaChar',
    role: 'Partner — M&A & Climate',
    base: 'Abu Dhabi',
    tenure: '20 yrs',
    domains: ['M&A, Debt & Capital', 'ClimateTech & AgriFood', 'Impact & ESG'],
    note: 'Investment banker; co-founded a USD 550M nature-based asset manager. HEC Paris.'
  }, {
    id: 'thuet',
    name: 'Christophe Thuet',
    role: 'Partner — Industry',
    base: 'Singapore',
    tenure: '20+ yrs',
    domains: ['Cross-Border Expansion', 'Industry & Machinery', 'Governance'],
    note: 'Managing Partner, Energon Consulting Asia. IPO & M&A integration.'
  }, {
    id: 'johansson',
    name: 'Göran Johansson',
    role: 'Partner — FMCG & Interim',
    base: 'Copenhagen',
    tenure: '25+ yrs',
    domains: ['FMCG', 'Interim Management', 'Digitalization'],
    note: 'Founded Denmark\u2019s first interim provider; GSK, Nestlé Nordics CEO.'
  }, {
    id: 'amram',
    name: 'Ilann Amram',
    role: 'Alliance Partner — Indonesia',
    base: 'Jakarta',
    tenure: '25 yrs',
    domains: ['Technology & Digital', 'Engineering & Machinery'],
    note: 'Emerson, Rio Tinto; helps tech firms enter Indonesia. IFMT interim-certified.'
  }, {
    id: 'giang',
    name: 'Sophie Thuy Minh Giang',
    role: 'Partner — Vietnam',
    base: 'Hanoi',
    tenure: '10+ yrs',
    domains: ['Market Entry', 'Greenfield Factory Set-up', 'M&A'],
    note: 'FDI advisory & cross-cultural set-up in Vietnam.'
  }, {
    id: 'gomer',
    name: 'Frédéric Gomer',
    role: 'Alliance Partner — Turnaround',
    base: 'Asia / Europe',
    tenure: '20+ yrs',
    domains: ['Turnaround & Recovery', 'Supply Chain', 'Interim & Consulting'],
    note: 'MD, B2G Consulting; author of The Turnaround Blueprint. 30+ transformations.'
  }, {
    id: 'kostos',
    name: 'Jay Kostos',
    role: 'Alliance Partner — Supply Chain',
    base: 'Singapore',
    tenure: '20+ yrs',
    domains: ['Supply Chain & Logistics', 'Interim & Consulting', 'Sustainability & ESG'],
    note: 'Resilient, sustainable supply chains across Europe & APAC.'
  }, {
    id: 'borg',
    name: 'Philip Borg',
    role: 'Partner — Finance',
    base: 'Seoul',
    tenure: '15 yrs',
    domains: ['Finance & Investment', 'Interim & Consulting'],
    note: 'Financial primary research; co-founded an expert-network firm. NUS.'
  }];
  const markets = ['Singapore', 'Vietnam', 'Malaysia', 'Indonesia', 'Thailand', 'Philippines', 'India', 'China', 'Japan', 'South Korea', 'Pakistan', 'Saudi Arabia', 'UAE'];
  const sectors = ['Mobility & EV', 'Industry & Machinery', 'Energy & Chemicals', 'Healthcare & Biotech', 'Technology & Digital', 'Finance & Investment', 'Consumer & FMCG', 'Supply Chain & Logistics', 'M&A & Capital', 'Sustainability & ESG'];

  // Routing map for the concierge agent: situation -> recommended service + partners
  const routes = [{
    id: 'ev',
    label: 'EV / automotive localisation',
    match: ['ev', 'electric', 'automotive', 'car', 'vehicle', 'mobility', 'battery', 'local content', 'localis', 'localiz', 'oem', 'plant', 'factory'],
    service: 'Project Delivery',
    section: 'services',
    partners: ['euvrard', 'mardrus'],
    line: 'A local-content deadline is an execution problem, not a strategy one. You need an operator who has stood up a line in-region.'
  }, {
    id: 'crisis',
    label: 'A crisis / turnaround',
    match: ['crisis', 'turnaround', 'recovery', 'restructur', 'distress', 'losing', 'urgent', 'emergency', 'dispute'],
    service: 'Crisis & Recovery',
    section: 'services',
    partners: ['gomer', 'aidi'],
    line: 'When it\u2019s serious, we take the wheel — stabilise first, then lead the recovery to a clean hand-over.'
  }, {
    id: 'leadership',
    label: 'A sudden leadership gap',
    match: ['ceo', 'cfo', 'coo', 'left', 'departure', 'interim', 'gap', 'maternity', 'cover', 'resign'],
    service: 'Interim Leadership',
    section: 'services',
    partners: ['laredo', 'johansson'],
    line: 'We deploy a seasoned principal into the seat in days — not a profile from a pool.'
  }, {
    id: 'entry',
    label: 'Market entry / setup',
    match: ['market entry', 'enter', 'expansion', 'greenfield', 'set up', 'setup', 'new market', 'vietnam', 'indonesia', 'india'],
    service: 'Project Delivery',
    section: 'services',
    partners: ['giang', 'amram', 'best'],
    line: 'Entry is won on the ground — qualifying suppliers, reading regulators, and deciding on site.'
  }, {
    id: 'ma',
    label: 'M&A / capital',
    match: ['m&a', 'merger', 'acquisition', 'capital', 'fundrais', 'debt', 'invest', 'carve'],
    service: 'Project Delivery',
    section: 'services',
    partners: ['bachar', 'piveteau'],
    line: 'From diligence to integration, we put a principal who has closed cross-border deals on your side of the table.'
  }, {
    id: 'digital',
    label: 'Digital / AI transformation',
    match: ['digital', 'ai', 'transformation', 'technology', 'software', 'data', 'automation'],
    service: 'Project Delivery',
    section: 'services',
    partners: ['wang', 'aidi'],
    line: 'Transformation lands when someone owns delivery from inside the team, not from a deck.'
  }, {
    id: 'supply',
    label: 'Supply chain / operations',
    match: ['supply chain', 'logistics', 'operations', 'manufactur', 'procurement', 'sourcing', 'quality'],
    service: 'Project Delivery',
    section: 'services',
    partners: ['kostos', 'gomer'],
    line: 'We embed an operator who fixes the line and the lead time — measurably.'
  }, {
    id: 'energy',
    label: 'Energy / chemicals / industry',
    match: ['energy', 'chemical', 'industrial', 'esg', 'sustainab', 'climate'],
    service: 'Interim Leadership',
    section: 'services',
    partners: ['ajacques', 'walti'],
    line: 'Heavy industry in Asia needs leaders who have run plants here, through transition.'
  }, {
    id: 'health',
    label: 'Healthcare / biotech',
    match: ['health', 'pharma', 'biotech', 'medtech', 'medical', 'cardio', 'device'],
    service: 'Project Delivery',
    section: 'services',
    partners: ['walti', 'sandyani'],
    line: 'Regulated markets reward operators who know the regulator and the route to launch.'
  }, {
    id: 'finance',
    label: 'Finance / banking',
    match: ['finance', 'banking', 'cfo', 'treasury', 'investment'],
    service: 'Interim Leadership',
    section: 'services',
    partners: ['piveteau', 'borg'],
    line: 'Decades of in-region banking and finance leadership, available on a defined mandate.'
  }];
  const facts = {
    partners: 18,
    markets: 13,
    deploy: '< 10 days',
    mandate: '3–12 mo'
  };
  window.AC_DATA = {
    partners,
    markets,
    sectors,
    routes,
    facts,
    byId: id => partners.find(p => p.id === id)
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Kicker = __ds_scope.Kicker;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Card = __ds_scope.Card;

})();
