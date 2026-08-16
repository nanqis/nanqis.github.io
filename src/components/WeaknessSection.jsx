import { useState } from 'react'
import SectionShell from './SectionShell'
import './WeaknessSection.css'

export default function WeaknessSection() {
  const [mode, setMode] = useState('idle') // idle | write | listen

  const setWrite = () => setMode((m) => (m === 'write' ? 'idle' : 'write'))
  const setListen = () => setMode((m) => (m === 'listen' ? 'idle' : 'listen'))

  return (
    <SectionShell id="weakness" path="~/portfolio/quirks/" title="One Tiny Quirk">
      <div className="quirk">
        <p className="quirk__joke">
          Funny quirk: I can’t <em>write</em> and <em>listen</em> at the exact same time. I can handle many
          things overall — just not those two in the same second.
        </p>
        <p className="quirk__sub mono tok-comment">
          {'// not “bad at multitasking” — only write + listen clash'}
        </p>

        <div className="quirk__controls" role="group" aria-label="Write vs listen demo">
          <button
            type="button"
            className={`quirk__btn ${mode === 'write' ? 'is-on' : ''}`}
            aria-pressed={mode === 'write'}
            onClick={setWrite}
          >
            <span className="mono">Writing</span>
            <span>{mode === 'write' ? 'ON' : 'off'}</span>
          </button>
          <span className="quirk__xor mono" aria-hidden>
            one at a time
          </span>
          <button
            type="button"
            className={`quirk__btn is-listen ${mode === 'listen' ? 'is-on' : ''}`}
            aria-pressed={mode === 'listen'}
            onClick={setListen}
          >
            <span className="mono">Listening</span>
            <span>{mode === 'listen' ? 'ON' : 'off'}</span>
          </button>
        </div>

        <div className="quirk__stage" aria-live="polite">
          {mode === 'idle' && (
            <p className="mono">
              <span className="tok-comment">// Try turning one on — you can’t run both together.</span>
            </p>
          )}
          {mode === 'write' && (
            <p>
              I’m writing… so I’m not really listening right now.
              <span className="quirk__badge mono">listening = off</span>
            </p>
          )}
          {mode === 'listen' && (
            <p>
              I’m listening… so my hands pause on writing.
              <span className="quirk__badge mono">writing = off</span>
            </p>
          )}
        </div>
      </div>
    </SectionShell>
  )
}
