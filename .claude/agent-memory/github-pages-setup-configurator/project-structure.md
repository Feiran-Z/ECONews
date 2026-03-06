# Project Structure Patterns

## Standard Directory Structure
```
project-name/
├── index.html              # Main landing page
├── README.md              # Project documentation
├── .gitignore            # Git ignore patterns
├── css/
│   └── styles.css        # Main stylesheet
├── js/
│   ├── main.js           # Core functionality
│   └── blog.js           # Blog-specific code
├── blogposts/            # Blog post data (JSON/Markdown)
└── images/               # Image assets
```

## HTML Structure Patterns
- Two-column layout using Flexbox
- Semantic HTML5 elements
- Responsive meta tags
- Google Fonts integration
- Font Awesome icons
- Modal for blog post details

## CSS Organization
1. CSS Custom Properties (variables) at top
2. Reset and base styles
3. Layout styles (container, columns)
4. Component styles (sections, cards, forms)
5. Utility classes
6. Responsive media queries

## JavaScript Modules
- `main.js`: Core functionality (navigation, forms, modals)
- `blog.js`: Blog post management and pagination
- Separation of concerns: UI logic vs data management

## Blog Post Data Format
```javascript
{
    id: number,
    title: "[Date] Source: Title",
    date: "Formatted Date",
    source: "Publication Name",
    articleLink: "https://...",
    summary: "One paragraph summary",
    analysis: "IB Economics analysis",
    tags: ["tag1", "tag2", "tag3"]
}
```

## Configuration Constants
- `POSTS_PER_PAGE: 5` (standard requirement)
- Color palette defined as CSS variables
- Font stack defined as CSS variables
- Spacing scale for consistency

## Responsive Breakpoints
- Mobile: < 480px
- Tablet: 481px - 768px
- Desktop: 769px - 1024px
- Large desktop: > 1024px

## File Naming Conventions
- kebab-case for file names
- Descriptive names for clarity
- Consistent extension usage
- No spaces in file names