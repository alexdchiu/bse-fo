import '../styles/globals.css'
import Layout from '../components/layout'
import axios from 'axios'


function MyApp({ Component,
   props 
  }) {
    return (
        <Layout>
           
              <Component {...props} />
        </Layout>
    )
}


MyApp.getInitialProps = async (ctx) => {

      const delay = ms => new Promise(res => setTimeout(res, ms));
      await delay(1000)
      const season_year = '2022'
      const season_type = 'REG'
      const team_id = '583ec9d6-fb46-11e1-82cb-f4ce4684ea4c'
      const language_code = 'en'
      const key = `${process.env.NEXT_PUBLIC_SPORTSRADAR_API_KEY}`
      
      const seasonStatsURL = `http://api.sportradar.us/nba/trial/v7/${language_code}/seasons/${season_year}/${season_type}/teams/${team_id}/statistics.json?api_key=${process.env.NEXT_PUBLIC_SPORTSRADAR_API_KEY}`

      const currRosterURL = `http://api.sportradar.us/nba/trial/v7/${language_code}/teams/${team_id}/profile.json?api_key=${key}`
      
      const [firstResponse, secondResponse, thirdResponse] = await Promise.all([axios.get(currRosterURL),
        await delay(1000),
        axios.get(seasonStatsURL)])
        return {
          props: {
            currRoster: firstResponse?.data.players,
            seasonStats: thirdResponse?.data
          }
        }   
}

export default MyApp
