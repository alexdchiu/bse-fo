import {schedule} from '../../../sample_api_responses/schedule'

const currSchedule = async (req, res) => {
  const data = schedule

  res.json({
    data
  })
}

export default currSchedule