'use client'

import { useState } from 'react'
import { Header } from '@/components/layout/Header'
import { Input } from '@/components/ui/input'
import { AgentCard } from '@/components/agents/AgentCard'
import { agents, getAgentsByCategory, getCategories } from '@/lib/agents'
import { Search } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'

export default function AgentsPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get('category') || 'All'

  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState(categoryParam)

  const categories = getCategories()

  // Filter agents
  const filteredAgents = getAgentsByCategory(selectedCategory).filter(agent =>
    agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    agent.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
    agent.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="Agent Catalogue" />

      <main className="max-w-2xl mx-auto px-4 py-6 space-y-6">
        {/* Search */}
        <div className="relative">
          <Input
            type="search"
            placeholder="Search by name or task..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
        </div>

        {/* Category Pills */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap transition-colors ${
                selectedCategory === category
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Agent List */}
        <section>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            {selectedCategory === 'All' ? 'All Agents' : selectedCategory}
            <span className="text-sm font-normal text-gray-500 ml-2">
              ({filteredAgents.length})
            </span>
          </h3>
          <div className="space-y-3">
            {filteredAgents.length > 0 ? (
              filteredAgents.map((agent) => (
                <AgentCard
                  key={agent.id}
                  agent={agent}
                  onClick={() => router.push(`/agents/${agent.id}`)}
                />
              ))
            ) : (
              <div className="text-center py-12">
                <div className="text-4xl mb-2">🔍</div>
                <p className="text-gray-600">No agents found</p>
                <p className="text-sm text-gray-500 mt-1">
                  Try adjusting your search or filters
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  )
}
