import axios from 'axios'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

import teamProfile from '../../sample_api_responses/teamProfile'


const Roster = () => {
  // axios.get('/api/players').then((data) => {
  //   console.log(data)
  // })
  const PlayerCard = dynamic(() => import('./components/playerCard.js'), {
    suspense: true,
  });
  const RosterTable = dynamic(() => import('./components/rosterTable'), {
    suspense: true,
  });
  
  return <div>
    <Suspense fallback={<div>Loading...</div>}>
      <PlayerCard />
    </Suspense>
    <Suspense fallback={<div>Loading...</div>}>
      <RosterTable />
    </Suspense>
  </div>
  
}

export default Roster