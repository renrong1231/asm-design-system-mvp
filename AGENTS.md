# AGENTS.md

## Project Background

This is a minimum viable product for testing how Codex works with a design-system-driven frontend project.

The product context is an ASM backend system. The interface is mainly for dense admin workflows such as asset lists, vulnerability lists, project management, detail drawers, tables, tags, and status indicators.

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS will be added later
- Design tokens will be added later
- Reusable UI components will be added later

## General Rules

1. Prefer existing components before creating new ones.
2. Do not duplicate Button, Tag, Table, Modal, Drawer, Input, or Select components if they already exist.
3. Do not hard-code colors such as `#1677ff`, `#f5f5f5`, `rgb(...)`, or `rgba(...)` unless explicitly requested.
4. Prefer design tokens, semantic class names, or Tailwind theme values once they are available.
5. Do not add one-off styles just to visually match a screenshot.
6. Keep admin pages dense, clear, and readable.
7. Avoid heavy shadows unless explicitly requested.
8. Avoid tooltips in dense tables unless explicitly requested.
9. Before changing a feature, search for similar existing components or patterns in the project.
10. After making changes, explain:
   - Which files changed
   - Which components were used
   - Which tokens or styles were used
   - How to verify the result

## Table Interaction Rules

1. External links may use blue text and underline on hover.
2. A first-column detail entry should not use the same hover style as an external link.
3. If the first column looks like a URL but opens an internal detail view, provide a separate explicit external-link entry such as `访问网站`.
4. Do not rely only on an icon to distinguish internal links from external links.
5. Dense tables should prioritize clarity and predictable click behavior.