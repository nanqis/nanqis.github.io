import { useEffect, useRef } from 'react'
import { aboutMe } from '../data/placeholders'
import './AboutModal.css'

const LINE_COUNT = 17

export default function AboutModal({ open, onClose }) {
  const closeRef = useRef(null)

  useEffect(() => {
    if (!open) return undefined

    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="about-modal" role="presentation">
      <button type="button" className="about-modal__backdrop" aria-label="Close about me" onClick={onClose} />
      <div
        className="about-modal__window"
        role="dialog"
        aria-modal="true"
        aria-labelledby="about-modal-title"
      >
        <header className="about-modal__titlebar">
          <span className="about-modal__dots" aria-hidden>
            <i />
            <i />
            <i />
          </span>
          <h2 id="about-modal-title" className="mono">
            about_me.php
          </h2>
          <button ref={closeRef} type="button" className="about-modal__close mono" onClick={onClose}>
            ✕
          </button>
        </header>
        <div className="about-modal__body">
          <div className="about-modal__gutter mono" aria-hidden>
            {Array.from({ length: LINE_COUNT }, (_, i) => (
              <span key={i}>{i + 1}</span>
            ))}
          </div>
          <pre className="about-modal__code mono">
            <code>
              <span className="tok-keyword">{'<?php'}</span>
              {'\n'}
              <span className="tok-var">$me</span> = <span className="tok-string">'{aboutMe.name}'</span>;
              {'\n'}
              <span className="tok-var">$role</span> = <span className="tok-string">'{aboutMe.role}'</span>;
              {'\n'}
              {'\n'}
              <span className="tok-comment">{'// where I come from'}</span>
              {'\n'}
              <span className="tok-var">$home</span> = <span className="tok-string">'{aboutMe.home}'</span>;
              {'\n'}
              <span className="tok-var">$currently</span> = <span className="tok-string">'{aboutMe.currently}'</span>;
              {'\n'}
              {'\n'}
              <span className="tok-comment">{'// what I am into'}</span>
              {'\n'}
              <span className="tok-var">$loves</span> = [
              {'\n'}
              {'  '}
              <span className="tok-string">'{aboutMe.loves[0]}'</span>,
              {'\n'}
              {'  '}
              <span className="tok-string">'{aboutMe.loves[1]}'</span>,
              {'\n'}
              ]; <span className="tok-comment">{`// ${aboutMe.notInto}`}</span>
              {'\n'}
              {'\n'}
              <span className="tok-var">$gaming</span> = <span className="tok-string">'{aboutMe.gaming}'</span>;
              {'\n'}
              <span className="tok-var">$hiking</span> = <span className="tok-string">'{aboutMe.hiking}'</span>;
              {'\n'}
              <span className="tok-keyword">{'?>'}</span>
            </code>
          </pre>
        </div>
      </div>
    </div>
  )
}
