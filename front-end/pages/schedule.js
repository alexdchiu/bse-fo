import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const Schedule = () => {
  const Timeline = dynamic(() => import('./components/scheduleTimeline.js'), {
    suspense: true,
  });

  return (
    <div>
      <Timeline />
    </div>
  )
}

export default Schedule