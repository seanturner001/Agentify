# Agentify Design System
## Mobile-First Component Library & Style Guide

**Purpose:** Ensure consistent, accessible, and delightful user experience across all screens.

---

## Core Principles

### 1. **Mobile-First**
- Design for 375px width first
- Scale up to tablet/desktop
- Touch-optimized (44px minimum targets)

### 2. **Speed & Performance**
- Lazy load components
- Optimize animations (60fps)
- Minimize bundle size

### 3. **Accessibility**
- WCAG 2.1 AA compliance
- Keyboard navigation
- Screen reader support

### 4. **Clarity Over Cleverness**
- Obvious > Subtle
- Familiar patterns
- Minimal cognitive load

---

## Color System

### Brand Colors

```css
/* Primary - Indigo (Actions, Links, Highlights) */
--primary-50:  #EEF2FF;
--primary-100: #E0E7FF;
--primary-500: #6366F1;  /* Main brand color */
--primary-600: #4F46E5;
--primary-700: #4338CA;
--primary-900: #312E81;

/* Secondary - Green (Success, Positive actions) */
--secondary-50:  #ECFDF5;
--secondary-100: #D1FAE5;
--secondary-500: #10B981;  /* Success state */
--secondary-600: #059669;
--secondary-700: #047857;

/* Accent - Purple (Premium features, highlights) */
--accent-500: #8B5CF6;
--accent-600: #7C3AED;
```

### Semantic Colors

```css
/* Success */
--success-light: #D1FAE5;
--success:       #10B981;
--success-dark:  #047857;

/* Warning */
--warning-light: #FEF3C7;
--warning:       #F59E0B;
--warning-dark:  #D97706;

/* Error */
--error-light: #FEE2E2;
--error:       #EF4444;
--error-dark:  #DC2626;

/* Info */
--info-light: #DBEAFE;
--info:       #3B82F6;
--info-dark:  #1D4ED8;
```

### Neutral Colors (Light Mode)

```css
--gray-50:  #F9FAFB;  /* Background */
--gray-100: #F3F4F6;  /* Subtle background */
--gray-200: #E5E7EB;  /* Borders */
--gray-300: #D1D5DB;  /* Disabled text */
--gray-400: #9CA3AF;  /* Placeholder text */
--gray-500: #6B7280;  /* Secondary text */
--gray-600: #4B5563;  /* Primary text (light bg) */
--gray-700: #374151;
--gray-800: #1F2937;
--gray-900: #111827;  /* Headings */
```

### Dark Mode Colors

```css
--dark-bg-primary:   #0F172A;  /* Main background */
--dark-bg-secondary: #1E293B;  /* Cards, elevated */
--dark-bg-tertiary:  #334155;  /* Hover states */

--dark-text-primary:   #F1F5F9;  /* Headings */
--dark-text-secondary: #CBD5E1;  /* Body text */
--dark-text-tertiary:  #94A3B8;  /* Muted text */

--dark-border: #334155;
```

---

## Typography

### Font Stack

```css
/* Primary: System fonts for speed */
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",
             Roboto, "Helvetica Neue", Arial, sans-serif;

/* Monospace: For code/API keys */
font-family: 'SF Mono', Monaco, 'Cascadia Code',
             'Courier New', monospace;
```

### Type Scale

```css
/* Headings */
--text-4xl: 36px / 40px (2.25rem / 2.5rem)   /* Hero */
--text-3xl: 30px / 36px (1.875rem / 2.25rem) /* Page title */
--text-2xl: 24px / 32px (1.5rem / 2rem)      /* Section header */
--text-xl:  20px / 28px (1.25rem / 1.75rem)  /* Subsection */
--text-lg:  18px / 28px (1.125rem / 1.75rem) /* Card title */

/* Body */
--text-base: 16px / 24px (1rem / 1.5rem)     /* Default */
--text-sm:   14px / 20px (0.875rem / 1.25rem) /* Small text */
--text-xs:   12px / 16px (0.75rem / 1rem)    /* Captions */
```

### Font Weights

```css
--font-normal:    400  /* Body text */
--font-medium:    500  /* Emphasized text */
--font-semibold:  600  /* Subheadings */
--font-bold:      700  /* Headings */
```

### Usage Examples

```tsx
// Heading 1 - Page titles
<h1 className="text-3xl font-bold text-gray-900">
  Agent Catalogue
</h1>

// Heading 2 - Section headers
<h2 className="text-2xl font-semibold text-gray-800">
  Popular Agents
</h2>

// Body - Default text
<p className="text-base text-gray-600">
  Conducts comprehensive research on any topic...
</p>

// Caption - Metadata
<span className="text-sm text-gray-500">
  Last run 2h ago
</span>

// Small - Timestamps
<time className="text-xs text-gray-400">
  Oct 26, 2025
</time>
```

