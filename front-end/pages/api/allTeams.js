import axios from 'axios'

import {currStandings} from '../../../sample_api_responses/standings'


const standings = async (req, res) => {
  let standings = currStandings

  res.json({
    standings
  })
}

export default standings