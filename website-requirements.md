# ECONews Website Requirements

## Overview
ECONews is an IB Economics companion website designed to bridge the gap between current economic events and the International Baccalaureate (IB) Economics syllabus. The website provides weekly analysis of economic news using IB Economics frameworks and methodologies.

## Core Purpose
- Connect real-world economic events to IB Economics syllabus topics
- Provide educational content for IB Economics students and educators
- Develop critical thinking and analysis skills through current events
- Prepare students for IB Economics assessments and internal assessments

## Website Structure

### 1. Layout & Design
- Two-column layout with fixed right navigation
- Responsive design for all devices (desktop, tablet, mobile)
- Modern, clean aesthetic appropriate for educational content
- Consistent color scheme with burgundy (#880112) as primary color
- Professional typography using Manrope and Inter font families

### 2. Navigation Structure
- **Home**: Featured news articles and website introduction
- **About**: Detailed information about ECONews mission and methodology
- **Selected News**: Complete archive of news analysis articles
- **Contact**: Contact information and submission guidelines

### 3. Content Pages

#### Home Page (`index.md`)
- Hero section with website introduction
- Featured news articles (latest 4 posts)
- About preview section
- Clear calls to action

#### About Page (`about.md`)
- Mission statement and educational philosophy
- Methodology for news selection and analysis
- Syllabus coverage overview
- Team information
- Educational value proposition

#### Selected News Page (`news.md`)
- Paginated list of all news analysis articles
- Article previews with titles, dates, excerpts, and tags
- Search and filter functionality (future enhancement)
- Clear navigation between pages

#### Contact Page (`contact.md`)
- Contact methods (email, GitHub)
- Content submission guidelines
- Audience-specific information (students, teachers, contributors)
- Response time expectations
- Privacy information

### 4. Blog Post System

#### Post Layout (`_layouts/post.html`)
- Consistent article structure
- Metadata display (date, author, reading time)
- Content formatting with proper typography
- Tag display and organization
- Navigation to related content
- Share functionality

#### Individual Post Files (`_posts/`)
- Markdown format with YAML frontmatter
- Consistent naming convention: `YYYY-MM-DD-title-slug.md`
- Proper metadata including title, date, author, tags, original_url
- Structured content with clear sections

## Blog Post Requirements

### File Naming Convention
- Format: `YYYY-MM-DD-title-slug.md`
- Example: `2026-03-06-central-banks-inflation.md`
- Save in `_posts/` directory

### Frontmatter Requirements
```yaml
---
layout: post
title: "[YYYY-MM-DD] News Source: News Title"
date: YYYY-MM-DD
author: ECONews Team
original_url: https://example.com/original-article-url
tags:
  - tag1
  - tag2
  - tag3
  - tag4
  - tag5
---
```

### Content Structure
```
**Original Article:** [Article Title](URL)

## News Summary

[One paragraph, maximum 300 words. Summarize the main economic issue, event, and/or policy discussed in the article.]

## IB Economics Analysis

[One paragraph, maximum 300 words. Suggest relevant IB economics theories and frameworks to analyze and evaluate the main economic event/policy/issue presented in the article.]

## Tags
[At most 5 tags featuring the most relevant economic topics or theories.]
```

### Content Guidelines
1. **News Summary**:
   - Maximum 300 words
   - Objective summary of the news article
   - Focus on key economic facts and events
   - Avoid editorializing or personal opinions

2. **IB Economics Connections**:
   - Maximum 300 words
   - Explicit connections to IB Economics syllabus topics
   - Reference specific theories and frameworks
   - Include evaluation perspectives for critical thinking

3. **Tags**:
   - Maximum 4 tags per article
   - Use standard economic terminology
   - Focus on most relevant economic concepts or theories
   - `tag1` must be the most directly relevant unit (e.g. "Macroeconomics")
   - `tag2` must be the most directly relevant topic in that unit (e.g. "Fiscal policy")
   - The remaining tags can be additional relevant topics from that unit or from other units
   - Examples: Macroeconomics, Fiscal policy, Economic growth, Keynesian Multiplier, Human capital

### Educational Standards
- Target audience: IB Economics students (ages 16-19)
- Language level: Academic but accessible
- Tone: Professional, educational, objective
- Purpose: Bridge classroom theory and real-world events

## Technical Requirements

### 1. Jekyll Configuration
- GitHub Pages compatible Jekyll setup
- Proper `_config.yml` with site metadata
- Gemfile with required dependencies
- GitHub Actions workflow for deployment

### 2. Design System
- CSS variables for consistent theming
- Responsive breakpoints: 1024px, 768px, 480px
- Dark mode support via prefers-color-scheme
- Accessibility features (ARIA labels, focus states)
- Print styles for educational use

### 3. Performance
- Optimized images and assets
- Efficient CSS and JavaScript
- Fast loading times
- Mobile-friendly performance

### 4. Accessibility
- Semantic HTML structure
- Proper heading hierarchy
- ARIA labels for interactive elements
- Keyboard navigation support
- Screen reader compatibility

## Content Management

### 1. News Selection Criteria
- **Relevance**: Clear connection to IB Economics syllabus
- **Timeliness**: Recent articles (within past month preferred)
- **Significance**: Important economic developments
- **Clarity**: Well-written and understandable
- **Diversity**: Range of economic perspectives and regions

### 2. Analysis Methodology
1. **Identify Syllabus Connections**: Map article content to specific IB topics
2. **Suggest Analytical Frameworks**: Suggest economic theories and models for article analysis
3. **Develop Critical Perspectives**: Suggest evaluation points, examining strengths, limitations, impacts, effectiveness, and/or side-effects
4. **Create Learning Opportunities**: Design questions for student reflection

### 3. Quality Assurance
- Fact-check all information
- Verify original article URLs
- Review for educational value
- Ensure proper formatting
- Test all links and functionality

## Future Enhancements
1. **Search Functionality**: Full-text search of articles
2. **Topic Filtering**: Filter by syllabus topics or economic concepts
3. **Newsletter Subscription**: Email updates for new content
4. **Teacher Resources**: Lesson plans and classroom activities
5. **Student Forum**: Discussion platform for economic topics
6. **Interactive Elements**: Economic models and data visualizations

## Maintenance
- Weekly content updates
- Regular design reviews
- Performance monitoring
- Accessibility audits
- Security updates

## Success Metrics
- **Educational Value**: Quality of syllabus connections and analysis
- **Usability**: Ease of navigation and content discovery
- **Engagement**: Time on page and content interaction
- **Accessibility**: Compliance with WCAG guidelines
- **Performance**: Page load times and mobile responsiveness

---

*Last Updated: March 6, 2026*
*Version: 1.0*