---

## Spacing System

### Scale (8px base unit)

```css
--space-0:  0px
--space-1:  4px   (0.25rem)  /* xs */
--space-2:  8px   (0.5rem)   /* sm */
--space-3:  12px  (0.75rem)
--space-4:  16px  (1rem)     /* md - default */
--space-5:  20px  (1.25rem)
--space-6:  24px  (1.5rem)   /* lg */
--space-8:  32px  (2rem)     /* xl */
--space-10: 40px  (2.5rem)
--space-12: 48px  (3rem)     /* 2xl */
--space-16: 64px  (4rem)     /* 3xl */
```

### Padding Conventions

```tsx
// Cards
className="p-4"           // 16px padding (mobile)
className="p-6 md:p-8"    // 24px mobile, 32px desktop

// Sections
className="py-8"          // 32px vertical
className="px-4"          // 16px horizontal

// Buttons
className="px-4 py-2"     // 16px horizontal, 8px vertical
className="px-6 py-3"     // 24px horizontal, 12px vertical (large)
```

---

## Layout Grid

### Container

```css
.container {
  max-width: 100%;
  padding: 0 16px;
  margin: 0 auto;
}

/* Responsive max-widths */
@media (min-width: 640px)  { max-width: 640px; }  /* sm */
@media (min-width: 768px)  { max-width: 768px; }  /* md */
@media (min-width: 1024px) { max-width: 1024px; } /* lg */
@media (min-width: 1280px) { max-width: 1280px; } /* xl */
```

### Grid System

```tsx
// 12-column grid (Tailwind)
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* Cards */}
</div>

// Auto-fit responsive
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
  {/* Quick actions */}
</div>
```

---

## Component Library

### 1. Buttons

#### Primary Button
```tsx
<button className="
  px-6 py-3
  bg-primary-500 hover:bg-primary-600
  text-white font-medium
  rounded-lg
  shadow-sm hover:shadow-md
  transition-all duration-200
  active:scale-95
  disabled:opacity-50 disabled:cursor-not-allowed
">
  Execute Workflow
</button>
```

#### Secondary Button
```tsx
<button className="
  px-6 py-3
  bg-white hover:bg-gray-50
  text-gray-700 font-medium
  border border-gray-300
  rounded-lg
  shadow-sm
  transition-all duration-200
  active:scale-95
">
  Cancel
</button>
```

#### Ghost Button
```tsx
<button className="
  px-4 py-2
  text-primary-600 hover:bg-primary-50
  font-medium
  rounded-lg
  transition-colors duration-200
">
  Learn More
</button>
```

#### Icon Button
```tsx
<button className="
  w-10 h-10
  flex items-center justify-center
  text-gray-600 hover:text-gray-900
  hover:bg-gray-100
  rounded-lg
  transition-colors duration-200
">
  <Icon size={20} />
</button>
```

---

### 2. Cards

#### Agent Card
```tsx
<div className="
  bg-white
  border border-gray-200
  rounded-xl
  p-4
  shadow-sm hover:shadow-md
  transition-shadow duration-200
  cursor-pointer
  active:scale-[0.98]
">
  <div className="flex items-start gap-3">
    <div className="text-3xl">🔍</div>
    <div className="flex-1">
      <h3 className="text-lg font-semibold text-gray-900">
        Research Analyst
      </h3>
      <p className="text-sm text-gray-600 mt-1">
        Deep research with citations
      </p>
      <div className="flex items-center gap-4 mt-3 text-xs text-gray-500">
        <span>⭐ 4.9</span>
        <span>💰 ~$0.02</span>
        <span>⚡ Fast</span>
      </div>
    </div>
  </div>
</div>
```

#### Workflow Card
```tsx
<div className="
  bg-white
  border border-gray-200
  rounded-xl
  p-4
  shadow-sm
">
  <h3 className="font-semibold text-gray-900">
    Market Research Flow
  </h3>
  <p className="text-sm text-gray-500 mt-1">
    3 agents • Last run 2h ago
  </p>
  <button className="
    mt-3 w-full
    px-4 py-2
    bg-primary-50 hover:bg-primary-100
    text-primary-600
    font-medium rounded-lg
    transition-colors duration-200
  ">
    ▶ Run Again
  </button>
</div>
```

---

### 3. Inputs

