"use client"
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/20/solid'
import { arenas, saveOnFoods, theQCentre, juanDeFuca, pearkes, panorama, wurtele, archieBrowning, seaparc, westHills } from '@/data/arenas';
import { teams, victoriaPylons, honeyBadgers, dentextStingrays, seoulChickenBlackouts, brickyardBoozehounds, northIslandWildmen } from '@/data/teams';
import { schedule } from '@/data/schedule';

export default function ScheduleCard() {

    return (
        <>
            {schedule.map((game, index) => (
                <div key={index} className="divide-y divide-amber-500 overflow-hidden rounded-lg bg-gray-900 shadow my-6">
                    <div className="gap-y-2 px-4 py-5 sm:px-6">
                        <div className="grid grid-cols-3">
                            <div className="grid col-span-1 gap-y-2">
                                <h2 className="text-3xl font-fugaz leading-6 font-medium  text-left">{honeyBadgers.name}</h2>
                                <p className="col-span-1 text-md text-gray-400 font-manrope text-left">{honeyBadgers.record}</p>
                            </div>
                            <div className="grid col-span-1 gap-y-2">
                                <h1 className="col-span-1 text-4xl font-fugaz leading-6 font-medium text-amber-500 text-center">VS</h1>
                                <p className="col-span-1 md:text-sm text-xs  font-manrope text-center">{game.date} @ {game.time}</p>
                            </div>
                            <div className="grid col-span-1 gap-y-2">
                                <h2 className="col-span-1 text-3xl font-fugaz leading-6 font-medium  text-right">{game.opponent}</h2>
                                <p className="col-span-1 text-md text-gray-400 font-manrope text-right">{game.opponentRecord}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center px-4 py-5 sm:p-6">
                        <img src={game.arenaImg} alt="Seaparc Arena" className="w-full h-[200px]" />
                        <button
                            type="button"
                            className="group relative w-1/2 h-12 overflow-hidden rounded-lg bg-gray-800 text-lg shadow"
                            onClick={() => window.open(game.directions, '_blank')}
                        >
                            <div className="absolute inset-0 w-3 bg-amber-500 transition-all duration-500 ease-out group-hover:w-full"></div>
                            <span className="relative text-white font-manrope text-semibold group-hover:text-white">Get Directions</span>
                        </button>
                    </div>
                </div>
            ))}
        </>
    )
}