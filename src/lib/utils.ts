import { type ClassValue, clsx } from "clsx"

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

export function formatCost(cost: number): string {
  return `$${cost.toFixed(3)}`
}

export function formatTime(seconds: number): string {
  if (seconds < 60) {
    return `${seconds}s`
  }
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = seconds % 60
  return `${minutes}m ${remainingSeconds}s`
}

export function getSpeedLabel(seconds: number): string {
  if (seconds < 10) return 'Fast'
  if (seconds < 20) return 'Medium'
  return 'Slow'
}
