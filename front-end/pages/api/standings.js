import {currStandings} from '../../../sample_api_responses/standings'

const standings = async (req, res) => {
  const data = currStandings

  res.json({
    data
  })
}

export default standings