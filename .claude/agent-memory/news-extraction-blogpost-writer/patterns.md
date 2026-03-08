# News Search and Selection Patterns

## Effective Sources by Topic
- **Environmental economics**: BBC, Reuters, CNN, New York Times
- **Trade policies**: Reuters, BBC
- **Fiscal policy**: Reuters, BBC, CNN
- **Monetary policy**: Reuters, BBC, New York Times
- **Social policy/Income redistribution**: Carnegie Endowment, Roosevelt Institute, reputable think tanks

## Common IB Syllabus Connections in Current News
1. **Carbon taxes**: Market failure (negative externalities), Pigouvian taxes, government intervention
2. **Trade policies**: Comparative advantage, tariffs, protectionism, international trade
3. **Fiscal policy**: Government spending, taxation, multiplier effect, automatic stabilizers
4. **Monetary policy**: Interest rates, inflation, central banks, AD/AS models
5. **Income redistribution**: Equity vs. efficiency, transfer payments, social safety nets, poverty

## Article Selection Criteria (Weighted)
1. **Syllabus Relevance (40%)**: Clear connection to IB Economics topics
2. **Clarity & Accessibility (25%)**: Understandable for IB students
3. **Detail & Depth (25%)**: Sufficient evidence and examples
4. **Timeliness (10%)**: Within 180 days

## Geographic Coverage Patterns
- European carbon policies frequently covered (EU ETS, CBAM)
- North American climate policies (Canada carbon tax, US positions)
- Asian emerging policies (Thailand, India responses to EU CBAM)
- US social policy and welfare programs frequently analyzed

## Recurring Economic Concepts
- Pigouvian taxes for negative externalities
- Carbon Border Adjustment Mechanism (CBAM) as trade policy
- Emissions Trading Systems (ETS) as market-based solutions
- Competitiveness concerns vs. environmental goals
- Equity vs. efficiency trade-offs in social policy
- Transfer payments as fiscal policy tools

## News Search Insights
1. **Exa Search Limitations**: The Exa MCP tool has rate limits for free usage. When encountering rate limits, need to be selective about search queries and prioritize the most relevant articles.

2. **Article Source Selection**:
   - Carnegie Endowment for International Peace is a reputable source for policy analysis
   - Roosevelt Institute provides detailed policy impact analysis
   - Need to verify article accessibility with curl commands before selection
   - Some sources (CNBC, The Daily Economy) may have access restrictions

3. **URL Verification Protocol**:
   - Always check article URLs with `curl -s -I` to verify accessibility
   - Look for HTTP 200 status codes
   - Extract titles with `curl -s | grep -o '<title>[^<]*</title>'`

## Blog Post Format Adjustments
1. **Word Count Management**:
   - News Summary should be under 300 words (target ~200)
   - IB Economics Analysis should be under 300 words (target ~280)
   - Need to edit down content to meet word limits

2. **Structure Refinements**:
   - Remove "Word Count" footer from posts
   - Limit tags to maximum 3 relevant economic topics
   - Ensure proper YAML frontmatter formatting
   - Use consistent section headings

3. **Educational Content Focus**:
   - Explicitly reference IB syllabus unit numbers
   - Connect theories to real-world examples from articles
   - Provide evaluation points for student analysis
   - Suggest Internal Assessment (IA) topics