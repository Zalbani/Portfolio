export function TechBadge({ label }: { label: string }) {
  return (
    <span className="inline-block text-xs font-medium px-2.5 py-1 rounded-full bg-white/70 text-ink-secondary border border-white/90">
      {label}
    </span>
  )
}
