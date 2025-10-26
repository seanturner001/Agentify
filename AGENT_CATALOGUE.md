# Agentify Agent Catalogue
## Core Agents for MVP Launch

This document defines the AI agents that will be available in the Agentify platform at launch. Each agent is pre-configured with optimized system prompts and parameters for specific tasks.

---

## Agent Categories

1. **Research & Analysis** (3 agents)
2. **Content Creation** (3 agents)
3. **Data Processing** (3 agents)
4. **Communication** (2 agents)
5. **Business & Productivity** (3 agents)
6. **Creative & Media** (2 agents)

**Total: 16 agents for MVP**

---

## 1. Research & Analysis Agents

### 1.1 Research Analyst
**Icon:** 🔍
**Tagline:** "Deep research with citations"
**Category:** Research & Analysis

**Description:**
Conducts comprehensive research on any topic, synthesizes information from multiple sources, and provides well-cited summaries with key insights.

**Capabilities:**
- Multi-source research synthesis
- Citation extraction and formatting
- Key insight identification
- Trend analysis
- Fact verification

**Input Schema:**
```json
{
  "topic": "string (required)",
  "depth": "quick | moderate | deep (optional, default: moderate)",
  "focus_areas": "string[] (optional)",
  "citation_style": "APA | MLA | Chicago (optional)"
}
```

**Output Schema:**
```json
{
  "summary": "string",
  "key_insights": "string[]",
  "detailed_findings": "string",
  "citations": "Citation[]",
  "related_topics": "string[]"
}
```

**Model Configuration:**
- Model: Claude 3.5 Sonnet
- Temperature: 0.3 (factual accuracy)
- Max Tokens: 4000
- Average Cost: ~$0.02 per execution

**System Prompt:**
```
You are a meticulous research analyst. When given a topic:
1. Break it down into key research questions
2. Synthesize information from multiple perspectives
3. Provide balanced, well-cited insights
4. Identify gaps or areas needing more research
5. Always include proper citations

Focus on accuracy, comprehensiveness, and actionable insights.
```

**Use Cases:**
- Market research for business decisions
- Academic research assistance
- Competitive analysis
- Due diligence for investments
- Background research for articles

---

### 1.2 Data Insight Finder
**Icon:** 📊
**Tagline:** "Turn data into decisions"
**Category:** Research & Analysis

**Description:**
Analyzes datasets, spreadsheets, or structured data to identify patterns, trends, and actionable insights. Perfect for business intelligence without coding.

**Capabilities:**
- Statistical analysis
- Trend identification
- Anomaly detection
- Data visualization recommendations
- Predictive insights

**Input Schema:**
```json
{
  "data": "string (CSV, JSON, or natural language description)",
  "analysis_type": "trends | anomalies | predictions | summary",
  "business_context": "string (optional)"
}
```

**Output Schema:**
```json
{
  "summary": "string",
  "key_findings": "Finding[]",
  "trends": "Trend[]",
  "recommendations": "string[]",
  "visualizations_suggested": "string[]"
}
```

**Model Configuration:**
- Model: Claude 3.5 Sonnet
- Temperature: 0.2 (analytical precision)
- Max Tokens: 3000
- Average Cost: ~$0.015 per execution

**Use Cases:**
- Sales data analysis
- Customer behavior insights
- Financial trend analysis
- Marketing campaign performance
- Operational metrics review

---

### 1.3 Fact Checker
**Icon:** ✓
**Tagline:** "Verify claims instantly"
**Category:** Research & Analysis

**Description:**
Verifies factual claims, checks for misinformation, and provides source-backed verification. Essential for content creators and researchers.

**Capabilities:**
- Claim verification
- Source validation
- Misinformation detection
- Context checking
- Confidence scoring

**Input Schema:**
```json
{
  "claims": "string[] (one or more claims to verify)",
  "context": "string (optional background)",
  "require_sources": "boolean (default: true)"
}
```

**Output Schema:**
```json
{
  "verifications": [
    {
      "claim": "string",
      "verdict": "verified | false | misleading | unverifiable",
      "confidence": "number (0-100)",
      "explanation": "string",
      "sources": "string[]"
    }
  ]
}
```

**Model Configuration:**
- Model: Claude 3.5 Sonnet
- Temperature: 0.1 (maximum accuracy)
- Max Tokens: 2500
- Average Cost: ~$0.012 per execution

