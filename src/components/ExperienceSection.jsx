import { useState } from 'react'
import SectionShell from './SectionShell'
import { experienceBuckets } from '../data/placeholders'
import './BucketSwitcher.css'

export default function ExperienceSection() {
  const [active, setActive] = useState(experienceBuckets[0].id)
  const [openId, setOpenId] = useState(null)
  const bucket = experienceBuckets.find((b) => b.id === active)
  const hasItems = bucket.items?.length > 0

  const switchTab = (id) => {
    setActive(id)
    setOpenId(null)
  }

  return (
    <SectionShell id="experiences" path="~/portfolio/experiences/" title="Experiences">
      <div className="bucket-switcher">
        <div className="bucket-switcher__tabs" role="tablist" aria-label="Experience type">
          {experienceBuckets.map((b) => (
            <button
              key={b.id}
              type="button"
              role="tab"
              aria-selected={active === b.id}
              className={`bucket-switcher__tab mono ${active === b.id ? 'is-active' : ''}`}
              onClick={() => switchTab(b.id)}
            >
              {b.label}/
            </button>
          ))}
        </div>
        <div className="bucket-switcher__panel" role="tabpanel" key={active}>
          <p className="bucket-switcher__path mono">{bucket.path}</p>

          {!hasItems && (
            <div className="bucket-switcher__empty">
              <span className="mono tok-comment">{`// ${bucket.empty}`}</span>
              <ul className="bucket-switcher__slots">
                <li className="is-placeholder">—</li>
                <li className="is-placeholder">—</li>
                <li className="is-placeholder">—</li>
              </ul>
            </div>
          )}

          {hasItems && (
            <ul className="xp-list">
              {bucket.items.map((item) => {
                const expandable = Boolean(item.details?.length)
                const isOpen = openId === item.id
                const hasLinks = Boolean(item.links?.length)

                return (
                  <li key={item.id} className={`xp-card ${isOpen ? 'is-open' : ''}`}>
                    <button
                      type="button"
                      className="xp-card__header"
                      onClick={() => expandable && setOpenId(isOpen ? null : item.id)}
                      aria-expanded={expandable ? isOpen : undefined}
                      disabled={!expandable}
                    >
                      <div className="xp-card__title-row">
                        <h3 className="xp-card__title">{item.title}</h3>
                        {expandable && (
                          <span className="xp-card__toggle mono" aria-hidden>
                            {isOpen ? '−' : '+'}
                          </span>
                        )}
                      </div>
                      <p className="xp-card__blurb">{item.blurb}</p>
                      <div className="tech-chips">
                        {item.status && (
                          <span className="tech-chips__chip tech-chips__chip--status mono">
                            {item.status}
                          </span>
                        )}
                        {item.stack.map((tech) => (
                          <span key={tech} className="tech-chips__chip mono">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </button>

                    {hasLinks && (
                      <div className="xp-card__links">
                        {item.links.map((link) => (
                          <a
                            key={link.href}
                            className="xp-card__link mono"
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    )}

                    {expandable && isOpen && (
                      <ul className="xp-card__details">
                        {item.details.map((detail) => (
                          <li key={detail} className="mono">
                            <span className="tok-fn">→</span> {detail}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </div>
    </SectionShell>
  )
}
