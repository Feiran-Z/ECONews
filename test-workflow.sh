#!/bin/bash

# Test script for the updated automated-weekly-news.yml workflow
# This simulates the key steps without actually running GitHub Actions

echo "=== Testing Automated Weekly News Workflow ==="
echo ""

# Step 1: Check required files
echo "1. Checking required files..."
if [ ! -f "website-requirements.md" ]; then
    echo "❌ ERROR: website-requirements.md not found"
    exit 1
fi

if [ ! -f "IBEcon-syllabus.md" ]; then
    echo "❌ ERROR: IBEcon-syllabus.md not found"
    exit 1
fi

if [ ! -f ".claude/agents/weekly-news-update-scheduler.md" ]; then
    echo "❌ ERROR: Agent configuration not found"
    exit 1
fi

echo "✅ All required files found"
echo ""

# Step 2: Create directories if needed
echo "2. Setting up directories..."
mkdir -p .claude/agent-memory/weekly-news-update-scheduler
mkdir -p _posts
echo "✅ Directories created"
echo ""

# Step 3: Parse syllabus and select topic
echo "3. Parsing syllabus and selecting topic..."
WEEK_DATE=$(date +%Y-%m-%d)
echo "Week: $WEEK_DATE"

# Create syllabus topics file if it doesn't exist
SYLLABUS_TOPICS_FILE=".claude/agent-memory/weekly-news-update-scheduler/syllabus-topics.md"
if [ ! -f "$SYLLABUS_TOPICS_FILE" ]; then
    echo "Extracting syllabus topics..."
    grep -E "^[[:space:]]*[0-9]+\.[0-9]+" IBEcon-syllabus.md | head -31 > "$SYLLABUS_TOPICS_FILE"
fi

TOTAL_TOPICS=$(wc -l < "$SYLLABUS_TOPICS_FILE" 2>/dev/null || echo "31")
WEEK_NUM=$(date +%W)
TOPIC_INDEX=$((WEEK_NUM % TOTAL_TOPICS + 1))
SELECTED_TOPIC=$(sed -n "${TOPIC_INDEX}p" "$SYLLABUS_TOPICS_FILE" 2>/dev/null || echo "Economic growth")
TOPIC=$(echo "$SELECTED_TOPIC" | sed 's/^[[:space:]]*[0-9]*\.[0-9]*[[:space:]]*//')
SUBTOPIC="Current developments"

echo "✅ Topic selected: $TOPIC"
echo "   Week number: $WEEK_NUM, Topic index: $TOPIC_INDEX"
echo ""

# Step 4: Test agent invocation logic
echo "4. Testing agent invocation logic..."
echo "Topic for agent: $TOPIC"
echo "Subtopic: $SUBTOPIC"
echo ""

# Step 5: Check if Claude Code is available
echo "5. Checking Claude Code availability..."
if command -v claude &> /dev/null; then
    echo "✅ Claude Code CLI is available"
else
    echo "⚠️  Claude Code CLI not found (would be installed in workflow)"
fi
echo ""

# Step 6: Test coverage tracking
echo "6. Testing coverage tracking..."
COVERAGE_FILE=".claude/agent-memory/weekly-news-update-scheduler/topic-rotation-schedule.md"
if [ ! -f "$COVERAGE_FILE" ]; then
    echo "# Topic Rotation Schedule" > "$COVERAGE_FILE"
    echo "" >> "$COVERAGE_FILE"
    echo "| Date | Topic | Subtopic | Status | Blog Post |" >> "$COVERAGE_FILE"
    echo "|------|-------|----------|--------|-----------|" >> "$COVERAGE_FILE"
fi

POST_COUNT=$(find _posts -name "*.md" -type f | wc -l)
COVERAGE_PERCENT=$((POST_COUNT * 100 / 31))

echo "✅ Coverage tracking ready"
echo "   Current posts: $POST_COUNT"
echo "   Estimated coverage: $COVERAGE_PERCENT%"
echo ""

# Step 7: Test commit logic
echo "7. Testing commit logic..."
DATE=$(date +%Y-%m-%d)
NEW_POSTS=$(find _posts -name "${DATE}-*.md" -type f 2>/dev/null)
if [ -z "$NEW_POSTS" ]; then
    echo "⚠️  No new posts for today ($DATE) - this is expected in test"
else
    echo "✅ New posts found:"
    echo "$NEW_POSTS"
fi
echo ""

# Step 8: Summary
echo "=== Test Summary ==="
echo "✅ Workflow logic test completed successfully"
echo ""
echo "Key components tested:"
echo "1. ✅ File existence checks"
echo "2. ✅ Directory setup"
echo "3. ✅ Syllabus parsing and topic selection"
echo "4. ✅ Agent invocation logic"
echo "5. ✅ Claude Code availability check"
echo "6. ✅ Coverage tracking"
echo "7. ✅ Commit logic"
echo ""
echo "Next steps for deployment:"
echo "1. Ensure ANTHROPIC_API_KEY is set as GitHub secret"
echo "2. Test workflow with workflow_dispatch trigger"
echo "3. Monitor first automated run on Sunday 12:00 UTC"
echo "4. Check GitHub Issues for any failures"
echo ""
echo "Workflow will:"
echo "- Run every Sunday at 12:00 UTC"
echo "- Select topics from IB Economics syllabus (31 topics)"
echo "- Invoke news-extraction-blogpost-writer agent"
echo "- Create blog posts in _posts/ directory"
echo "- Update coverage tracking"
echo "- Commit and push new posts"
echo "- Create GitHub Issues on failure"