import axios from 'axios'


const currTeamRoster = async (req, res) => {
  const team_id = '583ec9d6-fb46-11e1-82cb-f4ce4684ea4c'
  const language_code = 'en'
  const key = `${process.env.NEXT_PUBLIC_SPORTSRADAR_API_KEY}`

  const url = `http://api.sportradar.us/nba/trial/v7/${language_code}/teams/${team_id}/profile.json?api_key=${key}`
  
  const delay = ms => new Promise(res => setTimeout(res, ms));

  await delay(2000)

  const data = await axios.get(url).then((response) => {
    return response.data
  })

  res.json({
    currTeam: data
  })
}

export default currTeamRoster