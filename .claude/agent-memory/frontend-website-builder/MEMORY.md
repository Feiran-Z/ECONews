# Frontend Website Builder Memory

## Project Overview
- ECONews website for IB Economics companion site
- Two-column layout: left scrollable content, right fixed navigation
- Modern, simplistic theme with Manrope font and #880112 primary color
- Three main sections: About, Selected News, Contact

## Design System
- Primary color: #880112 (burgundy/red)
- Secondary color: #2c3e50 (dark blue)
- Accent color: #3498db (blue)
- Light color: #f8f9fa (off-white)
- Main font: Manrope
- Alternate font: Inter (sans-serif)
- Spacing system: xs (0.25rem), sm (0.5rem), md (1rem), lg (1.5rem), xl (2rem), xxl (3rem)
- Border radius: 8px
- Box shadow: 0 4px 6px rgba(0, 0, 0, 0.1)

## Layout Implementation
- Container uses flexbox with fixed right column (300px width)
- Content column has max-width: 800px for optimal readability
- Responsive breakpoints: 1024px (tablet), 768px (mobile), 480px (small mobile)
- Mobile: columns stack vertically, navigation becomes horizontal

## Component Patterns
- Section cards with white background, border-radius, and box-shadow
- News posts with left border accent and hover effects
- Tags styled as rounded pills with light background
- Buttons with primary/secondary variants and hover animations
- Modal system for full blog post viewing

## Blog Post Requirements
- Title format: "[Date] Source: Title"
- Includes: original article link, one-paragraph summary, IB economics analysis paragraph, up to 3 tags
- Pagination: 5 posts per page, newest to oldest
- "Read More" button opens modal with full content

## JavaScript Architecture
- Main.js: Navigation, contact form, modal, notifications
- Blog.js: Blog post management, pagination, sample data
- Modular pattern with window.ECONews namespace
- Smooth scrolling and active navigation highlighting

## Responsive Design Approach
- Mobile-first media queries
- Navigation transforms from vertical to horizontal on mobile
- Font sizes scale down on smaller screens
- Touch-friendly tap targets (buttons, links)

## File Structure
- index.html: Main structure with semantic HTML5
- css/styles.css: Complete styling with CSS variables
- js/main.js: Core functionality and utilities
- js/blog.js: Blog-specific logic and data

## Areas for Enhancement
- Contact form email should use GitHub repository email
- Blog post titles need strict "[Date] Source: Title" format
- Mobile navigation could use hamburger menu
- Add loading states and error handling
- Improve accessibility (ARIA labels, keyboard navigation)