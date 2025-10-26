'use client'

import { Header } from '@/components/layout/Header'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { AgentCard } from '@/components/agents/AgentCard'
import { agents } from '@/lib/agents'
import { Search, Play } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  // Get a few featured agents for display
  const featuredAgents = agents.slice(0, 3)

  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="Agentify" />

      <main className="max-w-2xl mx-auto px-4 py-6 space-y-6">
        {/* Welcome Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            👋 Hey there!
          </h2>
          <p className="text-gray-600 mt-1">
            What would you like to automate today?
          </p>
        </div>

        {/* Quick Search */}
        <div className="relative">
          <Input
            type="search"
            placeholder="Search agents..."
            className="pl-10"
            onFocus={() => router.push('/agents')}
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
        </div>

        {/* Recent Workflows - Mock data for now */}
        <section>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Recent Workflows
          </h3>
          <div className="space-y-3">
            <Card>
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900">📊 Market Research Flow</h4>
                <p className="text-sm text-gray-600">3 agents • Last run 2h ago</p>
                <Button variant="ghost" size="sm" className="w-full mt-2">
                  <Play size={16} className="mr-2" />
                  Run Again
                </Button>
              </div>
            </Card>
            <Card>
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900">✍️ Content Pipeline</h4>
                <p className="text-sm text-gray-600">5 agents • Last run 1d ago</p>
                <Button variant="ghost" size="sm" className="w-full mt-2">
                  <Play size={16} className="mr-2" />
                  Run Again
                </Button>
              </div>
            </Card>
          </div>
        </section>

        {/* Quick Actions */}
        <section>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Quick Actions
          </h3>
          <div className="grid grid-cols-2 gap-3">
            <Link href="/agents?category=Research">
              <Card hover className="text-center p-6">
                <div className="text-3xl mb-2">🔍</div>
                <div className="font-medium text-gray-900">Research</div>
              </Card>
            </Link>
            <Link href="/agents?category=Content">
              <Card hover className="text-center p-6">
                <div className="text-3xl mb-2">✍️</div>
                <div className="font-medium text-gray-900">Write</div>
              </Card>
            </Link>
            <Link href="/agents?category=Data">
              <Card hover className="text-center p-6">
                <div className="text-3xl mb-2">📊</div>
                <div className="font-medium text-gray-900">Analyze</div>
              </Card>
            </Link>
            <Link href="/new">
              <Card hover className="text-center p-6">
                <div className="text-3xl mb-2">➕</div>
                <div className="font-medium text-gray-900">New Flow</div>
              </Card>
            </Link>
          </div>
        </section>

        {/* Featured Agents */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-gray-900">
              Popular Agents
            </h3>
            <Link href="/agents" className="text-sm text-primary-600 hover:text-primary-700">
              View All →
            </Link>
          </div>
          <div className="space-y-3">
            {featuredAgents.map((agent) => (
              <AgentCard
                key={agent.id}
                agent={agent}
                onClick={() => router.push(`/agents/${agent.id}`)}
              />
            ))}
          </div>
        </section>

        {/* Suggested Template */}
        <section>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Suggested Workflows
          </h3>
          <Card>
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-900">
                🎯 Email → Summary → Response
              </h4>
              <p className="text-sm text-gray-600">
                Perfect for customer support. Automatically summarize emails and draft responses.
              </p>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span>⭐ 4.8</span>
                <span>•</span>
                <span>234 users</span>
              </div>
              <Button variant="secondary" size="sm" className="w-full">
                Try It
              </Button>
            </div>
          </Card>
        </section>
      </main>
    </div>
  )
}
