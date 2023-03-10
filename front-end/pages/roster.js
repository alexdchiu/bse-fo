import axios from 'axios'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'



const Roster = ({currRoster, seasonStats}) => {
  console.log(currRoster)
  // axios.get('/api/players').then((data) => {
  //   console.log(data)
  // })
  // let modal = document.getElementById('modal')

  // const PlayerCard = dynamic(() => import('./components/playerCard.js'), {
  //   suspense: true,
  // });
  // console.log('a123', currRoster, seasonStats)
  const RosterTable = dynamic(() => import('../components/rosterTable'), {
    suspense: true,
  });
  // const PlayerCareerStatsTable = dynamic(() => import('./components/playerCareerStatsTable'), {
  //   suspense: true,
  // });
  
  return <div>
    
    <Suspense fallback={<div>Loading...</div>}>
      <RosterTable currRoster={currRoster} seasonStats={seasonStats} />
    </Suspense>
    {/* <div id="modal">
      <Suspense fallback={<div>Loading...</div>}>
        <PlayerCard />
      </Suspense>
    </div> */}
    {/* <Suspense fallback={<div>Loading...</div>}>
      <PlayerCareerStatsTable />
    </Suspense> */}
  </div>
  
}

export default Roster