import {useState, useEffect, Suspense } from 'react'
import dynamic from 'next/dynamic'
import axios from 'axios'

const PlayerOption = ({player, select}) => {
  // console.log(player, selectA)
  
  return (
    <li>
    <option className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={select} value={player.id}>{player.full_name}</option>
    </li>
  )
}

const PlayerSelect = ({currRoster, seasonStats}) => {
  const [allTeams, setAllTeams] = useState()
  const [conferences, setConferences] = useState()
  const [openA, setOpenA] = useState(false)
  const [openB, setOpenB] = useState(false)
  const [playerA, setPlayerA] = useState()
  const [playerB, setPlayerB] = useState()
  const [playerAName, setPlayerAName] = useState()
  const [playerAStats, setPlayerAStats] = useState()
  const [playerBName, setPlayerBName] = useState()
  const [radarGraph, setRadarGraph] = useState()
  // const [openConfA, setOpenConfA] = useState(false)
  // const [openTeamA, setOpenTeamA] = useState(false)
  const [players, setPlayers] = useState({})

  const RadarGraph = dynamic(() => import('./radarGraph'), {
    suspense: true,
  });

  const handleOpenA = () => {
    setOpenA(!openA)
  }
  const handleOpenB = () => {
    setOpenB(!openB)
  }

  const selectA = (e) => {
    setOpenA(!openA)
    var eVal = e.target.value
    setPlayerA(eVal)
    
    var playerObj = currRoster.filter(function (el) {
      return el.id === eVal
    })
    console.log(playerObj)
    setPlayerAName(playerObj[0].full_name)

    setPlayers({...players, 'A': playerObj[0]})
  }

  const selectB = (e) => {
    setOpenB(!openB)
    var eVal = e.target.value
    setPlayerB(eVal)
    
    var playerObj = currRoster.filter(function (el) {
      return el.id === eVal
    })
    console.log(playerObj)
    setPlayerBName(playerObj[0].full_name)

    setPlayers({...players, 'B': playerObj[0]})
  }

  // const handleOpenConfA = () => {
  //   setOpenConfA(!openConfA)
  // }

  // const handleOpenTeamA = () => {
  //   setOpenTeamA(!openTeamA)
  // }

  useEffect(() => {
    axios.get('api/allTeams').then((response) => {
      setAllTeams(response.data)
    })
  }, [])

  // console.log(allTeams, conferences)
  // console.log(currRoster)
  // console.log('playerA', playerAName, 'playerB', playerBName)

  // console.log('ss', seasonStats?.players)
  // console.log('111', players, seasonStats)


  return (
    <>
      <div>
      <button id="multiLevelDropdownButton" data-dropdown-toggle="dropdown" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" onClick={handleOpenA}>{!playerA && 'Select Player A'}{playerA && playerAName} (Blue) <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>

      {openA && 
      <div id="dropdown" className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="multiLevelDropdownButton">
            {/* <li>
              <button id="doubleDropdownButton" data-dropdown-toggle="doubleDropdown" data-dropdown-placement="right-start" type="button" className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={handleOpenConfA}>Conference<svg aria-hidden="true" className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg></button>
                {openConfA &&
                  <div id="doubleDropdown" className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="doubleDropdownButton">
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Eastern</a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Western</a>
                    </li>
                  </ul>
              </div>}
            </li> */}
            {currRoster && currRoster.map((player) =>
              <PlayerOption key={player.id} player={player} select={selectA} />
            )}
          </ul>
        </div>
        }
        {/* <div>
          <button id="multiLevelDropdownButton" data-dropdown-toggle="dropdown" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" onClick={handleOpenB}>Select Player B (Gray) <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>

          {openB && 
          <div id="dropdown" className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="multiLevelDropdownButton">
                {currRoster && currRoster.map((player) =>
                  <PlayerOption data={player} />
                )}
              </ul>
          </div>
          }
        </div> */}
      </div>

      <div>
      <button id="multiLevelDropdownButton" data-dropdown-toggle="dropdown" className="text-white bg-gray-700 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-gray-500 dark:hover:bg-gray-500 dark:focus:ring-gray-800" type="button" onClick={handleOpenB}>{!playerB && 'Select Player B'}{playerB && playerBName} (Gray) <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>

      {openB && 
      <div id="dropdown" className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="multiLevelDropdownButton">
            {currRoster && currRoster.map((player) =>
              <PlayerOption key={player.id} player={player} select={selectB} />
            )}
          </ul>
        </div>
        }
      </div>
      {Object.keys(players).length > 1 && <RadarGraph players={players} seasonStats={seasonStats} />}
    </>
    
  )
}


export default PlayerSelect