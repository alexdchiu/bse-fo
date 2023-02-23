import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const Schedule = () => {
  const Timeline = dynamic(() => import('../components/scheduleTimeline.js'), {
    suspense: true,
  });

  return (
    <div className="container pt-16 pl-6">
      <Timeline />
    </div>
  )
}

export default Schedule