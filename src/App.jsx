import { useCallback, useEffect, useRef, useState } from 'react'
import PrincipleBar from './components/PrincipleBar'
import EdgeNav from './components/EdgeNav'
import ProfileAvatar from './components/ProfileAvatar'
import AboutModal from './components/AboutModal'
import ExperienceSection from './components/ExperienceSection'
import TechStackSection from './components/TechStackSection'
import InterpersonalSection from './components/InterpersonalSection'
import AiSection from './components/AiSection'
import WeaknessSection from './components/WeaknessSection'
import './App.css'

const SECTION_IDS = ['hero', 'experiences', 'tech', 'interpersonal', 'ai', 'weakness']

export default function App() {
  const [aboutOpen, setAboutOpen] = useState(false)
  const [activeId, setActiveId] = useState('hero')
  const navLockRef = useRef(null)
  const navUnlockTimer = useRef(null)

  const unlockNav = useCallback(() => {
    navLockRef.current = null
    if (navUnlockTimer.current) {
      clearTimeout(navUnlockTimer.current)
      navUnlockTimer.current = null
    }
  }, [])

  const navigate = useCallback(
    (id) => {
      const el = document.getElementById(id)
      if (!el) return

      navLockRef.current = id
      setActiveId(id)
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      el.focus({ preventScroll: true })

      if (navUnlockTimer.current) clearTimeout(navUnlockTimer.current)
      navUnlockTimer.current = setTimeout(unlockNav, 900)

      const onScrollEnd = () => {
        unlockNav()
        window.removeEventListener('scrollend', onScrollEnd)
      }
      window.addEventListener('scrollend', onScrollEnd, { once: true })
    },
    [unlockNav],
  )

  useEffect(() => {
    const nodes = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean)
    if (!nodes.length) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        if (navLockRef.current) return

        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target?.id) setActiveId(visible.target.id)
      },
      { rootMargin: '-20% 0px -45% 0px', threshold: [0.15, 0.4, 0.65] },
    )

    nodes.forEach((n) => observer.observe(n))
    return () => {
      observer.disconnect()
      if (navUnlockTimer.current) clearTimeout(navUnlockTimer.current)
    }
  }, [])

  return (
    <div className="app ide-grid">
      <PrincipleBar />
      <EdgeNav activeId={activeId} onNavigate={navigate} />

      <main className="app__main">
        <section id="hero" className="hero" tabIndex={-1}>
          <div className="hero__chrome mono" aria-hidden>
            <span className="hero__dot" />
            <span className="hero__dot" />
            <span className="hero__dot" />
            <span>index.php — portfolio</span>
          </div>

          <div className="hero__brand">
            <p className="hero__elephant mono" aria-hidden>
              {'{ php }'}
            </p>
            <h1 className="hero__name">
              Hannan <span>Balqis</span>
            </h1>
            <p className="hero__tag mono">
              <span className="tok-keyword">{'<?php'}</span> $role ={' '}
              <span className="tok-string">'programmer'</span>; <span className="tok-keyword">{'?>'}</span>
            </p>
            <ProfileAvatar onOpen={() => setAboutOpen(true)} />
          </div>
        </section>

        <ExperienceSection />
        <TechStackSection />
        <InterpersonalSection />
        <AiSection />
        <WeaknessSection />

        <footer className="app__footer mono">
          <span className="tok-comment">{'// © Hannan Balqis — built with curiosity & caffeine'}</span>
        </footer>
      </main>

      <AboutModal open={aboutOpen} onClose={() => setAboutOpen(false)} />
    </div>
  )
}
