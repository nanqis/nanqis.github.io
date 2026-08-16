import './EdgeNav.css'

const EDGE_ITEMS = [
  { edge: 'bottom', id: 'hero', label: 'Home' },
  { edge: 'bottom', id: 'interpersonal', label: 'Interpersonal' },
  { edge: 'right', id: 'experiences', label: 'Experiences' },
  { edge: 'right', id: 'tech', label: 'Tech Stack' },
  { edge: 'left', id: 'ai', label: 'AI' },
  { edge: 'left', id: 'weakness', label: 'Quirk' },
]

export default function EdgeNav({ activeId, onNavigate }) {
  const byEdge = (edge) => EDGE_ITEMS.filter((i) => i.edge === edge)

  return (
    <nav className="edge-nav" aria-label="Section navigation">
      <div className="edge-nav__rail edge-nav__rail--right">
        {byEdge('right').map((item) => (
          <EdgeButton key={item.id} item={item} active={activeId === item.id} onNavigate={onNavigate} />
        ))}
      </div>
      <div className="edge-nav__rail edge-nav__rail--bottom">
        {byEdge('bottom').map((item) => (
          <EdgeButton key={item.id} item={item} active={activeId === item.id} onNavigate={onNavigate} />
        ))}
      </div>
      <div className="edge-nav__rail edge-nav__rail--left">
        {byEdge('left').map((item) => (
          <EdgeButton key={item.id} item={item} active={activeId === item.id} onNavigate={onNavigate} />
        ))}
      </div>
    </nav>
  )
}

function EdgeButton({ item, active, onNavigate }) {
  return (
    <button
      type="button"
      className={`edge-nav__btn ${active ? 'is-active' : ''}`}
      onClick={() => onNavigate(item.id)}
      aria-current={active ? 'true' : undefined}
      title={item.label}
    >
      <span className="edge-nav__label">{item.label}</span>
    </button>
  )
}
