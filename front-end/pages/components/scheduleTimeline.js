import axios from 'axios'
import { useState, useEffect } from 'react'

const TimelineEntry = (game, teamDict) => {
  var date_str = game.game.scheduled
  var options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };
  var formatted = (new Date(date_str)).toLocaleDateString('en-US', options)
  var date_parts = formatted.substring(0, formatted.indexOf(",")).split(" ").reverse().join(" ");
  var formatted_date = date_parts + formatted.substr(formatted.indexOf(",") + 1);
  var awayTeam = game.game.away.name
  var homeTeam = game.game.home.name
  if (homeTeam === "Brooklyn Nets") { 
    var opponent = game.game.away
    var homeGame = true } else { 
    var opponent = game.game.home
    var homeGame = false
  }

  var opponentID = opponent.id
  console.log(teamDict)
  // var opponentWins = teamDict[opponentID].wins
  // var opponentLosses = teamDict[opponentID].losses
  // var opponentConference = teamDict[opponentID].conference
  // var opponentDivision = teamDict[opponentID].division
  // var opponentPointsAgainst = teamDict[opponentID].points_against
  // var opponentPointsFor = teamDict[opponentID].points_for


  // console.log(opponentWins, opponentLosses, opponentConference, opponentDivision, opponentPointsAgainst, opponentPointsFor)

  return (
    <li className="mb-10 ml-6">
      <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
          <svg aria-hidden="true" className="w-3 h-3 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
      </span>
      <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-black">{formatted_date} {homeGame ? null : '| (Away)'}</h3>
      <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{homeGame ? '@' : null} {opponent.name}</time>
      <p className="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
    </li>
  )
}

const timeline = () => {
  const [schedule, setSchedule] = useState()
  const [standings, setStandings] = useState()

  useEffect(() => {
    axios.get('api/schedule').then((response) => 
      {setSchedule(response)})
    axios.get('api/standings').then((response) => 
      {setStandings(response.data.data)})
  }, [])

  let allGames = schedule?.data.data.games

  let netsGames = allGames?.filter(
    function (el) {
      return  el.status === "scheduled" &&
              (el.away.alias === "BKN" | el.home.alias === "BKN")
    }
  )

  // console.log(netsGames)
  let teamDict = {}

  for (let i = 0; i < standings?.conferences.length; i++) {
    var conference = standings.conferences[i]
    var conferenceName = conference.name
    for (let j = 0; j < conference.divisions.length; j++) {
      var division = conference.divisions[j]
      var divisionName = division.name
      for (let k = 0; k < division.teams.length; k++) {
        var team = division.teams[k]
        var teamID = team.id
        teamDict[teamID] = {...team, 'division': divisionName, 'conference': conferenceName}
      }
    }
  }

  return (
    <div>
      <ol className="relative border-l border-gray-200 dark:border-gray-700">                  
        <li className="mb-10 ml-6">            
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg aria-hidden="true" className="w-3 h-3 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Flowbite Application UI v2.0.0 <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">Latest</span></h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on January 13th, 2022</time>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
            <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"><svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd"></path></svg> Download ZIP</a>
        </li>
        {(netsGames && teamDict) && netsGames.map((game) => 
          <TimelineEntry key={game.id} game={game} teamDict={teamDict} />
        )}
        {/* <li className="ml-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg aria-hidden="true" className="w-3 h-3 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
            </span>
            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Flowbite Library v1.2.2</h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 2nd, 2021</time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
        </li> */}
      </ol>
    </div>
  )
}

export default timeline