import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import RadarGraph from './components/radarGraph'
import PlayerSelect from './components/playerSelect'

const Comparison = ({currRoster}) => {
  return (
    <div className='pt-14'>
      <RadarGraph currRoster={currRoster}  />
      <PlayerSelect currRoster={currRoster} />
    </div>
  )
}

export default Comparison