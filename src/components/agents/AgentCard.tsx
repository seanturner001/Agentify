'use client'

import { Agent } from '@/types'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { formatCost, getSpeedLabel } from '@/lib/utils'
import { Star, Zap } from 'lucide-react'

interface AgentCardProps {
  agent: Agent
  onClick?: () => void
}

export function AgentCard({ agent, onClick }: AgentCardProps) {
  return (
    <Card hover onClick={onClick}>
      <div className="flex items-start gap-3">
        <div className="text-3xl">{agent.icon}</div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold text-gray-900 truncate">
              {agent.name}
            </h3>
            {agent.isVerified && (
              <Badge variant="info">✓</Badge>
            )}
          </div>
          <p className="text-sm text-gray-600 mt-1 line-clamp-2">
            {agent.tagline}
          </p>

          <div className="flex items-center gap-4 mt-3 text-xs text-gray-500 flex-wrap">
            <span className="flex items-center gap-1">
              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              {agent.rating}
            </span>
            <span>{agent.usageCount.toLocaleString()} uses</span>
            <span>{formatCost(agent.averageCost)}</span>
            <span className="flex items-center gap-1">
              <Zap className="w-3 h-3" />
              {getSpeedLabel(agent.averageTime)}
            </span>
          </div>
        </div>
      </div>
    </Card>
  )
}
