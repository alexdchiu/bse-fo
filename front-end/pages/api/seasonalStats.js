import axios from 'axios'

import {seasonalStats} from '../../../sample_api_responses/seasonalStats'

const teamStats = async (req, res) => {
  const data = seasonalStats

  res.json({
    data: data
  })
}

export default teamStats
