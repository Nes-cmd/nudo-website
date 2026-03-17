# Nudo Website Theme Configuration

## Primary Color

The primary color theme is defined in `resources/css/app.css` under the `@theme` directive.

### Current Theme: Indigo
- **Primary 500**: `#6366f1` (Main brand color)
- **Primary 600**: `#4f46e5` (Hover states, buttons)
- **Primary 700**: `#4338ca` (Active states)

### Usage in Components

You can use the primary color in your components with Tailwind classes:
- `bg-primary-500` - Primary background
- `text-primary-600` - Primary text color
- `border-primary-400` - Primary border
- `hover:bg-primary-700` - Hover state

### Changing the Primary Color

To change the primary color theme:

1. Open `resources/css/app.css`
2. Update the `--color-primary-*` values in the `@theme` block
3. Choose colors from:
   - [Tailwind Color Palette](https://tailwindcss.com/docs/customizing-colors)
   - Or use custom hex values

### Example: Blue Theme
```css
--color-primary-500: #3b82f6;
--color-primary-600: #2563eb;
--color-primary-700: #1d4ed8;
```

### Example: Purple Theme
```css
--color-primary-500: #a855f7;
--color-primary-600: #9333ea;
--color-primary-700: #7e22ce;
```

### Example: Custom Brand Color
```css
--color-primary-500: #your-hex-color;
--color-primary-600: #darker-shade;
--color-primary-700: #even-darker-shade;
```

## Current Implementation

The site currently uses `indigo` colors throughout. To migrate to the new `primary` theme:

1. Replace `indigo-*` classes with `primary-*` classes
2. Example: `bg-indigo-600` → `bg-primary-600`
3. Example: `text-indigo-400` → `text-primary-400`

## Theme Variables

All theme colors are defined as CSS custom properties, making them:
- Easy to override
- Accessible via JavaScript
- Compatible with dark mode

