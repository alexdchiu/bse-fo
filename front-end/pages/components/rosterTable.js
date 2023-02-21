import {teamStats} from '../api/seasonalStats'
import dynamic from 'next/dynamic'
import {useState, useEffect, Suspense} from 'react'
import axios from 'axios'
// import {PlayerCard} from './playerCard'

const PlayerRow = (data) => {
  // console.log(data)

  const handleSelect = () => {
    data.setSelectedPlayer(data.player)
    data.setShowModal(!data.showModal)
  }

  var ppg = data.player.average.points.toFixed(1);
  var rpg = data.player.average.rebounds.toFixed(1)
  var apg = data.player.average.assists.toFixed(1)
  var spg = data.player.average.steals.toFixed(1)
  var bpg = data.player.average.blocks.toFixed(1)
  var topg = data.player.average.turnovers.toFixed(1)
  var fgPct = (data.player.total.field_goals_pct*100).toFixed(2)
  var threePtPct = (data.player.total.three_points_pct*100).toFixed(2)
  var ftPct = (data.player.total.free_throws_pct*100).toFixed(2)
  var tsPct = (data.player.total.true_shooting_pct*100).toFixed(2)

  return (
 
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {/* <a href="#">{data.player.full_name}</a> */}
        <button onClick={handleSelect}>{data.player.full_name}</button>

      </th>
      <td className="px-6 py-4">
        {data.player.total.games_played}
      </td>
      <td className="px-6 py-4">
        {data.player.total.games_started}
      </td>
      <td className="px-6 py-4">
        {data.player.average.minutes}
      </td>
      <td className="px-6 py-4">
        {ppg}
      </td>
      <td className="px-6 py-4">
        {rpg}
      </td>
      <td className="px-6 py-4">
        {apg}
      </td>
      <td className="px-6 py-4">
        {spg}
      </td>
      <td className="px-6 py-4">
        {bpg}
      </td>
      <td className="px-6 py-4">
        {topg}
      </td>
      <td className="px-6 py-4">
        {/* {data.player.total.field_goals_pct*100}%  */}
        {fgPct}%
      </td>
      <td className="px-6 py-4">
        {threePtPct}%
      </td>
      <td className="px-6 py-4">
        {ftPct}%
      </td>
      <td className="px-6 py-4">
        {tsPct}%
      </td>
      <td className="px-6 py-4">
        {data.player.total.plus - data.player.total.minus > 0 && '+'}{data.player.total.plus - data.player.total.minus}
      </td>
  </tr>

    
  )
}

const rosterTable = () => {
  const playersData = Object.values(teamStats.players)
  const [currRoster, setCurrRoster] = useState()
  const [showModal, setShowModal] = useState(false)
  const [selectedPlayer, setSelectedPlayer] = useState()

  const PlayerCard = dynamic(() => import('./playerCard'), {
    suspense: true,
  });

  useEffect(() => {
    axios.get('api/getCurrentRoster').then((response) => {
      setCurrRoster(response.data.currTeam.players)
    })
  }, [])

  // console.log('allTeams', allTeams)

  const click = (() => {
    setShowModal(true)
  })

  const currRosterIDs = []
  const currRosterNames = []

  for (let i = 0; i < currRoster?.length; i++) {
    currRosterIDs.push(currRoster[i].id)
    let name = currRoster[i].full_name
    currRosterNames.push(name)
  }

  // console.log(currRosterNames)

  var currPlayersData = playersData?.filter(
    function(el) {
      return currRoster?.find(currPlayer => {
        return currPlayer.id === el.id
      })
    }
  )

  // console.log(currPlayersData, playersData, currRoster)
  // console.log('selected player', selectedPlayer)
  return (
    
<div className="relative overflow-x-auto shadow-md sm:rounded-lg pt-14">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Player
                </th>
                <th scope="col" className="px-6 py-3">
                    GP
                </th>
                <th scope="col" className="px-6 py-3">
                    GS
                </th>
                <th scope="col" className="px-6 py-3">
                    MPG
                </th>
                <th scope="col" className="px-6 py-3">
                    PPG
                </th>
                <th scope="col" className="px-6 py-3">
                    RPG
                </th>
                <th scope="col" className="px-6 py-3">
                    APG
                </th>
                <th scope="col" className="px-6 py-3">
                    SPG
                </th>
                <th scope="col" className="px-6 py-3">
                    BPG
                </th>
                <th scope="col" className="px-6 py-3">
                    TOPG
                </th>
                <th scope="col" className="px-6 py-3">
                    FG%
                </th>
                <th scope="col" className="px-6 py-3">
                    3P%
                </th>
                <th scope="col" className="px-6 py-3">
                    FT%
                </th>
                <th scope="col" className="px-6 py-3">
                    TS%
                </th>
                <th scope="col" className="px-6 py-3">
                    +/-
                </th>
            </tr>
        </thead>
        <tbody>
            {currPlayersData && currPlayersData.map((player) => 
              <PlayerRow
                key = {player.id}
                player = {player} 
                setShowModal={setShowModal}
                showModal={showModal}
                setSelectedPlayer={setSelectedPlayer}
                />
              )}
        </tbody>
    </table>
    {showModal &&
      <PlayerCard  
      setShowModal={setShowModal}
      showModal={showModal}
      selectedPlayer={selectedPlayer}
      setSelectedPlayer={setSelectedPlayer} />}
      {/* <PlayerModal />} */}
  </div>

  )
}

export default rosterTable