**Use Cases:**
- Journalism fact-checking
- Social media verification
- Academic citation validation
- Content moderation
- Due diligence

---

## 2. Content Creation Agents

### 2.1 Long-Form Writer
**Icon:** ✍️
**Tagline:** "From outline to article"
**Category:** Content Creation

**Description:**
Creates high-quality long-form content including blog posts, articles, essays, and reports from brief descriptions or outlines.

**Capabilities:**
- Blog post generation (800-2000 words)
- Article writing with proper structure
- SEO optimization
- Tone adaptation (professional, casual, technical)
- Multi-section organization

**Input Schema:**
```json
{
  "topic": "string (required)",
  "outline": "string[] (optional)",
  "target_length": "number (words, optional)",
  "tone": "professional | casual | academic | conversational",
  "seo_keywords": "string[] (optional)",
  "target_audience": "string (optional)"
}
```

**Output Schema:**
```json
{
  "title": "string",
  "subtitle": "string",
  "content": "string (markdown formatted)",
  "word_count": "number",
  "seo_score": "number (if keywords provided)",
  "suggested_images": "string[]"
}
```

**Model Configuration:**
- Model: Claude 3.5 Sonnet
- Temperature: 0.7 (creative but coherent)
- Max Tokens: 4096
- Average Cost: ~$0.025 per execution

**Use Cases:**
- Blog content creation
- Marketing articles
- Educational content
- Company updates
- Thought leadership pieces

---

### 2.2 Social Media Manager
**Icon:** 📱
**Tagline:** "Multi-platform content in seconds"
**Category:** Content Creation

**Description:**
Generates platform-optimized social media posts from a single idea. Creates variations for Twitter, LinkedIn, Instagram, and Facebook.

**Capabilities:**
- Multi-platform content adaptation
- Hashtag generation
- Engagement optimization
- Character limit awareness
- Call-to-action creation

**Input Schema:**
```json
{
  "main_message": "string (required)",
  "platforms": "string[] (twitter, linkedin, instagram, facebook)",
  "tone": "professional | casual | humorous | inspirational",
  "include_hashtags": "boolean (default: true)",
  "call_to_action": "string (optional)"
}
```

**Output Schema:**
```json
{
  "posts": [
    {
      "platform": "string",
      "content": "string",
      "hashtags": "string[]",
      "optimal_time": "string",
      "character_count": "number"
    }
  ],
  "suggested_images": "string[]"
}
```

**Model Configuration:**
- Model: Claude 3 Haiku (fast and cost-effective)
- Temperature: 0.8 (creative and engaging)
- Max Tokens: 1500
- Average Cost: ~$0.003 per execution

**Use Cases:**
- Brand social media
- Personal brand building
- Product launches
- Event promotion
- Community engagement

---

### 2.3 Email Composer
**Icon:** 📧
**Tagline:** "Professional emails, every time"
**Category:** Content Creation

**Description:**
Drafts professional emails for any situation - from cold outreach to customer support, with customizable tone and formality.

**Capabilities:**
- Context-aware email drafting
- Tone customization
- Subject line optimization
- Follow-up sequence creation
- Template generation

**Input Schema:**
```json
{
  "purpose": "string (cold_outreach | follow_up | support | announcement | etc)",
  "recipient_context": "string (who they are)",
  "key_points": "string[] (what to communicate)",
  "tone": "formal | semi-formal | casual",
  "desired_action": "string (what you want them to do)"
}
```

**Output Schema:**
```json
{
  "subject_line": "string",
  "email_body": "string",
  "alternative_subject_lines": "string[]",
  "follow_up_suggestions": "string[]"
}
```

**Model Configuration:**
- Model: Claude 3 Haiku
- Temperature: 0.6 (balanced)
- Max Tokens: 1000
- Average Cost: ~$0.002 per execution

**Use Cases:**
- Sales outreach
- Customer support
- Partnership proposals
- Job applications
- Professional networking

---

## 3. Data Processing Agents

### 3.1 Text Extractor
**Icon:** 📄
**Tagline:** "Unstructured → Structured data"
**Category:** Data Processing

**Description:**
Extracts structured data from unstructured text like emails, documents, receipts, invoices, or conversations.

**Capabilities:**
- Named entity extraction
- Key information identification
- Format standardization
- Multi-document processing
- JSON output generation

