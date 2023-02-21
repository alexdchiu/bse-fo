import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import RadarGraph from './components/radarGraph'
import PlayerSelect from './components/playerSelect'

const Comparison = ({currRoster, seasonStats}) => {
  return (
    <div className='pt-14'>
      {/* <RadarGraph currRoster={currRoster} seasonStats={seasonStats}  /> */}
      <PlayerSelect currRoster={currRoster} seasonStats={seasonStats}  />
    </div>
  )
}

export default Comparison