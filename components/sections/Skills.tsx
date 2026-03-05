'use client'

import { useTranslations } from 'next-intl'
import { hardSkills } from '@/data/resume'
import { GlassCard } from '@/components/ui/GlassCard'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { motion } from 'framer-motion'

const devIconsBase = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons'
const simpleIconsBase = 'https://cdn.simpleicons.org'

const iconMap: Record<string, string> = {
  // Dev Icons
  typescript: `${devIconsBase}/typescript/typescript-original.svg`,
  php: `${devIconsBase}/php/php-original.svg`,
  solidity: `${devIconsBase}/solidity/solidity-original.svg`,
  react: `${devIconsBase}/react/react-original.svg`,
  nextjs: `${devIconsBase}/nextjs/nextjs-original.svg`,
  nodejs: `${devIconsBase}/nodejs/nodejs-original.svg`,
  nestjs: `${devIconsBase}/nestjs/nestjs-original.svg`,
  symfony: `${devIconsBase}/symfony/symfony-original.svg`,
  docker: `${devIconsBase}/docker/docker-original.svg`,
  redis: `${devIconsBase}/redis/redis-original.svg`,
  figma: `${devIconsBase}/figma/figma-original.svg`,
  // Simple Icons
  ollama: `${simpleIconsBase}/ollama`,
}

export function Skills() {
  const t = useTranslations('skills')
  const categories = t.raw('categories') as Record<string, string[]>

  return (
    <section id="skills" className="py-12 lg:py-24">
      <ScrollReveal>
        <p className="section-heading">{t('sectionTitle')}</p>
      </ScrollReveal>

      <ScrollReveal delay={0.05}>
        <h3 className="text-xs font-semibold text-ink-muted dark:text-slate-500 uppercase tracking-widest mb-4">
          {t('hardTitle')}
        </h3>
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 mb-10">
          {hardSkills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.3 }}
              className="glass rounded-xl p-3 flex flex-col items-center gap-2 cursor-default hover:shadow-[0_4px_16px_rgba(255,148,148,0.15)] dark:hover:shadow-[0_4px_16px_rgba(0,173,181,0.15)] transition-shadow duration-300"
            >
              <img
                src={iconMap[skill.icon]}
                alt={skill.name}
                className={`w-7 h-7 object-contain${skill.invertOnDark ? ' dark:invert' : ''}`}
              />
              <span className="text-xs text-ink-secondary dark:text-slate-400 font-medium text-center leading-tight">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <h3 className="text-xs font-semibold text-ink-muted dark:text-slate-500 uppercase tracking-widest mb-4">
          {t('softTitle')}
        </h3>
        <div className="flex flex-col gap-3">
          {Object.entries(categories).map(([category, skills]) => (
            <GlassCard key={category} className="py-4">
              <p className="text-xs font-semibold text-ink-muted dark:text-slate-500 uppercase tracking-widest mb-3">
                {category}
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm px-3 py-1 rounded-full bg-terra-50 dark:bg-[#00ADB5]/10 text-terra-700 dark:text-[#00ADB5] border border-terra-100 dark:border-[#00ADB5]/25 font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </ScrollReveal>
    </section>
  )
}
