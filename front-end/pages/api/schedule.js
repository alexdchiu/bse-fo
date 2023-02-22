import {schedule} from '../../../sample_api_responses/schedule'

const currSchedule = async (req, res) => {
  const language_code = 'en'
  const season_year = '2022'
  const season_type = 'REG'
  const key = `${process.env.NEXT_PUBLIC_SPORTSRADAR_API_KEY}`

  const url = `http://api.sportradar.us/nba/trial/v7/${language_code}/games/${season_year}/${season_type}/schedule.json?api_key=${key}`
  
  const data = schedule

  const delay = ms => new Promise(res => setTimeout(res, ms));

  await delay(1000)

  res.json({
    data
  })
}

export default currSchedule