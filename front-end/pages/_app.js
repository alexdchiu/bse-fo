import '../styles/globals.css'
import Layout from '../components/layout'
import axios from 'axios'


function MyApp({ Component,
   pageProps: {...props} 
  }) {
  console.log('fadsfdsafaaaaaaaa', props)
    return (
        <Layout>
           
              <Component {...props} />
        </Layout>
    )
}


export async function getStaticProps(ctx) {

      const delay = ms => new Promise(res => setTimeout(res, ms));
      const season_year = '2022'
      const season_type = 'REG'
      const seasonStatsURL = `http://api.sportradar.us/nba/trial/v7/${language_code}/seasons/${season_year}/${season_type}/teams/${team_id}/statistics.json?api_key=${process.env.NEXT_PUBLIC_SPORTSRADAR_API_KEY}`

      const team_id = '583ec9d6-fb46-11e1-82cb-f4ce4684ea4c'
      const language_code = 'en'
      const key = `${process.env.NEXT_PUBLIC_SPORTSRADAR_API_KEY}`
    
      const currRosterURL = `http://api.sportradar.us/nba/trial/v7/${language_code}/teams/${team_id}/profile.json?api_key=${key}`
      
      const [firstResponse, secondResponse, thirdResponse] = await Promise.all([axios.get(currRosterURL),
        await delay(2000),
        axios.get(seasonStatsURL)])

        return {
          props: {
            currRoster: firstResponse?.data.data.currTeam?.players,
            seasonStats: thirdResponse?.data.data
          }
        }   
}

export default MyApp
