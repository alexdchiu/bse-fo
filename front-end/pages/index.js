import axios from 'axios'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './_app'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import {useState, useEffect} from 'react'


export default function Index () {
  // axios.get('/api/players').then((data) => {
  //   console.log(data)
  // })
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


  // console.log('conf', conferences)
  console.log('div', divisions)
  // console.log('divnames', divisionNames)
  // console.log('teamnames', teamNames)
  console.log(teamNames, teamIDs, Object.keys(teamIDs).length)

  const NavBar = dynamic(() => import ('./components/navBar.js'))
  
  return <div>
    {/* <h1 className="text-3xl font-bold underline">Home page</h1> */}
    <NavBar />
  </div>
}