#### Text Input
```tsx
<div className="space-y-2">
  <label className="block text-sm font-medium text-gray-700">
    Workflow Name
  </label>
  <input
    type="text"
    className="
      w-full px-4 py-3
      bg-white
      border border-gray-300
      rounded-lg
      text-gray-900
      placeholder:text-gray-400
      focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
      transition-all duration-200
    "
    placeholder="Enter workflow name..."
  />
</div>
```

#### Search Input
```tsx
<div className="relative">
  <input
    type="search"
    className="
      w-full pl-10 pr-4 py-3
      bg-gray-50
      border border-gray-200
      rounded-lg
      text-gray-900
      placeholder:text-gray-400
      focus:bg-white focus:ring-2 focus:ring-primary-500
    "
    placeholder="Search agents..."
  />
  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
    <SearchIcon size={20} />
  </div>
</div>
```

#### Textarea
```tsx
<textarea
  className="
    w-full px-4 py-3
    bg-white
    border border-gray-300
    rounded-lg
    text-gray-900
    placeholder:text-gray-400
    focus:outline-none focus:ring-2 focus:ring-primary-500
    resize-none
  "
  rows={4}
  placeholder="Enter your content..."
/>
```

---

### 4. Badges & Pills

#### Status Badge
```tsx
// Success
<span className="
  inline-flex items-center gap-1
  px-2 py-1
  bg-success-light text-success-dark
  text-xs font-medium
  rounded-full
">
  ✅ Completed
</span>

// Error
<span className="
  inline-flex items-center gap-1
  px-2 py-1
  bg-error-light text-error-dark
  text-xs font-medium
  rounded-full
">
  ❌ Failed
</span>

// Warning
<span className="
  inline-flex items-center gap-1
  px-2 py-1
  bg-warning-light text-warning-dark
  text-xs font-medium
  rounded-full
">
  ⚠️ Running
</span>
```

#### Category Pill (Filter)
```tsx
<button className="
  px-4 py-2
  bg-gray-100 hover:bg-gray-200
  text-gray-700
  text-sm font-medium
  rounded-full
  transition-colors duration-200

  /* Active state */
  data-[active=true]:bg-primary-500
  data-[active=true]:text-white
">
  Research
</button>
```

#### Verification Badge
```tsx
<span className="
  inline-flex items-center gap-1
  px-2 py-1
  bg-primary-50 text-primary-600
  text-xs font-medium
  rounded
">
  ✓ Verified
</span>
```

---

### 5. Progress Indicators

#### Progress Bar
```tsx
<div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
  <div
    className="bg-primary-500 h-full rounded-full transition-all duration-300"
    style={{ width: '60%' }}
  />
</div>

// With label
<div className="space-y-2">
  <div className="flex justify-between text-sm text-gray-600">
    <span>Executing...</span>
    <span>60%</span>
  </div>
  <div className="w-full bg-gray-200 rounded-full h-2">
    <div className="bg-primary-500 h-full rounded-full" style={{ width: '60%' }} />
  </div>
</div>
```

#### Spinner
```tsx
<div className="
  w-8 h-8
  border-4 border-gray-200 border-t-primary-500
  rounded-full
  animate-spin
" />
```

#### Skeleton Loader
```tsx
<div className="space-y-3 animate-pulse">
  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
</div>
```

---

### 6. Modals & Overlays

#### Modal
```tsx
{/* Backdrop */}
<div className="
  fixed inset-0 z-50
  bg-black/50
  flex items-center justify-center
  p-4
  animate-in fade-in duration-200
">
  {/* Modal */}
  <div className="
    w-full max-w-lg
    bg-white
    rounded-2xl
    shadow-2xl
    animate-in zoom-in-95 duration-200
  ">
    {/* Header */}
    <div className="flex items-center justify-between p-6 border-b">
      <h2 className="text-xl font-semibold">Select Agent</h2>
      <button className="text-gray-400 hover:text-gray-600">
        <CloseIcon size={24} />
      </button>
    </div>

    {/* Body */}
    <div className="p-6">
      {/* Content */}
    </div>

    {/* Footer (optional) */}
    <div className="flex gap-3 p-6 border-t">
      <button className="flex-1 px-4 py-2 bg-gray-100">
        Cancel
      </button>
      <button className="flex-1 px-4 py-2 bg-primary-500 text-white">
        Confirm
      </button>
    </div>
  </div>
</div>
```

