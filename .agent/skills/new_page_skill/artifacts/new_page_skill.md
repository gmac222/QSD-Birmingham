# QSD Fire Systems: New Page Skill

This workflow describes the process for creating a new supporting page for the QSD Fire Systems website, ensuring it maintains design consistency, SEO performance, and proper integration with the main site architecture.

## Workflow Steps

### 1. Scaffold the Page
- Copy `index.html` to a new file named appropriately for the topic (e.g., `topic-name.html`).
- This guarantees that the new page inherits the core design tokens, global CSS, navigation, and multi-step lead capture form.

### 2. Clean Up Cloned Code
- **Remove** homepage-specific interactive elements that do not belong on secondary pages:
  - The `loader` `div`.
  - The `scrollProgress` bar.
  - The `scroll-animation` section (including the canvas).
  - The `specs` section (if purely performance-based and redundant).
  - The `testimonials` carousel wrapper.
- **Remove** associated JavaScript logic for these components at the bottom of the file (Frame sequence, annotation cards, scroll handlers, specs count-up, testimonial carousel). **Keep** the navbar scroll toggle and the multi-step form logic.

### 3. Update SEO and Meta Data
- Update the `<title>` and `<meta name="description">` to perfectly target the topic and intent of the new page.

### 4. Build the Content
- **Hero Section**: Create a static hero section using the existing `hero` ID but replace the scroll logic with a clean gradient background (e.g., `linear-gradient(180deg, var(--bg) 0%, #0A1925 100%)`) and text that establishes authority.
- **Body Content**: Use semantic HTML (`<article>`, `<h2>`, `<h3>`) with the existing design tokens (e.g., `var(--surface-1)`, `var(--card-border)`) to format the new content.
- Ensure the copy is authoritative, factually up-to-date, and written for the target audience (e.g., housing association compliance managers).
- **External Links**: Any outbound links to authoritative sources (like gov.uk or HSE) must use `target="_blank" rel="nofollow noopener"` to protect site authority.

### 5. Site Integration (Internal Linking)
- **Footer Updates**: Update the global footer on *all* pages to include a link to the newly created page. Ensure the QSD Fire Systems business address is present.
- **Navigation**: Update the header navigation pill to link to the new page if relevant.
- **Contextual Linking**: Add inline links from relevant feature cards or text blocks in `index.html` directing users to the new supporting page. Ensure internal links use `color: var(--accent)` and `text-decoration: underline`.

### 6. Validation
- Verify the multi-step form remains functional.
- Ensure all removed JavaScript does not throw console errors.
- Ensure mobile responsiveness (`@media` queries) holds up with the newly added text sections.
