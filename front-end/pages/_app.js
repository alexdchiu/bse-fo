import '../styles/globals.css'
import Layout from './components/layout'
import axios from 'axios'
import {useState, useEffect} from 'react'


function MyApp({ Component, pageProps }) {
    const [currRoster, setCurrRoster] = useState()
    const [seasonStats, setSeasonStats] = useState()

    useEffect(() => {
    axios.get('api/getCurrentRoster').then((response) => {
      setCurrRoster(response.data.currTeam.players)
    })
    axios.get('api/seasonalStats').then((response) => {
      setSeasonStats(response.data.data)
    })
    }, [])

    

    return (
        <Layout>
            <Component {...pageProps} currRoster={currRoster} seasonStats={seasonStats} />
        </Layout>
    )
}

export default MyApp