**Input Schema:**
```json
{
  "text": "string (required)",
  "extract_fields": "string[] (optional, e.g., 'name', 'date', 'amount')",
  "output_format": "json | csv | markdown (default: json)"
}
```

**Output Schema:**
```json
{
  "extracted_data": "object (key-value pairs)",
  "confidence_scores": "object (field confidence)",
  "raw_matches": "string[]"
}
```

**Model Configuration:**
- Model: Claude 3 Haiku
- Temperature: 0.0 (maximum precision)
- Max Tokens: 2000
- Average Cost: ~$0.004 per execution

**Use Cases:**
- Receipt parsing
- Invoice processing
- Contact extraction from emails
- Form data extraction
- Document digitization

---

### 3.2 Summarizer Pro
**Icon:** 📝
**Tagline:** "Any length → Key points"
**Category:** Data Processing

**Description:**
Condenses long documents, articles, transcripts, or reports into concise summaries with configurable length and focus.

**Capabilities:**
- Multi-format summarization
- Length control (tweet, paragraph, page)
- Key point extraction
- Action item identification
- Meeting note summarization

**Input Schema:**
```json
{
  "content": "string (required)",
  "summary_type": "bullet_points | paragraph | executive | ultra_brief",
  "max_length": "number (words, optional)",
  "focus": "string (optional, e.g., 'action items', 'decisions')"
}
```

**Output Schema:**
```json
{
  "summary": "string",
  "key_points": "string[]",
  "action_items": "string[] (if applicable)",
  "sentiment": "positive | neutral | negative | mixed",
  "word_count": "number"
}
```

**Model Configuration:**
- Model: Claude 3.5 Sonnet
- Temperature: 0.3 (accurate summarization)
- Max Tokens: 2000
- Average Cost: ~$0.01 per execution

**Use Cases:**
- Meeting notes
- Article summarization
- Research paper summaries
- Email thread condensing
- Report executive summaries

---

### 3.3 Translator Pro
**Icon:** 🌍
**Tagline:** "Context-aware translation"
**Category:** Data Processing

**Description:**
Translates text between languages while preserving context, tone, and cultural nuances. Supports 95+ languages.

**Capabilities:**
- Multi-language translation
- Context preservation
- Cultural adaptation
- Formal/informal tone matching
- Idiom translation

**Input Schema:**
```json
{
  "text": "string (required)",
  "source_language": "string (optional, auto-detect if not provided)",
  "target_language": "string (required)",
  "preserve_tone": "boolean (default: true)",
  "context": "string (optional, helps with ambiguity)"
}
```

**Output Schema:**
```json
{
  "translated_text": "string",
  "source_language_detected": "string",
  "confidence": "number (0-100)",
  "cultural_notes": "string[] (if applicable)"
}
```

**Model Configuration:**
- Model: Claude 3.5 Sonnet
- Temperature: 0.2 (accurate translation)
- Max Tokens: 2500
- Average Cost: ~$0.012 per execution

**Use Cases:**
- Business communication
- Content localization
- Customer support
- Document translation
- Social media translation

---

## 4. Communication Agents

### 4.1 Meeting Summarizer
**Icon:** 🎯
**Tagline:** "Transcript → Action items"
**Category:** Communication

**Description:**
Analyzes meeting transcripts or notes to extract key decisions, action items, and next steps with assignee identification.

**Capabilities:**
- Action item extraction
- Decision logging
- Participant tracking
- Timeline identification
- Follow-up generation

**Input Schema:**
```json
{
  "transcript": "string (required)",
  "participants": "string[] (optional)",
  "meeting_type": "standup | planning | review | general"
}
```

**Output Schema:**
```json
{
  "summary": "string",
  "decisions": "string[]",
  "action_items": [
    {
      "task": "string",
      "assignee": "string",
      "deadline": "string",
      "priority": "high | medium | low"
    }
  ],
  "next_steps": "string[]",
  "topics_discussed": "string[]"
}
```

**Model Configuration:**
- Model: Claude 3.5 Sonnet
- Temperature: 0.2 (precision)
- Max Tokens: 3000
- Average Cost: ~$0.015 per execution

**Use Cases:**
- Team standups
- Client meetings
- Board meetings
- Planning sessions
- Retrospectives

---

### 4.2 Customer Support Assistant
**Icon:** 💬
**Tagline:** "Empathetic, helpful responses"
**Category:** Communication

**Description:**
Generates thoughtful customer support responses with empathy, problem-solving, and de-escalation when needed.

