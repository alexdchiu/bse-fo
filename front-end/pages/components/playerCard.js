import axios from 'axios'
import {useState, useEffect} from 'react'


// import {playerDetails, allPlayers} from '../api/playerProfile'

const PlayerCard = () => {
    const [playerData, setPlayerData] = useState()
    
    useEffect(() => {
        axios.get('api/playerProfile').then((response) => {setPlayerData(response)})
    }, []
    )

    const playerDetails = playerData?.data.playerDetails
    const allPlayers = playerData?.data.allPlayers
    const currFirstName = playerDetails?.first_name
    const currLastName = playerDetails?.last_name
    const currFullName = playerDetails?.full_name

    // console.log(playerDetails)


    var newArray = allPlayers?.filter(function (el)
    {
      return (
        el.firstName === currFirstName &&
        el.lastName === currLastName)
    }
    );

    var currID = newArray&&newArray[0].personId

    const headshotURL = `https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${currID}.png`

    let heightFt = Math.floor(playerDetails?.height/12)
    let heightInches = playerDetails?.height - heightFt*12


  return (
    
<div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div className="flex justify-end px-4 pt-4">
        {/* <button id="dropdownButton" data-dropdown-toggle="dropdownId" className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
            <span className="sr-only">Open dropdown</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg>
        </button> */}
        {/* <!-- Dropdown menu --> */}
        {/* <div id="dropdown" className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul className="py-2" aria-labelledby="dropdownButton">
            <li>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
            </li>
            <li>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</a>
            </li>
            <li>
                <a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
            </li>
            </ul>
        </div> */}
    </div>
    <div className="flex flex-col items-center pb-10">
        <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={`${headshotURL}`} alt="Bonnie image"/>
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {currFullName}
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
            #{playerDetails?.jersey_number} / {playerDetails?.primary_position}
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400">
            {heightFt}'{heightInches}" / {playerDetails?.weight}
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400">
            Born: {playerDetails?.birthdate} /  {playerDetails?.birth_place}
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400">
            Draft: {playerDetails?.draft.year} - {playerDetails?.draft.round} / {playerDetails?.draft.pick} ({playerDetails?.college})
        </span>
        <div className="flex mt-4 space-x-3 md:mt-6">
            <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">See Career Stats</a>
            {/* <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Message</a> */}
        </div>
    </div>
</div>

  )
}

export default PlayerCard