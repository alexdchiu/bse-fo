import axios from 'axios'

import {teamProfile} from '../../../sample_api_responses/teamProfile'


const currTeamRoster = async (req, res) => {
  const currTeam = teamProfile

  res.json({
    currTeam: currTeam
  })
}

export default currTeamRoster