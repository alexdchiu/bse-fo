import teamProfile from '../../../sample_api_responses/teamProfile'

import { seasonalStats } from '../../../sample_api_responses/seasonalStats'

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
        {data.player.average.efficiency}
      </td>
      <td className="px-6 py-4">
        {data.player.total.plus - data.player.total.minus}
      </td>
  </tr>
  )
}



const rosterTable = () => {
  // const teamData = teamProfile.players
  // console.log(seasonalStats)
  const playersData = Object.values(seasonalStats.players)
  // console.log(teamData, playersData)
  
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
                    EFF
                </th>
                <th scope="col" className="px-6 py-3">
                    +/-
                </th>
            </tr>
        </thead>
        <tbody>
            {/* <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple MacBook Pro 17"
                </th>
                <td className="px-6 py-4">
                    Sliver
                </td>
                <td className="px-6 py-4">
                    Laptop
                </td>
                <td className="px-6 py-4">
                    $2999
                </td>
                <td className="px-6 py-4 text-right">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Microsoft Surface Pro
                </th>
                <td className="px-6 py-4">
                    White
                </td>
                <td className="px-6 py-4">
                    Laptop PC
                </td>
                <td className="px-6 py-4">
                    $1999
                </td>
                <td className="px-6 py-4 text-right">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Magic Mouse 2
                </th>
                <td className="px-6 py-4">
                    Black
                </td>
                <td className="px-6 py-4">
                    Accessories
                </td>
                <td className="px-6 py-4">
                    $99
                </td>
                <td className="px-6 py-4 text-right">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr> */}

            {playersData && playersData.map((player) => 
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