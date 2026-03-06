# Website Testing & Deployment Memory

## Project Overview
- ECONews: IB Economics companion website
- GitHub Pages deployment: https://Feiran-Z.github.io/ECONews/
- Two-column layout with fixed right navigation
- Blog post system with pagination (5 posts per page)
- Contact form with validation
- SEO optimized with robots.txt and sitemap.xml
- Analytics and cookie consent system

## Testing Patterns
1. **Local Testing**: Use Python HTTP server on port 8080 for local testing
2. **Structure Verification**: Check two-column layout, fixed navigation, scrollable content
3. **Blog System**: Verify 5 posts per page, pagination, modal functionality
4. **Contact Form**: Test validation and submission handling
5. **Responsive Design**: Test across viewport sizes
6. **SEO Files**: Verify robots.txt and sitemap.xml accessibility
7. **JavaScript**: Check for console errors and functionality

## Deployment Workflow
1. **Pre-deployment**: Test locally, verify all requirements
2. **GitHub Pages**: Deploy from main/master branch
3. **Configuration**: Ensure proper base URL in sitemap.xml and robots.txt
4. **Verification**: Check live site matches local version
5. **Monitoring**: Set up basic uptime monitoring

## Common Issues & Solutions
- **Local Server**: Use `python3 -m http.server 8080` in project directory
- **CORS**: No issues with static files on local server
- **Relative Paths**: Ensure all asset paths work on GitHub Pages
- **Base URL**: Update sitemap.xml and robots.txt with correct GitHub Pages URL

## GitHub Pages Specifics
- Repository: https://github.com/Feiran-Z/ECONews
- Live URL: https://Feiran-Z.github.io/ECONews/
- Branch: Typically main/master for GitHub Pages
- Configuration: No special config needed for static HTML/CSS/JS

## Monitoring Recommendations
- UptimeRobot for basic uptime monitoring
- Google Analytics 4 for traffic analysis
- Console error monitoring via browser dev tools
- Regular content updates for blog posts