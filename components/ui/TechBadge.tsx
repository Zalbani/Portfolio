export function TechBadge({ label }: { label: string }) {
  return (
    <span className="inline-block text-sm font-medium px-3 py-1 rounded-full bg-terra-50 dark:bg-[#00ADB5]/10 text-terra-700 dark:text-[#00ADB5] border border-terra-100 dark:border-[#00ADB5]/25">
      {label}
    </span>
  )
}