#### Bottom Sheet (Mobile)
```tsx
<div className="
  fixed inset-x-0 bottom-0 z-50
  bg-white
  rounded-t-2xl
  shadow-2xl
  max-h-[80vh]
  animate-in slide-in-from-bottom duration-300
">
  {/* Handle */}
  <div className="flex justify-center pt-3 pb-2">
    <div className="w-12 h-1 bg-gray-300 rounded-full" />
  </div>

  {/* Content */}
  <div className="px-6 pb-6 overflow-y-auto">
    {/* Sheet content */}
  </div>
</div>
```

---

### 7. Toast Notifications

```tsx
{/* Success Toast */}
<div className="
  fixed top-4 right-4 z-50
  flex items-center gap-3
  px-4 py-3
  bg-white
  border border-success
  rounded-lg
  shadow-lg
  animate-in slide-in-from-top duration-300
">
  <div className="text-success">✓</div>
  <div>
    <p className="font-medium text-gray-900">Workflow saved!</p>
    <p className="text-sm text-gray-600">Successfully created new workflow</p>
  </div>
  <button className="text-gray-400 hover:text-gray-600">
    <CloseIcon size={16} />
  </button>
</div>

{/* Error Toast */}
<div className="
  flex items-center gap-3
  px-4 py-3
  bg-error-light
  border border-error
  text-error-dark
  rounded-lg
  shadow-lg
">
  <div>⚠️</div>
  <div>
    <p className="font-medium">Execution failed</p>
    <p className="text-sm">Invalid API key</p>
  </div>
</div>
```

---

### 8. Empty States

```tsx
<div className="
  flex flex-col items-center justify-center
  py-12 px-6
  text-center
">
  <div className="text-6xl mb-4">📭</div>
  <h3 className="text-xl font-semibold text-gray-900 mb-2">
    No workflows yet
  </h3>
  <p className="text-gray-600 mb-6 max-w-sm">
    Create your first automation to get started with Agentify
  </p>
  <button className="px-6 py-3 bg-primary-500 text-white rounded-lg">
    + Create Workflow
  </button>
</div>
```

---

### 9. Navigation

#### Bottom Navigation Bar
```tsx
<nav className="
  fixed bottom-0 inset-x-0
  bg-white
  border-t border-gray-200
  safe-area-inset-bottom
">
  <div className="flex justify-around items-center h-16">
    {/* Nav Item */}
    <a href="/home" className="
      flex flex-col items-center gap-1
      px-4 py-2
      text-gray-600
      data-[active=true]:text-primary-600
    ">
      <HomeIcon size={24} />
      <span className="text-xs">Home</span>
    </a>

    {/* Repeat for other items */}
  </div>
</nav>
```

#### Top Header
```tsx
<header className="
  sticky top-0 z-40
  bg-white
  border-b border-gray-200
  safe-area-inset-top
">
  <div className="flex items-center justify-between px-4 h-14">
    <button className="w-10 h-10">
      <MenuIcon size={24} />
    </button>

    <h1 className="text-lg font-semibold">Agentify</h1>

    <div className="flex items-center gap-2">
      <button className="w-10 h-10">
        <BellIcon size={24} />
      </button>
      <button className="w-10 h-10">
        <UserIcon size={24} />
      </button>
    </div>
  </div>
</header>
```

---

## Shadows & Elevation

```css
/* Shadow scale */
--shadow-sm:  0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-md:  0 4px 6px -1px rgba(0, 0, 0, 0.1);
--shadow-lg:  0 10px 15px -3px rgba(0, 0, 0, 0.1);
--shadow-xl:  0 20px 25px -5px rgba(0, 0, 0, 0.1);
--shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);

/* Usage */
.card { box-shadow: var(--shadow-md); }
.modal { box-shadow: var(--shadow-2xl); }
```

---

## Border Radius

```css
--radius-sm:  4px   /* Badges, small pills */
--radius-md:  8px   /* Buttons, inputs */
--radius-lg:  12px  /* Cards */
--radius-xl:  16px  /* Large cards */
--radius-2xl: 24px  /* Modals */
--radius-full: 9999px /* Circles, pills */
```

---

## Transitions & Animations

### Standard Transitions
```css
/* Quick (hover states) */
transition: all 150ms ease-in-out;

/* Standard (most interactions) */
transition: all 200ms ease-in-out;

/* Slow (page transitions) */
transition: all 300ms ease-in-out;
```

### Common Animations
```css
/* Fade in */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Slide up */
@keyframes slideUp {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

/* Pulse (loading) */
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

/* Spin (loading) */
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
```

---

## Iconography

### Icon Library: **Lucide React**
```bash
npm install lucide-react
```

