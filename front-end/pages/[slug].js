import dynamic from 'next/dynamic'
import { Suspense, useEffect, useState } from 'react'

const Schedule = () => {
  const [city, setCity] = useState()
  const [teamName, setTeamName] = useState()
  
  const OppRosterTable = dynamic(() => import('../components/opponentRosterTable.js'), {
    suspense: true,
  });


  useEffect (() => {
    let path = window && window.location.pathname.split('_')
    setCity(path[0].slice(1))
    setTeamName(path[1])
  }, [])
  
  

  


  return (
    <div className="container pt-16 pl-6">
      <OppRosterTable city={city} teamName={teamName} />
    </div>
  )
}

export default Schedule