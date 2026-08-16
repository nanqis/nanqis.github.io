import './SectionShell.css'

export default function SectionShell({ id, path, title, children, className = '' }) {
  return (
    <section id={id} className={`section-shell ${className}`} tabIndex={-1}>
      <header className="section-shell__header">
        <span className="section-shell__path mono">{path}</span>
        <h2 className="section-shell__title">{title}</h2>
      </header>
      <div className="section-shell__body">{children}</div>
    </section>
  )
}
