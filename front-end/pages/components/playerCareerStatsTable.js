import axios from 'axios'
import {useState, useEffect} from 'react'

const SeasonRow = (data) => {
  let seasonData = data?.season
  // console.log(seasonData)

  var ppg = seasonData.teams[0].average.points.toFixed(1);
  var rpg = seasonData.teams[0].average.rebounds.toFixed(1)
  var apg = seasonData.teams[0].average.assists.toFixed(1)
  var spg = seasonData.teams[0].average.steals.toFixed(1)
  var bpg = seasonData.teams[0].average.blocks.toFixed(1)
  var topg = seasonData.teams[0].average.turnovers.toFixed(1)
  var fgPct = (seasonData.teams[0].total.field_goals_pct*100).toFixed(2)
  var threePtPct = (seasonData.teams[0].total.three_points_pct*100).toFixed(2)
  var ftPct = (seasonData.teams[0].total.free_throws_pct*100).toFixed(2)
  var tsPct = (seasonData.teams[0].total.true_shooting_pct*100).toFixed(2)


  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        <a href="#">{seasonData.year}</a>
      </th>
      <td className="px-6 py-4">
        {seasonData.teams[0].alias}
      </td>
      <td className="px-6 py-4">
        {seasonData.teams[0].total.games_played}
      </td>
      <td className="px-6 py-4">
        {seasonData.teams[0].total.games_started}
      </td>
      <td className="px-6 py-4">
        {seasonData.teams[0].average.minutes}
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
      {seasonData.teams[0].total.plus - seasonData.teams[0].total.minus > 0 && '+'}{seasonData.teams[0].total.plus - seasonData.teams[0].total.minus}
      </td>
  </tr>
  )
}



const playerCareerTable = () => {
  const [playerData, setPlayerData] = useState()
    
    useEffect(() => {
        axios.get('api/playerProfile').then((response) => {setPlayerData(response)})
    }, []
    )

  let playerCareerStats = playerData?.data.playerDetails.seasons

  console.log(playerData?.data.playerDetails)
  let playerDetails = playerData?.data.playerDetails
  let playerName = playerDetails?.full_name
  
  return (
    
<div className="relative overflow-x-auto shadow-md sm:rounded-lg pt-14">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <caption class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
              {playerName}
            <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Browse a list of Flowbite products designed to help you work and play, stay organized, get answers, keep in touch, grow your business, and more.</p>
        </caption>
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Season
                </th>
                <th scope="col" className="px-6 py-3">
                    Team
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

            {playerCareerStats && playerCareerStats.map((season) => 
              <SeasonRow
                key = {season.id}
                season = {season} 
                />
              )}
        </tbody>
    </table>
</div>

  )
}

export default playerCareerTable