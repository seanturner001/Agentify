import { Agent } from '@/types'

export const agents: Agent[] = [
  {
    id: 'research-analyst',
    name: 'Research Analyst',
    icon: '🔍',
    tagline: 'Deep research with citations',
    category: 'Research & Analysis',
    description: 'Conducts comprehensive research on any topic, synthesizes information from multiple sources, and provides well-cited summaries with key insights.',
    capabilities: [
      'Multi-source research synthesis',
      'Citation extraction and formatting',
      'Key insight identification',
      'Trend analysis',
      'Fact verification'
    ],
    inputSchema: {
      topic: 'string (required)',
      depth: 'quick | moderate | deep (optional)',
      focusAreas: 'string[] (optional)'
    },
    outputSchema: {
      summary: 'string',
      keyInsights: 'string[]',
      detailedFindings: 'string',
      citations: 'Citation[]'
    },
    modelId: 'claude-3-5-sonnet-20241022',
    temperature: 0.3,
    maxTokens: 4000,
    systemPrompt: `You are a meticulous research analyst. When given a topic:
1. Break it down into key research questions
2. Synthesize information from multiple perspectives
3. Provide balanced, well-cited insights
4. Identify gaps or areas needing more research
5. Always include proper citations

Focus on accuracy, comprehensiveness, and actionable insights.`,
    averageCost: 0.02,
    averageTime: 8,
    rating: 4.9,
    usageCount: 1234,
    isVerified: true,
    useCases: [
      'Market research for business decisions',
      'Academic research assistance',
      'Competitive analysis',
      'Investment due diligence'
    ]
  },
  {
    id: 'long-form-writer',
    name: 'Long-Form Writer',
    icon: '✍️',
    tagline: 'From outline to article',
    category: 'Content Creation',
    description: 'Creates high-quality long-form content including blog posts, articles, essays, and reports from brief descriptions or outlines.',
    capabilities: [
      'Blog post generation (800-2000 words)',
      'Article writing with proper structure',
      'SEO optimization',
      'Tone adaptation',
      'Multi-section organization'
    ],
    inputSchema: {
      topic: 'string (required)',
      outline: 'string[] (optional)',
      targetLength: 'number (words, optional)',
      tone: 'professional | casual | academic'
    },
    outputSchema: {
      title: 'string',
      subtitle: 'string',
      content: 'string (markdown)',
      wordCount: 'number'
    },
    modelId: 'claude-3-5-sonnet-20241022',
    temperature: 0.7,
    maxTokens: 4096,
    systemPrompt: `You are an expert content writer. Create engaging, well-structured long-form content that:
1. Captures reader attention with strong openings
2. Maintains clear structure with headings and transitions
3. Provides valuable, actionable information
4. Matches the requested tone and style
5. Concludes with memorable takeaways

Write naturally and conversationally while maintaining professionalism.`,
    averageCost: 0.025,
    averageTime: 12,
    rating: 4.8,
    usageCount: 890,
    isVerified: true,
    useCases: [
      'Blog content creation',
      'Marketing articles',
      'Educational content',
      'Thought leadership pieces'
    ]
  },
  {
    id: 'data-insight-finder',
    name: 'Data Insight Finder',
    icon: '📊',
    tagline: 'Turn data into decisions',
    category: 'Research & Analysis',
    description: 'Analyzes datasets, spreadsheets, or structured data to identify patterns, trends, and actionable insights.',
    capabilities: [
      'Statistical analysis',
      'Trend identification',
      'Anomaly detection',
      'Data visualization recommendations',
      'Predictive insights'
    ],
    inputSchema: {
      data: 'string (CSV, JSON, or description)',
      analysisType: 'trends | anomalies | predictions | summary',
      businessContext: 'string (optional)'
    },
    outputSchema: {
      summary: 'string',
      keyFindings: 'Finding[]',
      trends: 'Trend[]',
      recommendations: 'string[]'
    },
    modelId: 'claude-3-5-sonnet-20241022',
    temperature: 0.2,
    maxTokens: 3000,
    systemPrompt: `You are a data analyst. When analyzing data:
1. Identify the most significant patterns and trends
2. Explain findings in clear, business-friendly language
3. Highlight actionable insights
4. Note any anomalies or outliers
5. Provide data-driven recommendations

Focus on what the data means for decision-making.`,
    averageCost: 0.015,
    averageTime: 10,
    rating: 4.7,
    usageCount: 567,
    isVerified: true,
    useCases: [
      'Sales data analysis',
      'Customer behavior insights',
      'Financial trend analysis',
      'Marketing campaign performance'
    ]
  },
  {
    id: 'social-media-manager',
    name: 'Social Media Manager',
    icon: '📱',
    tagline: 'Multi-platform content in seconds',
    category: 'Content Creation',
    description: 'Generates platform-optimized social media posts from a single idea. Creates variations for Twitter, LinkedIn, Instagram, and Facebook.',
    capabilities: [
      'Multi-platform content adaptation',
      'Hashtag generation',
      'Engagement optimization',
      'Character limit awareness',
      'Call-to-action creation'
    ],
    inputSchema: {
      mainMessage: 'string (required)',
      platforms: 'string[] (twitter, linkedin, instagram, facebook)',
      tone: 'professional | casual | humorous | inspirational'
    },
    outputSchema: {
      posts: 'Post[] (platform-specific)',
      hashtags: 'string[]',
      suggestedImages: 'string[]'
    },
    modelId: 'claude-3-haiku-20240307',
    temperature: 0.8,
    maxTokens: 1500,
    systemPrompt: `You are a social media expert. Create engaging posts that:
1. Match each platform's style and best practices
2. Use appropriate hashtags for discoverability
3. Include strong calls-to-action
4. Stay within character limits
5. Maximize engagement potential

Make content shareable and conversation-starting.`,
    averageCost: 0.003,
    averageTime: 5,
    rating: 4.8,
    usageCount: 1567,
    isVerified: true,
    useCases: [
      'Brand social media',
      'Personal brand building',
      'Product launches',
      'Event promotion'
    ]
  },
  {
    id: 'summarizer-pro',
    name: 'Summarizer Pro',
    icon: '📝',
    tagline: 'Any length → Key points',
    category: 'Data Processing',
    description: 'Condenses long documents, articles, transcripts, or reports into concise summaries with configurable length and focus.',
    capabilities: [
      'Multi-format summarization',
      'Length control',
      'Key point extraction',
      'Action item identification',
      'Meeting note summarization'
    ],
    inputSchema: {
      content: 'string (required)',
      summaryType: 'bullet_points | paragraph | executive | ultra_brief',
      maxLength: 'number (words, optional)',
      focus: 'string (optional)'
    },
    outputSchema: {
      summary: 'string',
      keyPoints: 'string[]',
      actionItems: 'string[] (if applicable)',
      sentiment: 'positive | neutral | negative | mixed'
    },
    modelId: 'claude-3-5-sonnet-20241022',
    temperature: 0.3,
    maxTokens: 2000,
    systemPrompt: `You are a professional summarizer. Create concise summaries that:
1. Capture the essential information
2. Maintain the original meaning and context
3. Identify key action items if present
4. Use clear, accessible language
5. Match the requested format and length

Prioritize what's most important and actionable.`,
    averageCost: 0.01,
    averageTime: 6,
    rating: 4.9,
    usageCount: 2341,
    isVerified: true,
    useCases: [
      'Meeting notes',
      'Article summarization',
      'Research paper summaries',
      'Email thread condensing'
    ]
  },
  {
    id: 'email-composer',
    name: 'Email Composer',
    icon: '📧',
    tagline: 'Professional emails, every time',
    category: 'Content Creation',
    description: 'Drafts professional emails for any situation - from cold outreach to customer support, with customizable tone and formality.',
    capabilities: [
      'Context-aware email drafting',
      'Tone customization',
      'Subject line optimization',
      'Follow-up sequence creation',
      'Template generation'
    ],
    inputSchema: {
      purpose: 'string (cold_outreach | follow_up | support | announcement)',
      recipientContext: 'string',
      keyPoints: 'string[]',
      tone: 'formal | semi-formal | casual'
    },
    outputSchema: {
      subjectLine: 'string',
      emailBody: 'string',
      alternativeSubjectLines: 'string[]',
      followUpSuggestions: 'string[]'
    },
    modelId: 'claude-3-haiku-20240307',
    temperature: 0.6,
    maxTokens: 1000,
    systemPrompt: `You are an expert email writer. Craft emails that:
1. Have clear, compelling subject lines
2. Get to the point quickly
3. Match the appropriate tone and formality
4. Include clear calls-to-action
5. Are respectful of the recipient's time

Make every email professional, concise, and effective.`,
    averageCost: 0.002,
    averageTime: 4,
    rating: 4.7,
    usageCount: 987,
    isVerified: true,
    useCases: [
      'Sales outreach',
      'Customer support',
      'Partnership proposals',
      'Professional networking'
    ]
  },
  {
    id: 'creative-brainstormer',
    name: 'Creative Brainstormer',
    icon: '💡',
    tagline: 'Ideas on demand',
    category: 'Creative & Media',
    description: 'Generates creative ideas for campaigns, content, products, features, or any creative challenge with diverse perspectives.',
    capabilities: [
      'Idea generation (10-50 ideas)',
      'Multi-angle thinking',
      'Trend incorporation',
      'Feasibility rating',
      'Concept expansion'
    ],
    inputSchema: {
      challenge: 'string (required)',
      constraints: 'string[] (optional)',
      targetAudience: 'string (optional)',
      quantity: 'number (default: 10)',
      creativityLevel: 'conservative | balanced | wild'
    },
    outputSchema: {
      ideas: 'Idea[] (with title, description, feasibility)',
      topPicks: 'string[] (best 3 ideas)'
    },
    modelId: 'claude-3-5-sonnet-20241022',
    temperature: 0.9,
    maxTokens: 3000,
    systemPrompt: `You are a creative ideation expert. Generate ideas that:
1. Think outside conventional boundaries
2. Consider multiple perspectives and approaches
3. Balance creativity with feasibility
4. Are specific and actionable
5. Spark further innovation

Don't self-censor - explore bold, unexpected directions.`,
    averageCost: 0.015,
    averageTime: 9,
    rating: 4.8,
    usageCount: 756,
    isVerified: true,
    useCases: [
      'Marketing campaigns',
      'Product naming',
      'Feature ideation',
      'Content themes'
    ]
  },
  {
    id: 'meeting-summarizer',
    name: 'Meeting Summarizer',
    icon: '🎯',
    tagline: 'Transcript → Action items',
    category: 'Communication',
    description: 'Analyzes meeting transcripts or notes to extract key decisions, action items, and next steps with assignee identification.',
    capabilities: [
      'Action item extraction',
      'Decision logging',
      'Participant tracking',
      'Timeline identification',
      'Follow-up generation'
    ],
    inputSchema: {
      transcript: 'string (required)',
      participants: 'string[] (optional)',
      meetingType: 'standup | planning | review | general'
    },
    outputSchema: {
      summary: 'string',
      decisions: 'string[]',
      actionItems: 'ActionItem[] (task, assignee, deadline)',
      nextSteps: 'string[]',
      topicsDiscussed: 'string[]'
    },
    modelId: 'claude-3-5-sonnet-20241022',
    temperature: 0.2,
    maxTokens: 3000,
    systemPrompt: `You are a meeting analyst. Extract from transcripts:
1. Clear action items with owners and deadlines
2. Key decisions made
3. Important discussion topics
4. Next steps and follow-ups
5. Unresolved questions

Make everything actionable and well-organized.`,
    averageCost: 0.015,
    averageTime: 7,
    rating: 4.9,
    usageCount: 1123,
    isVerified: true,
    useCases: [
      'Team standups',
      'Client meetings',
      'Planning sessions',
      'Board meetings'
    ]
  }
]

export function getAgentById(id: string): Agent | undefined {
  return agents.find(agent => agent.id === id)
}

export function getAgentsByCategory(category: string): Agent[] {
  if (category === 'All') return agents
  return agents.filter(agent => agent.category === category)
}

export function getCategories(): string[] {
  const categories = new Set(agents.map(agent => agent.category))
  return ['All', ...Array.from(categories)]
}
