import { format } from 'date-fns'
import type { DateLike } from '@/mytypes'

export function formatDate(date?: DateLike): string | undefined {
  if (!date) return date

  if (typeof date === 'string') {
    date = new Date(date)
  }

  return format(date, 'yyyy-MM-dd')
}

export function getDate(date: DateLike): Date {
  if (typeof date === 'string') {
    date = new Date(date)
  }

  return date
}
