import axios from 'axios'
import {useState, useEffect} from 'react'


// import {playerDetails, allPlayers} from '../api/playerProfile'

const PlayerCard = (data) => {
    // console.log('playerCard data', data)
    
    const [playerData, setPlayerData] = useState()
    
    useEffect(() => {
        axios.get('api/playerProfile').then((response) => {setPlayerData(response)})
    }, []
    )

    const handleClose = () => {
        data.setShowModal(!data.showModal)
      }

    const handleSeePlayerCareerStats = () => {
        data.setShowRosterTable(!data.showRosterTable)
        data.setSelectedPlayer(data.player)
        data.setShowModal(!data.showModal)
        data.setShowPlayerTable(!data.showPlayerTable)
      }

    // console.log('1234', data.playerProfile.data)

    const playerDetails = data.playerProfile?.data
    const allPlayers = playerData?.data.allPlayers
    const currFirstName = playerDetails?.first_name
    const currLastName = playerDetails?.last_name
    const currFullName = playerDetails?.full_name

    // console.log(playerDetails)

    // console.log(data)


    var newArray = allPlayers?.filter(function (el)
    {
      return (
        el.firstName === currFirstName &&
        el.lastName === currLastName)
    }
    );

    var currID = newArray&&newArray[0].personId

    // console.log(currID)

    const headshotURL = currID && `https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${currID}.png`

    let heightFt = Math.floor(playerDetails?.height/12)
    let heightInches = playerDetails?.height - heightFt*12


  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-x-1/3 md:inset-y-1/4 h-modal md:h-full">
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex justify-end px-4 pt-4 bg-slate-700">
                <button id="dropdownButton" data-dropdown-toggle="dropdownId" className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button" onClick={handleClose}>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
            </div>
            <div className="flex flex-col items-center pb-10 bg-slate-700">
                <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={`${headshotURL}`} alt="Bonnie image"/>
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                    {currFullName}
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-300">
                    #{playerDetails?.jersey_number} / {playerDetails?.primary_position}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-300">
                    {heightFt}'{heightInches}" / {playerDetails?.weight}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-300">
                    Born: {playerDetails?.birthdate} /  {playerDetails?.birth_place}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-300">
                    Draft: {playerDetails?.draft.year} - {playerDetails?.draft.round} / {playerDetails?.draft.pick} ({playerDetails?.college})
                </span>
                <div className="flex mt-4 space-x-3 md:mt-6">
                    <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleSeePlayerCareerStats}>See Career Stats</button>
                    {/* <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Message</a> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default PlayerCard