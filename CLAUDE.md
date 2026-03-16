# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a GitHub Pages project for an Economics news website, managed by a team of specialized agents. The project uses a multi-agent architecture where each agent handles specific aspects of website development and deployment.

Detailed requirements of the website is contained in the file `website-requirements.md`. Always check this file to ensure alignment with the set requirements.

## Agent Architecture

The project uses seven specialized agents, each with specific responsibilities:

1. **github-pages-setup-configurator** - Repository setup, GitHub Pages configuration, domain setup, SSL configuration, and local development environment setup
2. **frontend-website-builder** - Frontend development, responsive design, interactive elements, and asset optimization
3. **content-creation-agent** - Content writing, formatting, metadata, and SEO tags
4. **website-test-deploy** - Local testing, deployment to GitHub Pages, verification, and monitoring
5. **seo-analytics-configurator** - SEO optimization, analytics tracking, and search engine configuration
6. **news-extraction-blogpost-writer** - Extract best news article and write a blogpost about it
7. **weekly-news-update-scheduler** - Choose topic and subtopic to be covered next based on past coverages and other metrics

## Agent Configuration

Agent configurations are stored in `.claude/agents/` directory as Markdown files. Each agent has:
- A detailed description of its purpose and use cases
- Operational guidelines and best practices
- Persistent memory stored in `.claude/agent-memory/[agent-name]/`

## Agent Memory System

Each agent maintains its own memory directory at `.claude/agent-memory/[agent-name]/`:
- `MEMORY.md` is automatically loaded into the agent's system prompt (truncated after 200 lines)
- Additional topic files can be created for detailed notes
- Memories persist across conversations and build institutional knowledge

## Common Development Tasks

### Working with Agents
- Use the Agent tool with appropriate `subagent_type` to delegate tasks to specialized agents
- Agents should be used for their specific domains rather than handling tasks directly
- When an agent completes its work, it returns results that should be summarized for the user

### Agent Memory Management
- Agents automatically save patterns and conventions to their memory files
- Check agent memory directories for existing knowledge before starting new tasks
- Update agent memories when discovering new patterns or solutions

### Project Structure
- Main project documentation: `Agent-JDs.md` contains agent job descriptions and responsibilities
- Agent configurations: `.claude/agents/*.md`
- Agent memories: `.claude/agent-memory/[agent-name]/*`

## Agent Coordination

When working on multi-agent tasks:
1. Start with the setup agent for repository and infrastructure configuration
2. Use the frontend builder for website structure and design
3. Engage the content agent for text and metadata
4. Use the SEO agent for optimization and analytics
5. Deploy with the test/deploy agent
6. Use news extraction and blogpost writer agent to search for news articles and write posts about them
7. Use weekly news update scheduler agent to choose and schedule next topic and subtopic to be covered

Each agent is designed to work independently but can be coordinated for complex workflows.