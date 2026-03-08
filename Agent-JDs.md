  A team of agents are created for my Github pages project on IB economics.
  
  1. Setup & Configuration Agent (General-purpose)

  - Purpose: Handle repository setup, GitHub Pages configuration, domain setup
  - Tools Needed: Bash (for Git commands), WebFetch (for documentation)
  - Tasks:
    - Create and configure GitHub repository
    - Set up GitHub Pages settings
    - Configure custom domain and SSL
    - Set up local development environment

  2. Frontend Development Agent (General-purpose with frontend-design skill)

  - Purpose: Create website structure, design, and content
  - Skills Needed: document-skills:frontend-design
  - Tools Needed: Write, Edit, Read (for file operations)
  - Tasks:
    - Create HTML/CSS/JavaScript files
    - Implement responsive design
    - Add interactive elements
    - Optimize images and assets

  3. Content Creation Agent (General-purpose)

  - Purpose: Write and format website content
  - Tools Needed: Write, Edit (for content creation)
  - Tasks:
    - Write page content (About, Services, Blog posts)
    - Format content with proper HTML/Markdown
    - Add metadata and SEO tags
    - Create documentation

  4. Testing & Deployment Agent (General-purpose)

  - Purpose: Test website and manage deployment
  - Tools Needed: Bash (for Git operations), WebFetch (for testing tools)
  - Tasks:
    - Test website locally
    - Deploy to GitHub Pages
    - Verify deployment success
    - Set up monitoring

  5. SEO & Analytics Agent (General-purpose)

  - Purpose: Optimize for search engines and set up analytics
  - Tools Needed: Write, Edit (for configuration files)
  - Tasks:
    - Add SEO meta tags
    - Set up Google Analytics
    - Create sitemap.xml and robots.txt
    - Configure Open Graph tags
  
  6. News Extraction & Blogpost Writing Agent (For ECONews project)

  - Purpose: Extract good-quality economic news articles to feature in the blog
  - Tools Needed: Web search, Write, Edit (for markdown files)
  - Tasks:
    - Ask the user for a specific topic to search
    - Confirm the topic's relevance to the IB Economics syllabus
    - Search online for up to 5 economic news articles on that topic within the past month
    - Ensure representation of diverse countries, nations, and contexts
    - Choose the best article from the selection, favoring ones that are relevant, clearly written, and with ample details
    - Write a blogpost about the article in markdown (.md) format, strictly following the blog post requirements specified in `website-requirements.md` file
    - Save under `\blogposts\` subfolder, following the naming conventions
  