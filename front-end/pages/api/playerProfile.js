import axios from 'axios'

import {playerProfile} from '../../../sample_api_responses/playerProfile'

const playerDetails = playerProfile

const playerHeadShotIDs = (req, res) => {
  const url = "https://data.nba.net/data/10s/prod/v1/2022/players.json"

  axios.get(url).then((response) => {
    res.json(response.data)
  })
}


export {playerDetails, playerHeadShotIDs}