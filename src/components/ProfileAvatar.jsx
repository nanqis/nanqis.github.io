import profilePhoto from '../assets/profile.jpg'
import './ProfileAvatar.css'

export default function ProfileAvatar({ onOpen }) {
  return (
    <button
      type="button"
      className="profile-avatar"
      onClick={onOpen}
      aria-haspopup="dialog"
      aria-label="Open about me"
      title="About me"
    >
      <span className="profile-avatar__ring" aria-hidden />
      <img
        className="profile-avatar__face"
        src={profilePhoto}
        alt="Hannan Balqis"
        width={120}
        height={120}
      />
      <span className="profile-avatar__hint mono">click → about()</span>
    </button>
  )
}
