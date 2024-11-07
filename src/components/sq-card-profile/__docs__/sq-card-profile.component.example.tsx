'use client'

import SqCardProfile from '../sq-card-profile.component'
import { socialNetworkMock } from '../../../mocks/sq-social-networks.mock'

const SqCardProfileExample: React.FC = () => {
  const type = 'instagram'

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '200px',
      }}
    >
      <SqCardProfile socialNetworkObject={socialNetworkMock} type={type} />
    </div>
  )
}

export default SqCardProfileExample
