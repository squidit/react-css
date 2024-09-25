import SqSocialConnect from '../sq-social-connect.component'

const exampleProfiles = [
  {
    name: 'Jane Doe',
    image: 'https://randomuser.me/api/portraits/women/3.jpg',
    id: '1',
    socialNetwork: 'Instagram',
    icon: <i className="fa-brands fa-instagram"></i>,
    bgColor: '#E1306C',
  },
  {
    name: 'John Smith',
    image: 'https://via.placeholder.com/50x50?text=JS',
    id: '1',
    socialNetwork: 'Instagram',
    icon: <i className="fa-brands fa-instagram"></i>,
    bgColor: '#E1306C',
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
