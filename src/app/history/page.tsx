'use client'

import { Header } from '@/components/layout/Header'

export default function HistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="Execution History" />

      <main className="max-w-2xl mx-auto px-4 py-12 text-center">
        <div className="text-6xl mb-4">📋</div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          No History Yet
        </h2>
        <p className="text-gray-600 max-w-md mx-auto">
          Your workflow executions will appear here. Try running an agent to get started!
        </p>
      </main>
    </div>
  )
}
