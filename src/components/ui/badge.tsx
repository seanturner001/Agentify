import React from 'react'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'success' | 'error' | 'warning' | 'info' | 'default'
  className?: string
}

export function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  const variants = {
    success: 'bg-success-light text-success-dark',
    error: 'bg-error-light text-error-dark',
    warning: 'bg-warning-light text-warning-dark',
    info: 'bg-blue-50 text-blue-600',
    default: 'bg-gray-100 text-gray-700'
  }

  return (
    <span className={`inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-full ${variants[variant]} ${className}`}>
      {children}
    </span>
  )
}