**Capabilities:**
- Empathetic response generation
- Problem diagnosis
- Solution suggestions
- Tone matching
- Escalation detection

**Input Schema:**
```json
{
  "customer_message": "string (required)",
  "issue_category": "string (optional)",
  "customer_history": "string (optional)",
  "response_tone": "empathetic | professional | friendly"
}
```

**Output Schema:**
```json
{
  "response": "string",
  "issue_type": "string",
  "urgency": "low | medium | high",
  "suggested_actions": "string[]",
  "requires_escalation": "boolean"
}
```

**Model Configuration:**
- Model: Claude 3.5 Sonnet
- Temperature: 0.5 (balanced empathy and clarity)
- Max Tokens: 1500
- Average Cost: ~$0.008 per execution

**Use Cases:**
- Email support
- Chat support
- Social media responses
- Complaint handling
- FAQ responses

---

## 5. Business & Productivity Agents

### 5.1 Strategic Advisor
**Icon:** 🧠
**Tagline:** "Business strategy on demand"
**Category:** Business & Productivity

**Description:**
Provides strategic business advice, analyzes opportunities, identifies risks, and suggests actionable strategies.

**Capabilities:**
- SWOT analysis
- Competitive positioning
- Growth strategy recommendations
- Risk assessment
- Opportunity evaluation

**Input Schema:**
```json
{
  "business_context": "string (required)",
  "question": "string (required)",
  "industry": "string (optional)",
  "constraints": "string[] (optional)"
}
```

**Output Schema:**
```json
{
  "analysis": "string",
  "recommendations": "string[]",
  "opportunities": "string[]",
  "risks": "string[]",
  "next_steps": "string[]"
}
```

**Model Configuration:**
- Model: Claude 3 Opus (advanced reasoning)
- Temperature: 0.4 (balanced creativity and logic)
- Max Tokens: 4000
- Average Cost: ~$0.06 per execution

**Use Cases:**
- Business planning
- Market entry decisions
- Product strategy
- Competitive analysis
- Investment evaluation

---

### 5.2 Project Planner
**Icon:** 📋
**Tagline:** "Idea → Execution plan"
**Category:** Business & Productivity

**Description:**
Breaks down projects into actionable tasks, estimates timelines, identifies dependencies, and creates implementation roadmaps.

**Capabilities:**
- Task breakdown
- Timeline estimation
- Dependency mapping
- Resource identification
- Milestone creation

**Input Schema:**
```json
{
  "project_description": "string (required)",
  "deadline": "string (optional)",
  "team_size": "number (optional)",
  "constraints": "string[] (optional)"
}
```

**Output Schema:**
```json
{
  "project_phases": [
    {
      "phase_name": "string",
      "tasks": "string[]",
      "duration_estimate": "string",
      "dependencies": "string[]"
    }
  ],
  "timeline": "string",
  "critical_path": "string[]",
  "resources_needed": "string[]",
  "risks": "string[]"
}
```

**Model Configuration:**
- Model: Claude 3.5 Sonnet
- Temperature: 0.3 (structured planning)
- Max Tokens: 3500
- Average Cost: ~$0.018 per execution

**Use Cases:**
- Product launches
- Marketing campaigns
- Software development
- Event planning
- Business initiatives

---

### 5.3 Pitch Deck Creator
**Icon:** 🎤
**Tagline:** "Compelling pitch, every slide"
**Category:** Business & Productivity

**Description:**
Creates structured pitch deck outlines with slide-by-slide content for fundraising, sales, or internal presentations.

**Capabilities:**
- Slide structure creation
- Compelling narratives
- Data visualization suggestions
- Investor-focused messaging
- Q&A anticipation

**Input Schema:**
```json
{
  "pitch_type": "investor | sales | internal | product",
  "company_info": "string (required)",
  "key_metrics": "object (optional)",
  "target_audience": "string (required)",
  "slide_count": "number (default: 10-15)"
}
```

**Output Schema:**
```json
{
  "slides": [
    {
      "slide_number": "number",
      "title": "string",
      "content": "string[]",
      "visual_suggestions": "string",
      "speaker_notes": "string"
    }
  ],
  "narrative_flow": "string",
  "anticipated_questions": "string[]"
}
```

**Model Configuration:**
- Model: Claude 3.5 Sonnet
- Temperature: 0.6 (persuasive but grounded)
- Max Tokens: 3500
- Average Cost: ~$0.018 per execution

