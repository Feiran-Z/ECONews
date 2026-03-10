# Automated Weekly News Workflow

This document describes the automated weekly news update system for the ECONews website.

## Overview

The automated weekly news workflow is a GitHub Actions workflow that runs every Sunday at 12:00 UTC to:
1. Select an economic topic from the IB Economics syllabus
2. Invoke the `news-extraction-blogpost-writer` agent to find recent news articles
3. Create a properly formatted blog post in the `_posts/` directory
4. Update coverage tracking and performance metrics
5. Commit and push the new blog post to the repository

## Workflow File

Location: `.github/workflows/automated-weekly-news.yml`

## Schedule

- **Frequency**: Every Sunday at 12:00 UTC
- **Manual Trigger**: Available via GitHub Actions UI (workflow_dispatch)
- **Timeout**: 10 minutes per run

## Key Components

### 1. Topic Selection System

The workflow selects topics from the IB Economics syllabus using a systematic rotation:

1. **Syllabus Parsing**: Extracts 31 main topics from `IBEcon-syllabus.md`
2. **Topic Rotation**: Uses week number modulo total topics to ensure even coverage
3. **Coverage Tracking**: Maintains history in `.claude/agent-memory/weekly-news-update-scheduler/topic-rotation-schedule.md`
4. **Fallback Topics**: Has evergreen economic topics as backup if primary topic fails

### 2. Agent Invocation

The workflow invokes the `news-extraction-blogpost-writer` agent with the selected topic:

```bash
claude agent --subagent-type news-extraction-blogpost-writer \
  --description "Weekly news update: [TOPIC]" \
  --prompt "Search for recent news articles about '[TOPIC]' and create a blog post..."
```

The agent:
- Searches for recent news articles (within past 3 months)
- Selects the best article based on syllabus relevance and educational value
- Creates a blog post following `website-requirements.md` exactly
- Saves the post in `_posts/` with proper naming (`YYYY-MM-DD-title-slug.md`)

### 3. Quality Assurance

- **Format Verification**: Checks blog post follows `website-requirements.md`
- **Educational Value**: Ensures explicit IB Economics syllabus connections
- **Source Verification**: Uses reputable news sources (Reuters, BBC, CNN, NY Times)
- **Content Standards**: 300-word news summary, 300-word IB analysis, max 3 tags

### 4. Error Handling

The workflow includes comprehensive error handling:

1. **Search Failures**: Tries alternative topics if no suitable articles found
2. **Agent Failures**: Creates GitHub Issues with detailed error information
3. **Formatting Issues**: Validates blog post structure before committing
4. **API Issues**: Handles Claude API timeouts and rate limits

## Required Secrets

The workflow requires these GitHub Secrets:

| Secret | Description | Default |
|--------|-------------|---------|
| `ANTHROPIC_API_KEY` | Claude API key for agent execution | Required |
| `ANTHROPIC_BASE_URL` | Claude API base URL | `https://api.anthropic.com` |
| `ANTHROPIC_MODEL` | Primary Claude model | `claude-3-5-sonnet-20241022` |
| `ANTHROPIC_SMALL_FAST_MODEL` | Fast model for simple tasks | `claude-3-haiku-20240307` |

## Memory System

The workflow maintains persistent memory in `.claude/agent-memory/weekly-news-update-scheduler/`:

### Core Memory Files

1. **MEMORY.md** - System status and performance summary
2. **topic-rotation-schedule.md** - Weekly topic coverage tracking
3. **syllabus-topics.md** - Extracted IB Economics topics
4. **performance-metrics.md** - Success rates and quality scores

### Coverage Tracking

The system tracks:
- Which IB Economics topics have been covered
- Success/failure rates for each topic
- Geographic and conceptual diversity
- Educational value assessments

## Performance Metrics

| Metric | Target | Description |
|--------|--------|-------------|
| Success Rate | >90% | Weekly post creation success |
| Coverage Rate | 100% | IB syllabus topics covered |
| Quality Score | High | Adherence to requirements |
| Timeliness | Sunday | Post creation schedule |
| Diversity | Balanced | Topic and geographic coverage |

## Testing

### Local Testing

Run the test script to verify workflow logic:

```bash
./test-workflow.sh
```

### Manual Testing

1. Go to GitHub Actions → "Automated Weekly News Update"
2. Click "Run workflow"
3. Select "main" branch
4. Monitor execution and check results

### Integration Testing

The workflow includes:
- File existence checks
- Directory validation
- Agent configuration verification
- Claude Code CLI availability check

## Monitoring

### Success Indicators

1. **New Blog Post**: Check `_posts/` directory for new `YYYY-MM-DD-*.md` files
2. **Coverage Update**: Verify `.claude/agent-memory/weekly-news-update-scheduler/topic-rotation-schedule.md`
3. **Git Commit**: New commit with "Weekly news update: [TOPIC]" message
4. **Workflow Status**: Green checkmark in GitHub Actions

### Failure Indicators

1. **GitHub Issue**: Automatic issue creation for failures
2. **Workflow Failure**: Red X in GitHub Actions
3. **Missing Posts**: No new files in `_posts/` directory
4. **Error Logs**: Detailed error information in workflow run

## Fallback Strategy

If the primary topic fails, the system has evergreen fallback topics:

1. Inflation trends and central bank policies
2. International trade developments
3. Labor market and unemployment data
4. Government fiscal policies and budgets
5. Environmental economics and carbon pricing

## Maintenance

### Regular Tasks

1. **Monthly**: Review coverage tracking and adjust topic selection
2. **Quarterly**: Update news source effectiveness tracking
3. **Annually**: Check for IB syllabus updates
4. **As Needed**: Update agent configurations and requirements

### Troubleshooting

Common issues and solutions:

| Issue | Solution |
|-------|----------|
| No suitable articles found | Try alternative topic or broaden search |
| Agent timeout | Increase timeout or simplify search |
| Formatting errors | Check `website-requirements.md` updates |
| API rate limits | Check Claude API usage and limits |
| Missing secrets | Verify GitHub Secrets configuration |

## Integration with ECONews Website

The workflow integrates with the ECONews website by:

1. **Automatic Content Creation**: Weekly blog posts without manual intervention
2. **Syllabus Alignment**: Systematic coverage of IB Economics topics
3. **Quality Standards**: Adherence to `website-requirements.md`
4. **Educational Focus**: IB Economics connections and analysis
5. **Consistent Formatting**: Proper frontmatter and structure

## Deployment Checklist

Before enabling the automated workflow:

- [ ] Set up GitHub Secrets (`ANTHROPIC_API_KEY` required)
- [ ] Test manual workflow execution
- [ ] Verify blog post formatting
- [ ] Check coverage tracking initialization
- [ ] Review error handling and issue creation
- [ ] Monitor first automated run
- [ ] Set up notifications for failures

## Support

For issues with the automated workflow:

1. Check GitHub Issues for automatic failure reports
2. Review workflow run logs for detailed error information
3. Verify agent configurations in `.claude/agents/`
4. Check `website-requirements.md` for formatting updates
5. Test with manual workflow dispatch

---

*Last Updated: March 10, 2026*
*Version: 2.0 (Replaced placeholder implementation with real agent invocation)*