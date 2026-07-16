# NOTES

## Comparison with shadcn/ui

After comparing my components with shadcn/ui, I found several improvements in their implementation.

### 1. Better Focus Management

My modal moves focus into the dialog, while shadcn/ui provides more complete focus management and reliably restores focus.

### 2. Portal Rendering

My modal renders directly in the component tree. shadcn/ui renders dialogs through a Portal, avoiding stacking context and z-index issues.

### 3. Keyboard Accessibility

shadcn/ui includes more complete keyboard handling and accessibility behaviors.

### 4. Reusable Architecture

Their implementation separates concerns into reusable components like Dialog, DialogTrigger, DialogContent, and DialogTitle.

## What I Learned

- Accessibility requires more than adding ARIA attributes.
- Focus management is critical for modal dialogs.
- Keyboard interactions should follow the WAI-ARIA Authoring Practices.
- Reading open-source component implementations is a great way to learn.
