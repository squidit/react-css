import './sq-social-connect.component.scoped.scss'

export type SocialMediaIcon = {
  socialNetwork: string
  icon: React.ReactElement
  bgColor: string
  image: string
  name: string
  id: string
}

const SqSocialConnect = ({ profiles }) => {
  return (
    <div className="social-connect">
      {profiles.map((profile, index) => (
        <div key={profile.id || index} className="profile-container">
          <div className="profile-wrapper" style={{ backgroundColor: profile.bgColor }}>
            <img src={profile.image} alt={`${profile.name} profile`} className="profile-image" />
            <div className="icon-container">
              <i className="fa-brands fa-instagram gray-light"></i>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default SqSocialConnect
