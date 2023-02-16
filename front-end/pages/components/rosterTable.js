import {teamStats} from '../api/seasonalStats'
import {useState, useEffect} from 'react'
import axios from 'axios'

const PlayerRow = (data) => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        <a href="#">{data.player.full_name}</a>
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
        {data.player.average.points}
      </td>
      <td className="px-6 py-4">
        {data.player.average.rebounds}
      </td>
      <td className="px-6 py-4">
        {data.player.average.assists}
      </td>
      <td className="px-6 py-4">
        {data.player.average.steals}
      </td>
      <td className="px-6 py-4">
        {data.player.average.blocks}
      </td>
      <td className="px-6 py-4">
        {data.player.average.turnovers}
      </td>
      <td className="px-6 py-4">
        {data.player.total.field_goals_pct*100}% 
      </td>
      <td className="px-6 py-4">
        {data.player.total.three_points_pct*100}%
      </td>
      <td className="px-6 py-4">
        {data.player.total.free_throws_pct*100}%
      </td>
      <td className="px-6 py-4">
        {data.player.total.true_shooting_pct*100}%
      </td>
      <td className="px-6 py-4">
        {data.player.total.plus - data.player.total.minus}
      </td>
  </tr>
  )
}



const rosterTable = () => {
  const playersData = Object.values(teamStats.players)
  
  const [currRoster, setCurrRoster] = useState()

  useEffect(() => {
    axios.get('api/getCurrentRoster').then((response) => {
      setCurrRoster(response.data.currTeam.players)
    })
  }, [])

  const currRosterIDs = []

  for (let i = 0; i < currRoster?.length; i++) {
    currRosterIDs.push(currRoster[i].id)
  }

  var currPlayersData = playersData?.filter(
    function(el) {
      return currRoster?.find(currPlayer => {
        return currPlayer.id === el.id
      })
    }
  )

  // console.log(currPlayersData, playersData, currRoster)

  return (
    
<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
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
                />
              )}
        </tbody>
    </table>
</div>

  )
}

export default rosterTable