import { useState } from 'react'
import SectionShell from './SectionShell'
import { softSkills } from '../data/placeholders'
import './InterpersonalSection.css'

export default function InterpersonalSection() {
  const [active, setActive] = useState(null)

  return (
    <SectionShell id="interpersonal" path="~/portfolio/soft_skills/" title="Interpersonal Skills">
      <div className="soft-deck">
        <p className="soft-deck__intro">
          Traits I bring to teams — tap to highlight.
        </p>
        <div className="soft-deck__list" role="listbox" aria-label="Skills" aria-multiselectable="false">
          {softSkills.map((s) => {
            const isActive = active === s.id
            return (
              <button
                key={s.id}
                type="button"
                role="option"
                aria-selected={isActive}
                title={s.title}
                className={`soft-deck__chip mono ${isActive ? 'is-active' : ''}`}
                onClick={() => setActive(isActive ? null : s.id)}
              >
                ${s.label}
              </button>
            )
          })}
        </div>
        {active && (
          <p className="soft-deck__active mono" aria-live="polite">
            <span className="tok-fn">→</span> {softSkills.find((s) => s.id === active)?.title}
          </p>
        )}
      </div>
    </SectionShell>
  )
}
