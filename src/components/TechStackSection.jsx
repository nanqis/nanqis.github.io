import { useState } from 'react'
import SectionShell from './SectionShell'
import { techStack } from '../data/placeholders'
import './TechStackSection.css'

export default function TechStackSection() {
  const [active, setActive] = useState('all')
  const groups =
    active === 'all' ? techStack.groups : techStack.groups.filter((g) => g.id === active)

  return (
    <SectionShell id="tech" path="~/portfolio/stack/" title="Tech Stack">
      <div className="tech-stack">
        <p className="tech-stack__disclaimer mono">
          <span className="tok-comment">// </span>
          {techStack.disclaimer}
        </p>

        <div className="tech-stack__filters" role="tablist" aria-label="Tech stack groups">
          <button
            type="button"
            role="tab"
            aria-selected={active === 'all'}
            className={`tech-stack__filter mono ${active === 'all' ? 'is-active' : ''}`}
            onClick={() => setActive('all')}
          >
            all/
          </button>
          {techStack.groups.map((g) => (
            <button
              key={g.id}
              type="button"
              role="tab"
              aria-selected={active === g.id}
              className={`tech-stack__filter mono ${active === g.id ? 'is-active' : ''}`}
              onClick={() => setActive(g.id)}
            >
              {g.label}/
            </button>
          ))}
        </div>

        <div className="tech-stack__panel" key={active}>
          {groups.map((group) => (
            <div key={group.id} className="tech-stack__group">
              <h3 className="tech-stack__group-title mono">{group.title}</h3>
              <div className="tech-chips">
                {group.items.map((item) => (
                  <span key={item} className="tech-chips__chip mono">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  )
}
