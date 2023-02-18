import dynamic from 'next/dynamic'
import axios from 'axios'
import {useState, useEffect} from 'react'
const NavBar = dynamic(() => import ('./navBar.js'))

export default function Layout ({children}) {
  const [allTeams, setAllTeams] = useState()
  let conferences = []
  let divisionNames = []
  let divisions = {}
  let teamNames = []
  let teamIDs = {}

  useEffect(() => {
    axios.get('api/allTeams').then((response) => {
      setAllTeams(response.data)
    })
  }, [])


  for (let i = 0; i < allTeams?.standings.conferences.length; i++) {
    conferences.push(allTeams.standings.conferences[i].alias)
    for (let j = 0; j < allTeams.standings.conferences[i].divisions.length; j++) {
      divisions[allTeams.standings.conferences[i].divisions[j].name] = allTeams.standings.conferences[i].divisions[j].teams
      divisionNames.push(allTeams.standings.conferences[i].divisions[j].name)
    }
  }

  for (let i = 0; i < divisionNames?.length; i++) {
    let division = divisionNames[i]
    for (let j = 0; j < divisionNames.length; j++) {
      let market = divisions[division][j]?.market
      let name = divisions[division][j]?.name
      let id = divisions[division][j]?.id
      if (market && name) {
        teamNames.push(`${market} ${name}`)
        teamIDs[`${market} ${name}`] = id
      }
    }
  }

  teamNames.sort()


  return (
    <>
    <NavBar teamNames={teamNames} teamIDs={teamIDs}>{children}</NavBar>
    </>
  )
}