### Icon Sizes
```tsx
import { Search, Home, Settings } from 'lucide-react'

// Small (captions, inline)
<Search size={16} />

// Medium (default UI)
<Home size={20} />

// Large (headings, emphasis)
<Settings size={24} />

// Extra large (empty states, hero)
<Icon size={48} />
```

### Icon Color Convention
```tsx
// Active/primary
<Icon className="text-primary-600" />

// Secondary/muted
<Icon className="text-gray-500" />

// Disabled
<Icon className="text-gray-300" />

// Semantic
<Icon className="text-success" />
<Icon className="text-error" />
```

---

## Mobile-Specific Patterns

### Safe Area (iOS)
```css
/* Account for iPhone notch/home indicator */
.container {
  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);
}
```

### Touch Feedback
```tsx
// iOS-style active state
className="active:opacity-70 active:scale-95 transition-all"

// Android ripple (Material Design)
// Use Tailwind plugin or library like react-ripples
```

### Pull to Refresh
```tsx
// Use library like react-pull-to-refresh
<PullToRefresh onRefresh={handleRefresh}>
  <List />
</PullToRefresh>
```

---

## Responsive Utilities

### Show/Hide Based on Screen Size
```tsx
// Hide on mobile, show on desktop
<div className="hidden md:block">
  Sidebar
</div>

// Show on mobile only
<div className="block md:hidden">
  Mobile menu
</div>
```

### Responsive Text
```tsx
<h1 className="text-2xl md:text-3xl lg:text-4xl">
  Responsive Heading
</h1>
```

### Responsive Spacing
```tsx
<div className="p-4 md:p-6 lg:p-8">
  Responsive padding
</div>
```

---

## Accessibility Checklist

### ✅ Color Contrast
- Text: Minimum 4.5:1 ratio
- Large text (18px+): Minimum 3:1 ratio
- Interactive elements: Minimum 3:1 ratio

### ✅ Focus States
```tsx
className="focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
```

### ✅ ARIA Labels
```tsx
<button aria-label="Close modal">
  <CloseIcon />
</button>

<input aria-describedby="email-error" />
<p id="email-error" role="alert">Invalid email</p>
```

### ✅ Semantic HTML
```tsx
// Use semantic tags
<nav>, <main>, <article>, <aside>, <footer>

// Proper heading hierarchy
<h1> → <h2> → <h3> (don't skip levels)
```

### ✅ Keyboard Navigation
- Tab order: Logical flow
- Enter/Space: Activate buttons
- Escape: Close modals
- Arrow keys: Navigate lists

---

## Component Implementation Guide

### Tech Stack
- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS 3+
- **Components:** shadcn/ui (copy-paste, customizable)
- **Icons:** Lucide React
- **Animations:** Tailwind CSS + Framer Motion
- **State:** Zustand
- **Forms:** React Hook Form + Zod

### File Structure
```
src/
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   └── signup/
│   ├── (dashboard)/
│   │   ├── layout.tsx
│   │   ├── page.tsx (home)
│   │   ├── agents/
│   │   ├── workflows/
│   │   └── history/
│   └── api/
├── components/
│   ├── ui/           # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   └── ...
│   ├── agents/       # Agent-specific
│   │   ├── AgentCard.tsx
│   │   ├── AgentDetail.tsx
│   │   └── AgentPicker.tsx
│   ├── workflows/    # Workflow-specific
│   │   ├── WorkflowCanvas.tsx
│   │   ├── WorkflowNode.tsx
│   │   └── ExecutionMonitor.tsx
│   └── layout/       # Layout components
│       ├── Header.tsx
│       ├── BottomNav.tsx
│       └── Container.tsx
├── lib/
│   ├── supabase.ts
│   ├── anthropic.ts
│   └── utils.ts
└── styles/
    └── globals.css
```

---

## Next Steps

1. **Setup Tailwind + shadcn/ui**
   ```bash
   npx create-next-app@latest agentify
   npx shadcn-ui@latest init
   ```

2. **Install dependencies**
   ```bash
   npm install lucide-react framer-motion zustand
   npm install @supabase/supabase-js
   npm install @anthropic-ai/sdk
   ```

3. **Configure Tailwind theme** (extend with custom colors)

4. **Build component library** (start with Button, Card, Input)

5. **Create page layouts** (following wireframes)

---

**Document Status:** v1.0 - Ready for Implementation
**Last Updated:** October 26, 2025
**Design Tool:** Figma (recommended for high-fidelity mockups)
**Component Library:** shadcn/ui + Tailwind CSS
