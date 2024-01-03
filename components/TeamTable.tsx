import { roster } from '@/data/roster'
import { ChartBarIcon, ChartBarSquareIcon } from '@heroicons/react/24/outline'

export default function TeamTable() {
    return (
        <div className="w-full h-screen bg-gray-900 my-6">
            <div className="mx-auto max-w-7xl">
                <div className="bg-gray-900">
                    <div className="px-4 sm:px-6 lg:px-8">
                        <div className="flow-root">
                            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="inline-block min-w-full py-6 overflow-y-auto align-middle sm:px-6 lg:px-8">
                                    <table className="min-w-full divide-y divide-amber-500 font-manrope">
                                        <thead>
                                            <tr>
                                                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-lg font-semibold  sm:pl-0">
                                                    Number
                                                </th>
                                                <th scope="col" className="px-3 py-3.5 text-left text-lg font-semibold ">
                                                    Name
                                                </th>
                                                <th scope="col" className="px-3 py-3.5 text-left text-lg font-semibold ">
                                                    Position
                                                </th>
                                                <th scope="col" className="px-3 py-3.5 text-left text-lg font-semibold ">
                                                    Next Game's Status
                                                </th>
                                                <th scope="col" className="px-3 py-3.5 text-left text-lg font-semibold ">
                                                    Stats
                                                </th>
                                                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                                                    <span className="sr-only">Edit</span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-800">
                                            {roster.map((person) => (
                                                <tr key={person.id}>
                                                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium  sm:pl-0">
                                                        {person.number}
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-md text-gray-300">{person.name}</td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-md text-gray-300">{person.position}</td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-md text-gray-300">{person.status}</td>
                                                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 sm:pr-0">
                                                        <a href="https://www.islandhockey101.com/stats#/1353/team/284371" target="_blank" className="text-indigo-400 hover:text-amber-500">
                                                            <ChartBarSquareIcon className="h-7 w-7" />
                                                        </a>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


