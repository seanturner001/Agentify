'use client'

import { Menu, Bell, User } from 'lucide-react'

interface HeaderProps {
  title: string
  showBack?: boolean
  onBackClick?: () => void
}

export function Header({ title, showBack, onBackClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-200 safe-area-inset-top">
      <div className="flex items-center justify-between px-4 h-14">
        <button className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-gray-900">
          {showBack ? (
            <span onClick={onBackClick}>←</span>
          ) : (
            <Menu size={24} />
          )}
        </button>

        <h1 className="text-lg font-semibold">{title}</h1>

        <div className="flex items-center gap-2">
          <button className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-gray-900">
            <Bell size={24} />
          </button>
          <button className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-gray-900">
            <User size={24} />
          </button>
        </div>
      </div>
    </header>
  )
}
