A square control for single-glyph actions where a text label would be redundant (close, menu, carousel arrows).

```jsx
<IconButton label="Next" variant="outline"><i data-lucide="arrow-right"></i></IconButton>
```

Always pass `label` for accessibility. Variants: `solid` / `outline` / `ghost`. Sizes `sm` / `md` / `lg` (min 44px hit target at `md`).
