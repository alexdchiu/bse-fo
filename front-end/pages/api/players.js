import axios from 'axios'

const getPlayerProfile = (req, res) => {
  // boston celtics
  const team_id = '583eccfa-fb46-11e1-82cb-f4ce4684ea4c'
  // jason tatum
  const player_id = '98136da3-452f-49dc-a794-1ee9c76443f2' 
  const language_code = 'en'
  const access_level = 'trial'
  const version = 'v7'
  const format = 'json'
  const key = 'k2zgd4sf7qnapkupmuby5chm'

  const url = `https://api.sportradar.com/nba/${access_level}/${version}/${language_code}/players/${player_id}/profile.${format}?api_key=${key}`




  axios.get(url).then((response) => {
    // const status = response.status
    // res.json(data)
    res.json(response.data)
  })
  console.log('hi')

}
  
export default getPlayerProfile