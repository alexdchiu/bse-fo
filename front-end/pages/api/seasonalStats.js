import axios from 'axios'

import {seasonalStats} from '../../../sample_api_responses/seasonalStats'

const teamStats = async (req, res) => {
  const language_code = 'en'
  const season_year = '2022'
  const season_type = 'REG'
  const team_id = '583ec9d6-fb46-11e1-82cb-f4ce4684ea4c'
  const key = `${process.env.NEXT_PUBLIC_SPORTSRADAR_API_KEY}`

  const delay = ms => new Promise(res => setTimeout(res, ms));

  await delay(1000)

  const url = `http://api.sportradar.us/nba/trial/v7/${language_code}/seasons/${season_year}/${season_type}/teams/${team_id}/statistics.json?api_key=${key}`


  const data = await axios.get(url).then((response) => {
    return response.data
  })
  
  res.json(data)
}

export default teamStats
