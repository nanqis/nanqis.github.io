import './PrincipleBar.css'
import { principleText } from '../data/placeholders'

export default function PrincipleBar() {
  return (
    <aside className="principle-bar" role="note" aria-label="My principle">
      <span className="principle-bar__tag mono">{'// PRINCIPLE'}</span>
      <p className="principle-bar__text">{principleText}</p>
    </aside>
  )
}
