import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'
import { getAgentById } from '@/lib/agents'

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY || '',
})

export async function POST(request: NextRequest) {
  try {
    const { agentId, input } = await request.json()

    if (!agentId || !input) {
      return NextResponse.json(
        { error: 'Missing agentId or input' },
        { status: 400 }
      )
    }

    const agent = getAgentById(agentId)
    if (!agent) {
      return NextResponse.json(
        { error: 'Agent not found' },
        { status: 404 }
      )
    }

    if (!process.env.ANTHROPIC_API_KEY) {
      return NextResponse.json(
        { error: 'Anthropic API key not configured. Please add ANTHROPIC_API_KEY to .env.local' },
        { status: 500 }
      )
    }

    const startTime = Date.now()

    // Execute the agent with Anthropic API
    const message = await anthropic.messages.create({
      model: agent.modelId,
      max_tokens: agent.maxTokens,
      temperature: agent.temperature,
      system: agent.systemPrompt,
      messages: [
        {
          role: 'user',
          content: input
        }
      ]
    })

    const executionTime = ((Date.now() - startTime) / 1000).toFixed(1)

    // Extract text content from response
    const textContent = message.content
      .filter((block) => block.type === 'text')
      .map((block) => ('text' in block ? block.text : ''))
      .join('\n')

    // Calculate cost (approximate, based on token usage)
    // Claude pricing: ~$3 per million tokens for input, ~$15 per million for output
    const inputTokens = message.usage.input_tokens
    const outputTokens = message.usage.output_tokens
    const cost = (inputTokens * 3 + outputTokens * 15) / 1_000_000

    return NextResponse.json({
      success: true,
      output: textContent,
      tokensUsed: inputTokens + outputTokens,
      inputTokens,
      outputTokens,
      cost,
      executionTime: parseFloat(executionTime),
      model: agent.modelId
    })
  } catch (error: any) {
    console.error('Execution error:', error)
    return NextResponse.json(
      { error: error.message || 'Execution failed' },
      { status: 500 }
    )
  }
}