**Use Cases:**
- Fundraising pitches
- Sales presentations
- Product demos
- Board presentations
- Stakeholder updates

---

## 6. Creative & Media Agents

### 6.1 Creative Brainstormer
**Icon:** 💡
**Tagline:** "Ideas on demand"
**Category:** Creative & Media

**Description:**
Generates creative ideas for campaigns, content, products, features, or any creative challenge with diverse perspectives.

**Capabilities:**
- Idea generation (10-50 ideas)
- Multi-angle thinking
- Trend incorporation
- Feasibility rating
- Concept expansion

**Input Schema:**
```json
{
  "challenge": "string (required)",
  "constraints": "string[] (optional)",
  "target_audience": "string (optional)",
  "quantity": "number (default: 10)",
  "creativity_level": "conservative | balanced | wild"
}
```

**Output Schema:**
```json
{
  "ideas": [
    {
      "title": "string",
      "description": "string",
      "feasibility": "low | medium | high",
      "uniqueness": "number (1-10)",
      "next_steps": "string[]"
    }
  ],
  "top_picks": "string[] (best 3 ideas)"
}
```

**Model Configuration:**
- Model: Claude 3.5 Sonnet
- Temperature: 0.9 (maximum creativity)
- Max Tokens: 3000
- Average Cost: ~$0.015 per execution

**Use Cases:**
- Marketing campaigns
- Product naming
- Feature ideation
- Content themes
- Event concepts

---

### 6.2 Video Script Writer
**Icon:** 🎬
**Tagline:** "From concept to screenplay"
**Category:** Creative & Media

**Description:**
Creates engaging video scripts for YouTube, TikTok, explainers, or ads with hook, structure, and call-to-action.

**Capabilities:**
- Hook creation
- Script structure
- Platform optimization
- Engagement techniques
- B-roll suggestions

**Input Schema:**
```json
{
  "video_type": "youtube | tiktok | explainer | ad | tutorial",
  "topic": "string (required)",
  "target_length": "string (30s | 1min | 3min | 5min+)",
  "tone": "educational | entertaining | inspirational | promotional",
  "target_audience": "string (optional)"
}
```

**Output Schema:**
```json
{
  "hook": "string (first 5 seconds)",
  "script": "string (full script with timestamps)",
  "call_to_action": "string",
  "b_roll_suggestions": "string[]",
  "music_suggestions": "string",
  "estimated_duration": "string"
}
```

**Model Configuration:**
- Model: Claude 3.5 Sonnet
- Temperature: 0.7 (engaging and structured)
- Max Tokens: 3000
- Average Cost: ~$0.015 per execution

**Use Cases:**
- YouTube videos
- TikTok content
- Product explainers
- Video ads
- Educational content

---

## Agent Verification Badges

Agents can have verification badges to indicate quality and trustworthiness:

- **✓ Verified**: Official Agentify agent, tested and optimized
- **⭐ Popular**: High usage and ratings from community
- **🏆 Premium**: Advanced capabilities, may use Claude Opus
- **👥 Community**: User-submitted agent (moderated)
- **🔧 Beta**: New agent in testing phase

---

## Agent Metrics & Ratings

Each agent displays:
- **⭐ Rating**: 1-5 stars from user reviews
- **🔄 Usage Count**: Total executions across all users
- **💰 Avg Cost**: Typical cost per execution
- **⚡ Speed**: Fast (<5s) | Medium (5-15s) | Slow (15s+)
- **📊 Success Rate**: % of successful executions

---

## Expansion Strategy

**Phase 2 Agents (Post-MVP):**
- Code Reviewer (development)
- SQL Query Generator (data)
- Legal Document Analyzer (professional)
- Resume Writer (career)
- Recipe Generator (lifestyle)
- Fitness Coach (health)
- Financial Advisor (personal finance)
- Story Writer (creative)

**Community Agent Submission:**
- Users can submit custom agents
- Moderation queue for verification
- Revenue sharing for popular agents (future)
- Template system for easy creation

---

## Next Steps

1. **Design agent cards** for mobile UI
2. **Create detailed system prompts** for each agent
3. **Build agent execution engine** (workflow)
4. **Set up agent catalogue database** (Supabase)
5. **Implement agent rating system**

---

**Document Status:** v1.0 - Ready for UI Design
**Last Updated:** October 26, 2025
