# News Extraction & Blogpost Writer Memory

## News Search Patterns
- Use mcp__exa__web_search_exa with livecrawl: "preferred" for recent news
- Search within 180 days (6 months) for recent articles
- Prioritize reputable sources: BBC, Reuters, CNN, New York Times
- Avoid The Economist, World Bank/IMF reports, academic journals

## IB Economics Syllabus Connections
- Carbon tax relates to: Market failure (negative externalities), Government intervention (Pigouvian taxes), Environmental economics, International trade (CBAM)
- Anti-dumping tariffs relate to: Unit 4.2 (Types of trade protection), Unit 4.3 (Arguments for/against trade protection), Unit 4.4 (WTO rules), Unit 2.5 (Elasticity of demand)
- Check IBEcon-syllabus.md for specific topic references

## Blog Post Format Requirements (from website-requirements.md)
- **File naming**: `YYYY-MM-DD-title-slug.md` (e.g., `2026-03-06-central-banks-inflation.md`)
- **Save location**: `_posts/` directory (not ECONews/blogposts/)
- **Frontmatter requirements**:
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
  ---
  ```
- **Content structure**:
  1. `**Original Article:** [Article Title](URL)`
  2. `## News Summary` (max 300 words, objective summary)
  3. `## IB Economics Connections` (max 300 words, syllabus connections)
  4. `## Tags` (max 3 tags with relevant economic topics/theories)
- **Educational standards**: Target IB Economics students (16-19), academic but accessible language, professional tone

## Important Notes from Sample Post
- The sample post has a different structure than specified in website-requirements.md
- Sample post includes detailed analysis with bullet points and subheadings
- Sample post includes word count at the end
- Need to verify which format to follow: the simpler website-requirements.md format or the more detailed sample post format

## Format Decision
- Based on user's instruction to follow "exact requirements in website-requirements.md", use the simpler format
- The sample post appears to be an older template
- Follow website-requirements.md structure: Summary (max 300 words), IB Economics Analysis (max 300 words), Tags section

## Format Clarification from Recent Posts
- Recent posts (2026-03-09-structural-unemployment.md) follow the simpler format: Summary, IB Economics Analysis, Tags
- This matches website-requirements.md specifications
- Use this consistent format for all new posts

## File Management
- Check existing posts in `_posts/` directory to avoid duplication
- Use absolute paths for file operations
- Verify blog post structure against requirements before saving
- Ensure proper YAML frontmatter formatting

## Recent Experience with Anti-Dumping Tariffs
- Found excellent Reuters article about China-Canada canola anti-dumping case (Feb 28, 2026)
- Article demonstrates multiple IB Economics concepts: trade protection, WTO rules, elasticity, political economy
- Good example of how diplomatic relations influence trade policy
- Real-world case shows the procedural nature of anti-dumping investigations (17-month process)
- Effective for teaching about the balance between free trade and fair trade

## Recent Experience with Structural Unemployment
- Found Reuters article about Fed warning on AI-driven structural unemployment (Feb 24, 2026)
- Article demonstrates clear IB Economics connections: types of unemployment, limitations of monetary policy, supply-side policies
- Good example of how technological change creates structural unemployment
- Shows the distinction between cyclical and structural unemployment
- Effective for teaching about natural rate of unemployment and policy limitations

## Search Strategy Refinement
- When searching for specific economic topics, include both general terms and specific examples
- "anti-dumping tariffs" plus "recent cases" plus "WTO" yields better results
- "structural unemployment" plus "AI" plus "Federal Reserve" yields relevant articles
- Reuters and BBC provide high-quality economic reporting with clear educational value
- Look for articles that show both the economic mechanism and real-world implementation