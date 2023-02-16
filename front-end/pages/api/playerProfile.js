import axios from 'axios'

import {playerProfile} from '../../../sample_api_responses/playerProfile'



const playerData = async (req, res) => {
  const playerDetails = playerProfile
  
  const url = "https://data.nba.net/data/10s/prod/v1/2022/players.json"

  const allPlayers = await axios.get(url).then((response) => {
    return response.data.league.standard
  })

  res.json({
    playerDetails,
    allPlayers: allPlayers,
  })
}


export default playerData

