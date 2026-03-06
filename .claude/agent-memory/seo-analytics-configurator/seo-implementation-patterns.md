# SEO Implementation Patterns for Educational Websites

## Meta Tag Patterns for IB Economics Sites
- Title format: "Site Name - Primary Value Proposition | Secondary Benefit"
- Description: Include "IB Economics", "educational resource", "weekly analysis", target audience
- Keywords: Combine IB-specific terms with economic concepts and educational terms
- Author: Use team name rather than individual for collaborative projects

## Structured Data for Educational Content
- Use `EducationalOrganization` schema for educational websites
- Include `educationalLevel`, `educationalFramework`, `EducationalAudience`
- For blog posts: Use `Article` schema with `educationalAlignment`
- Add `WebSite` schema for overall site structure

## Analytics Configuration for GitHub Pages
- GA4 requires script injection in HTML head
- Use placeholder measurement ID (G-XXXXXXXXXX) for template
- Implement consent management before analytics initialization
- Track educational engagement metrics: post views, time on page, form submissions

## Sitemap Generation Patterns
- Include main page sections with proper priorities (1.0 for homepage, 0.8-0.9 for main sections)
- Use `#` anchors for single-page application sections
- Set appropriate changefreq: weekly for news, monthly for static content
- Include blog post URLs with publication dates

## Robots.txt for GitHub Pages
- Allow all crawlers (`User-agent: *`, `Allow: /`)
- Disallow non-existent admin directories as precaution
- Specify sitemap location
- No crawl delay needed for static hosting

## Open Graph for Educational Content
- Image dimensions: 1200x630 pixels minimum
- Alt text: Describe educational value
- Title: Different from page title, optimized for social sharing
- Description: Engaging, highlights educational benefit

## Cookie Consent Implementation
- Show banner after 2-second delay
- Store choice in localStorage
- Respect choice for analytics initialization
- Provide easy access to privacy policy and cookie settings

## Footer SEO Patterns
- Include privacy policy and cookie settings links
- Add humans.txt and sitemap.xml links
- Include SEO description paragraph
- Use semantic HTML structure