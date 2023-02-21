const TeamRow = ({team, teamID}) => {
  console.log(teamID)
  return (
    <li a href="/opponent" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem" value={teamID}>
    {team}
  </li>
  )
}

const AllTeams = ({teamNames, teamIDs}) => {
  // console.log('teamNames', teamNames)
  // console.log('teamIDs', teamIDs)
  return (
    <div>
      <ul>
        {teamNames && teamNames.map((team) => 
          <TeamRow team={team} teamID={teamIDs[team]} key={teamIDs[team]}/>
        )}
      </ul>
    </div>
  )
}

export default AllTeams