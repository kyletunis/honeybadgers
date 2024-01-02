import { arenas } from '@/data/arenas'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/20/solid'

export default function ScheduleCard() {

    return (
        <div className="divide-y divide-amber-500 overflow-hidden rounded-lg bg-gray-900 shadow">
            <div className="px-4 py-5 sm:px-6">
                <h2 className="text-lg font-fugaz leading-6 font-medium text-white text-center">HONEYBADGERS VS VICTORIA PYLONS</h2>
                <p className="text-sm text-gray-500 font-manrope text-center">Friday, January 12th, 10:30 PM @ {arenas[0].name}</p>
            </div>
            <div className="px-4 py-5 sm:p-6">
                <img src="/images/arenas/seaparc.jpg" alt="Seaparc Arena" className="w-full h-full" />
                <a className="text-sm text-white font-semibold font-manrope hover:text-amber-500" href={arenas[0].directions}>
                    Directions
                    <ArrowRightIcon className="inline text-amber-500 h-5 w-5" />
                </a>
            </div>
        </div>
    )
}