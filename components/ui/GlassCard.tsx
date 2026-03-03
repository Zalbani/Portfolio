import { cn } from '@/lib/utils'

type Props = {
  children: React.ReactNode
  className?: string
}

export function GlassCard({ children, className }: Props) {
  return (
    <div className={cn('glass rounded-2xl p-6', className)}>
      {children}
    </div>
  )
}
