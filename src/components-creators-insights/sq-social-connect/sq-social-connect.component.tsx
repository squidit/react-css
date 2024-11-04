import './sq-social-connect.component.scoped.scss'

export type SocialMediaIcon = {
  icon: React.ReactElement
  bgColor: string
  image: string
  name: string
  id: string
  socialNetwork: SocialNetwork
}
export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  profiles?: SocialMediaIcon[]
}

type SocialNetwork = 'instagram' | 'tiktok' | 'twitter' | 'youtube'

const SqSocialConnect: React.FC<Props> = ({ profiles = [], className = '', ...props }) => {
  return (
    <div className={`social-connect ${className}`} {...props}>
      {profiles?.map((profile, index) => (
        <div key={profile.id || index} className={`profile-container ${profile.socialNetwork}`}>
          <div className="profile-wrapper">
            <img src={profile.image} alt={`${profile.name} profile`} className="profile-image" />
            <div className="icon-container" style={{ backgroundColor: profile.bgColor }}>
              {profile.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default SqSocialConnect
