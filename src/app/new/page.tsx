'use client'

import { Header } from '@/components/layout/Header'
import { useRouter } from 'next/navigation'

export default function NewWorkflowPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="New Workflow" showBack onBackClick={() => router.back()} />

      <main className="max-w-2xl mx-auto px-4 py-12 text-center">
        <div className="text-6xl mb-4">🚧</div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Workflow Builder Coming Soon
        </h2>
        <p className="text-gray-600 max-w-md mx-auto">
          The visual workflow composer is under development. For now, try out individual agents from the catalogue!
        </p>
      </main>
    </div>
  )
}
