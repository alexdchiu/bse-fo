import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const Schedule = () => {
  const OppRosterTable = dynamic(() => import('./components/opponentRosterTable.js'), {
    suspense: true,
  });

  return (
    <div className="container pt-16 pl-6">
      <OppRosterTable />
    </div>
  )
}

export default Schedule