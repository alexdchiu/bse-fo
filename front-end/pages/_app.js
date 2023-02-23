import '../styles/globals.css'
import Layout from '../components/layout'
import axios from 'axios'
import {useState, useEffect} from 'react'


function MyApp({ Component, pageProps }) {
    const [currRoster, setCurrRoster] = useState()
    const [seasonStats, setSeasonStats] = useState()
    const [player, setPlayer] = useState()


  console.log('p123',process.env.NEXT_PUBLIC_SPORTSRADAR_API_KEY)

    useEffect(() => {
      const delay = ms => new Promise(res => setTimeout(res, ms));

      async function getData () {
        const [firstResponse, secondResponse, thirdResponse] = await Promise.all([axios.get('/api/getCurrentRoster'),
        await delay(2000),
        axios.get('/api/seasonalStats')])

        setCurrRoster(firstResponse?.data.currTeam?.players)
        setSeasonStats(thirdResponse?.data)

        return {firstResponse: firstResponse, thirdResponse: thirdResponse}
      }

      let responses = getData()



      // axios.get('/api/getCurrentRoster').then((response) => {
      //   setCurrRoster(response?.data.currTeam.players)
      // })
    }, [])

    // useEffect (() => {
    //   axios.get('/api/seasonalStats').then((response) => {
    //     setSeasonStats(response?.data)
    //   })
    // }, [currRoster])


    return (
        <Layout>
            {(currRoster && seasonStats) && 
              <Component {...pageProps} currRoster={currRoster} seasonStats={seasonStats} />
            }
        </Layout>
    )
}

MyApp.getInitialProps = async () => {
  return {props: {}}
}

export default MyApp