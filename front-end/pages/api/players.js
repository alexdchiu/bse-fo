import axios from 'axios'

const getPlayerProfile = async (req, res) => {
  // boston celtics

  // console.log('222', req.query.id)
  const team_id = '583eccfa-fb46-11e1-82cb-f4ce4684ea4c'
  // jason tatum
  const player_id = req.query.id 
  const language_code = 'en'
  const access_level = 'trial'
  const version = 'v7'
  const format = 'json'
  const key = `${process.env.SPORTSRADAR_API_KEY}`

  const url = `https://api.sportradar.com/nba/${access_level}/${version}/${language_code}/players/${player_id}/profile.${format}?api_key=${key}`

  const data = await axios.get(url).then((response) => {
    return response.data
  })

  console.log('hihi', data)
  res.json(data)

}
  
export default getPlayerProfile