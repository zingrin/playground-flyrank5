# Accessibility Playground

A React + TypeScript playground demonstrating accessible UI components built from scratch following the WAI-ARIA Authoring Practices Guide (APG).

## Components

### 1. Modal Dialog

- Built without component libraries
- Uses `role="dialog"`
- Uses `aria-modal="true"`
- Uses `aria-labelledby`
- Opens and closes with buttons
- Supports the Escape key
- Focus moves into the dialog
- Returns focus to the trigger button when closed

### 2. Tabs

- Uses `role="tablist"`
- Uses `role="tab"`
- Uses `role="tabpanel"`
- Supports keyboard navigation
- Arrow Left / Right navigation
- Home and End keys
- Proper ARIA relationships

### 3. Disclosure

- Expand/Collapse section
- Uses `aria-expanded`
- Uses `aria-controls`
- Keyboard accessible
- Supports Enter and Space keys

---

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS v4
- shadcn/ui (for comparison)

---

## Project Structure

```
src/
│
├── components/
│   ├── Modal/
│   ├── Tabs/
│   ├── Disclosure/
│   └── ui/
│
├── lib/
│
├── App.tsx
├── main.tsx
└── index.css
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/zingrin/playground-flyrank5
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build the project:

```bash
npm run build
```

---

## Accessibility Features

- Semantic HTML
- WAI-ARIA roles
- Keyboard navigation
- Escape key support
- Focus management
- Screen reader friendly labels

---

## shadcn/ui Comparison

The project also includes shadcn/ui Dialog and Tabs components for learning and comparison.

Files:

- `src/components/ui/dialog.tsx`
- `src/components/ui/tabs.tsx`

A detailed comparison is available in **NOTES.md**.

---

## Learning Outcomes

Through this project I learned:

- How accessible components work
- WAI-ARIA Authoring Practices
- Keyboard accessibility
- Focus management
- Building reusable React components
- Comparing custom components with production-ready implementations like shadcn/ui

---

## Author

Zingrin Moi Bawm
