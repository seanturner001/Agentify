import React from 'react'

interface CardProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  hover?: boolean
}

export function Card({ children, className = '', onClick, hover = false }: CardProps) {
  const hoverStyles = hover ? 'hover:shadow-md cursor-pointer active:scale-[0.98]' : ''

  return (
    <div
      className={`bg-white border border-gray-200 rounded-xl p-4 shadow-sm transition-all duration-200 ${hoverStyles} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  )
}
