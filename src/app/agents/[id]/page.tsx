'use client'

import { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { Header } from '@/components/layout/Header'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { getAgentById } from '@/lib/agents'
import { formatCost, getSpeedLabel } from '@/lib/utils'
import { Star, Zap, ArrowLeft, Loader2 } from 'lucide-react'

export default function AgentDetailPage() {
  const params = useParams()
  const router = useRouter()
  const agent = getAgentById(params.id as string)

  const [testInput, setTestInput] = useState('')
  const [isExecuting, setIsExecuting] = useState(false)
  const [result, setResult] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)

  if (!agent) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-2">🤔</div>
          <p className="text-gray-600">Agent not found</p>
          <Button onClick={() => router.push('/agents')} className="mt-4">
            Back to Agents
          </Button>
        </div>
      </div>
    )
  }

  const handleTestRun = async () => {
    if (!testInput.trim()) return

    setIsExecuting(true)
    setError(null)
    setResult(null)

    try {
      const response = await fetch('/api/execute', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          agentId: agent.id,
          input: testInput
        })
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Execution failed')
      }

      setResult(data)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setIsExecuting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header title={agent.name} showBack onBackClick={() => router.back()} />

      <main className="max-w-2xl mx-auto px-4 py-6 space-y-6">
        {/* Agent Header */}
        <div className="text-center">
          <div className="text-6xl mb-3">{agent.icon}</div>
          <h2 className="text-2xl font-bold text-gray-900">{agent.name}</h2>
          {agent.isVerified && (
            <Badge variant="info" className="mt-2">✓ Verified</Badge>
          )}
        </div>

        {/* Metrics */}
        <Card>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="flex items-center gap-1 text-gray-600">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold text-gray-900">{agent.rating}</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">Rating</p>
            </div>
            <div>
              <div className="font-semibold text-gray-900">{formatCost(agent.averageCost)}</div>
              <p className="text-xs text-gray-500 mt-1">Avg cost per run</p>
            </div>
            <div>
              <div className="flex items-center gap-1">
                <Zap className="w-4 h-4" />
                <span className="font-semibold text-gray-900">{getSpeedLabel(agent.averageTime)}</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">{agent.averageTime}s avg</p>
            </div>
            <div>
              <div className="font-semibold text-gray-900">{agent.usageCount.toLocaleString()}</div>
              <p className="text-xs text-gray-500 mt-1">Total uses</p>
            </div>
          </div>
        </Card>

        {/* Description */}
        <section>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
          <p className="text-gray-700 leading-relaxed">{agent.description}</p>
        </section>

        {/* Capabilities */}
        <section>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Capabilities</h3>
          <ul className="space-y-2">
            {agent.capabilities.map((capability, index) => (
              <li key={index} className="flex items-start gap-2 text-gray-700">
                <span className="text-primary-500 mt-1">•</span>
                <span>{capability}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Use Cases */}
        <section>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Example Use Cases</h3>
          <div className="space-y-2">
            {agent.useCases.map((useCase, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
                <span className="text-lg">🎯</span>
                <span>{useCase}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Try It Now */}
        <section>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Try It Now</h3>
          <Card>
            <div className="space-y-4">
              <Textarea
                label="Input"
                placeholder={
                  agent.id === 'research-analyst'
                    ? 'Enter a research topic, e.g., "AI in healthcare trends 2024"'
                    : agent.id === 'long-form-writer'
                    ? 'Enter a topic and outline, e.g., "Write a blog post about sustainable living"'
                    : agent.id === 'summarizer-pro'
                    ? 'Paste text to summarize...'
                    : 'Enter your input...'
                }
                rows={4}
                value={testInput}
                onChange={(e) => setTestInput(e.target.value)}
                disabled={isExecuting}
              />

              <Button
                onClick={handleTestRun}
                disabled={!testInput.trim() || isExecuting}
                className="w-full"
              >
                {isExecuting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Executing...
                  </>
                ) : (
                  `Run Test (~${formatCost(agent.averageCost)})`
                )}
              </Button>

              {error && (
                <div className="p-4 bg-error-light border border-error rounded-lg">
                  <p className="text-sm text-error-dark">
                    <strong>Error:</strong> {error}
                  </p>
                  {error.includes('API key') && (
                    <p className="text-xs text-error-dark mt-2">
                      Please set your ANTHROPIC_API_KEY in .env.local
                    </p>
                  )}
                </div>
              )}

              {result && (
                <div className="space-y-3">
                  <div className="p-4 bg-success-light border border-success rounded-lg">
                    <h4 className="font-semibold text-success-dark mb-2">✅ Success</h4>
                    <div className="text-sm text-gray-700 whitespace-pre-wrap">
                      {result.output}
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{result.tokensUsed} tokens used</span>
                    <span>Cost: {formatCost(result.cost)}</span>
                    <span>Time: {result.executionTime}s</span>
                  </div>
                </div>
              )}
            </div>
          </Card>
        </section>

        {/* Reviews */}
        <section>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Reviews</h3>
          <div className="space-y-3">
            <Card>
              <div className="flex items-start gap-2">
                <div className="text-yellow-400">⭐⭐⭐⭐⭐</div>
                <div className="flex-1">
                  <p className="text-sm text-gray-700">"Perfect for market research! Saves me hours every week."</p>
                  <p className="text-xs text-gray-500 mt-1">@sarah_m • 2 days ago</p>
                </div>
              </div>
            </Card>
            <Card>
              <div className="flex items-start gap-2">
                <div className="text-yellow-400">⭐⭐⭐⭐⭐</div>
                <div className="flex-1">
                  <p className="text-sm text-gray-700">"Incredibly accurate and well-cited. Game changer!"</p>
                  <p className="text-xs text-gray-500 mt-1">@john_d • 5 days ago</p>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </main>
    </div>
  )
}
