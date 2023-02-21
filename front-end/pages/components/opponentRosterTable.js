

const OppRosterTable = ({}) => {

  return (
    
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg pt-14">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                  Current Roster
                <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">2022-23 Season Stats for Current Team</p>
            </caption>
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Player
                    </th>
                    <th scope="col" className="px-6 py-3">
                        GP
                    </th>
                    <th scope="col" className="px-6 py-3">
                        GS
                    </th>
                    <th scope="col" className="px-6 py-3">
                        MPG
                    </th>
                    <th scope="col" className="px-6 py-3">
                        PPG
                    </th>
                    <th scope="col" className="px-6 py-3">
                        RPG
                    </th>
                    <th scope="col" className="px-6 py-3">
                        APG
                    </th>
                    <th scope="col" className="px-6 py-3">
                        SPG
                    </th>
                    <th scope="col" className="px-6 py-3">
                        BPG
                    </th>
                    <th scope="col" className="px-6 py-3">
                        TOPG
                    </th>
                    <th scope="col" className="px-6 py-3">
                        FG%
                    </th>
                    <th scope="col" className="px-6 py-3">
                        3P%
                    </th>
                    <th scope="col" className="px-6 py-3">
                        FT%
                    </th>
                    <th scope="col" className="px-6 py-3">
                        TS%
                    </th>
                    <th scope="col" className="px-6 py-3">
                        +/-
                    </th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
      </div>

  )
}

export default OppRosterTable