'use client'

import { Header } from '@/components/layout/Header'
import { Card } from '@/components/ui/card'

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="Settings" />

      <main className="max-w-2xl mx-auto px-4 py-6 space-y-6">
        <section>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Account</h3>
          <Card>
            <div className="space-y-4">
              <div>
                <div className="text-sm font-medium text-gray-700">Email</div>
                <div className="text-gray-900">demo@agentify.com</div>
              </div>
            </div>
          </Card>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">API Configuration</h3>
          <Card>
            <div className="space-y-2">
              <div className="text-sm font-medium text-gray-700">Anthropic API Key</div>
              <div className="text-xs text-gray-500 font-mono bg-gray-50 p-3 rounded">
                {process.env.ANTHROPIC_API_KEY ? 'sk-ant-***' : 'Not configured'}
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Add your API key to .env.local to enable agent execution
              </p>
            </div>
          </Card>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">About</h3>
          <Card>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Version</span>
                <span className="text-gray-900">1.0.0 (MVP)</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Agents</span>
                <span className="text-gray-900">8 available</span>
              </div>
            </div>
          </Card>
        </section>
      </main>
    </div>
  )
}
