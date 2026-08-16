import SectionShell from './SectionShell'
import { aiSection } from '../data/placeholders'
import './AiSection.css'

export default function AiSection() {
  return (
    <SectionShell id="ai" path="~/portfolio/ai/" title="AI">
      <div className="ai-panel">
        <p className="ai-panel__lead">{aiSection.lead}</p>
        <div className="ai-panel__flow" aria-hidden>
          <span className="ai-panel__node mono">deep_ai_knowledge</span>
          <span className="ai-panel__arrow">→</span>
          <span className="ai-panel__node mono is-pink">gen_ai</span>
          <span className="ai-panel__arrow">→</span>
          <span className="ai-panel__node mono is-turq">software_dev</span>
        </div>
        <ul className="ai-panel__list">
          {aiSection.bullets.map((b) => (
            <li key={b} className="mono">
              <span className="tok-comment">// </span>
              {b}
            </li>
          ))}
          <li className="mono">
            <span className="tok-comment">// </span>
            Certified:{' '}
            <a className="ai-panel__cert" href={aiSection.cert.href} target="_blank" rel="noreferrer">
              {aiSection.cert.label}
            </a>
          </li>
        </ul>
      </div>
    </SectionShell>
  )
}
