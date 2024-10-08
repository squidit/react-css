import SqSocialConnect, { SocialMediaIcon } from '../sq-social-connect.component'

const exampleProfiles: SocialMediaIcon[] = [
  {
    name: 'Jane Doe',
    image: 'https://randomuser.me/api/portraits/women/3.jpg',
    id: '1',
    icon: <i className="fa-brands fa-instagram gray-light"></i>,
    bgColor: '#E1306C',
    socialNetwork: 'instagram',
  },
  {
    name: 'John Smith',
    image: 'https://via.placeholder.com/50x50?text=JS',
    id: '1',
    icon: <i className="fa-brands fa-instagram gray-light"></i>,
    bgColor: '#E1306C',
    socialNetwork: 'instagram',
  },
]

const SqSocialConnectExample = () => {
  return (
    <div style={{ padding: '20px', display: 'flex', justifyContent: 'center' }}>
      <SqSocialConnect profiles={exampleProfiles} />
    </div>
  )
}

export default SqSocialConnectExample
