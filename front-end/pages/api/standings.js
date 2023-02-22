import axios from 'axios'

const standings = async (req, res) => {
  const language_code = 'en'
  const season_year = '2022'
  const season_type = 'REG'
  const key = `${process.env.NEXT_PUBLIC_SPORTSRADAR_API_KEY}`

  const delay = ms => new Promise(res => setTimeout(res, ms));

  await delay(1000)
  
  const url = `http://api.sportradar.us/nba/trial/v7/${language_code}/seasons/${season_year}/${season_type}/standings.json?api_key=${key}`
  
  const data = await axios.get(url).then((response) => {
    console.log('123', response.data)
    return response.data
  })

  res.json({
    data
  })
}

export default standings