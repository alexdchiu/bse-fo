import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import RadarGraph from './components/radarGraph'

const Comparison = () => {
  return (
    <div>
      <RadarGraph />
    </div>
  )
}

export default Comparison