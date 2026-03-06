# ECONews - IB Economics Companion Website

A Jekyll-based website for analyzing current economic news through the lens of IB Economics.

## Website URL
[https://Feiran-Z.github.io/ECONews/](https://Feiran-Z.github.io/ECONews/)

## Features

- **Modern Design**: Clean, responsive layout with custom CSS
- **Two-Column Layout**: Navigation on the right, scrollable content on the left
- **Jekyll-Powered**: Dynamic content generation and pagination
- **IB Economics Focus**: Content structured around IB syllabus topics
- **Weekly Updates**: Blog-style news analysis with proper formatting
- **Contact Form**: Easy communication with site visitors
- **SEO Optimized**: Built-in SEO tags and sitemap

## Project Structure

```
ECONews/
├── _config.yml          # Jekyll configuration
├── Gemfile              # Ruby dependencies
├── index.md             # Homepage
├── about.md             # About page
├── news.md              # News listing (paginated)
├── contact.md           # Contact page
├── 404.md              # 404 error page
├── _layouts/           # HTML templates
│   ├── default.html    # Main layout
│   └── post.html       # Blog post layout
├── _includes/          # Reusable components
├── _posts/             # Blog posts (Markdown files)
├── assets/             # Static assets
│   ├── css/           # CSS styles
│   │   └── main.css   # Main stylesheet
│   ├── js/            # JavaScript
│   └── images/        # Images
└── README.md          # This file
```

## Blog Post Format

Each blog post in `_posts/` should follow this format:

```markdown
---
layout: post
title: "[Publication Date] News Source: News Title"
date: YYYY-MM-DD
author: ECONews Team
original_url: https://example.com/article
tags:
  - tag1
  - tag2
  - tag3
---

**Original Article:** [Article Title](URL)

## News Summary
[One-paragraph summary, max 300 words]

## IB Economics Analysis
[Analysis using IB theories/frameworks, max 300 words]
```

## Design Specifications

- **Main Font**: Manrope
- **Alternate Font**: Inter
- **Main Color**: #880112
- **Alternate Colors**: #f8f9fa, #343a40, #6c757d, #e9ecef

## Local Development

1. Install Ruby and Bundler
2. Clone the repository
3. Install dependencies:
   ```bash
   bundle install
   ```
4. Run the development server:
   ```bash
   bundle exec jekyll serve
   ```
5. Open http://localhost:4000/ECONews/

## Deployment

This site is configured for GitHub Pages. Simply push to the `main` branch and GitHub Pages will automatically build and deploy the site.

## Adding New Content

1. Create a new Markdown file in `_posts/` with the naming convention: `YYYY-MM-DD-title.md`
2. Follow the blog post format above
3. Commit and push to GitHub
4. GitHub Pages will automatically rebuild the site

## IB Economics Syllabus Coverage

The site covers all four units of the IB Economics syllabus:
- Unit 1: Introduction to Economics
- Unit 2: Microeconomics
- Unit 3: Macroeconomics
- Unit 4: The Global Economy

## License

This project is open source and available for educational use.