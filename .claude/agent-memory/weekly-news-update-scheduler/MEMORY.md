# Weekly News Update Scheduler Memory

## System Status
- **Initial Setup**: Agent configuration created on 2026-03-08
- **GitHub Actions**: Workflow not yet created
- **Memory Structure**: Directory created with initial files
- **Topic Rotation**: Syllabus parsed, 31 main topics identified
- **Current Coverage**: 0% (no automated posts yet)

## IB Economics Syllabus Coverage
- **Total Topics**: 31 main topics across 4 units
- **Unit 1**: Introduction to Economics (2 topics)
- **Unit 2**: Microeconomics (12 topics)
- **Unit 3**: Macroeconomics (7 topics)
- **Unit 4**: Global Economy (10 topics)
- **Coverage Goal**: 100% syllabus coverage over 31+ weeks

## Performance Metrics (Initial Targets)
- **Success Rate Target**: >90% weekly post creation
- **Quality Standard**: Adherence to website-requirements.md
- **Timeliness Target**: Sunday completion each week
- **Diversity Goal**: Balanced coverage across all 4 units

## Key Files and Paths
- **Agent Config**: `.claude/agents/weekly-news-update-scheduler.md`
- **Memory Directory**: `.claude/agent-memory/weekly-news-update-scheduler/`
- **Syllabus Reference**: `IBEcon-syllabus.md`
- **Requirements**: `website-requirements.md`
- **Posts Directory**: `_posts/`
- **GitHub Actions**: `.github/workflows/weekly-news-update.yml` (to be created)

## Operational Patterns
- **Schedule**: Sunday 12:00 UTC via GitHub Actions
- **Topic Selection**: Least covered + current relevance
- **Agent Integration**: Invokes news-extraction-blogpost-writer
- **Fallback Strategy**: Evergreen economic topics
- **Error Handling**: Categorized with specific recovery actions

## Integration Notes
- **News Extraction Agent**: Uses mcp__exa__web_search_exa for news search
- **Blog Post Format**: Follows website-requirements.md exactly
- **File Naming**: YYYY-MM-DD-title-slug.md in _posts/
- **Frontmatter**: Requires layout, title, date, author, original_url, tags

## Topic Selection Strategy
1. **Primary**: Least covered topics from syllabus
2. **Secondary**: Current economic relevance
3. **Tertiary**: Seasonal economic events
4. **Quaternary**: Complementary to previous week

## Evergreen Fallback Topics
1. Inflation trends and central bank policies
2. International trade developments
3. Labor market and unemployment data
4. Government fiscal policies and budgets
5. Environmental economics and carbon pricing

## Error Categories
1. **Search Failures**: No suitable articles found
2. **Quality Failures**: Articles don't meet standards
3. **Technical Failures**: API limits, network issues
4. **Formatting Failures**: Blog post structure issues

## Next Implementation Steps
1. Create GitHub Actions workflow file
2. Build topic rotation schedule memory file
3. Implement performance tracking system
4. Test end-to-end execution
5. Deploy and monitor initial runs

## Memory File Structure
- `topic-rotation-schedule.md`: Weekly topic coverage tracking
- `performance-metrics.md`: Success rates and quality scores
- `error-patterns.md`: Failure analysis and solutions
- `source-effectiveness.md`: News source performance
- `syllabus-coverage.md`: Detailed topic coverage