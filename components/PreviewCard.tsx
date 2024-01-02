import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/20/solid'
import { arenas, saveOnFoods, theQCentre, juanDeFuca, pearkes, panorama, wurtele, archieBrowning, seaparc, westHills } from '@/data/arenas';
import { teams, victoriaPylons, honeyBadgers, dentextStingrays, seoulChickenBlackouts, brickyardBoozehounds, northIslandWildmen } from '@/data/teams';
import { schedule } from '@/data/schedule';

export default function ScheduleCard() {

    return (
        <>
            {schedule.map((game, index) => (
                <div key={game.id} className="divide-y divide-amber-500 overflow-hidden rounded-lg bg-gray-900 shadow my-6">
                    <div className="px-4 py-5 sm:px-6">
                        <h2 className="text-lg font-fugaz leading-6 font-medium text-white text-center">{honeyBadgers.name} VS {game.opponent}</h2>
                        <p className="text-sm text-gray-500 font-manrope text-center">{game.date} @ {game.time} at {game.location}</p>
                    </div>
                    <div className="px-4 py-5 sm:p-6">
                        <img src={game.arenaImg} alt="Seaparc Arena" className="w-full h-[200px]" />
                        <a className="text-sm text-white font-semibold font-manrope hover:text-amber-500" href={game.directions}>
                            Directions
                            <ArrowRightIcon className="inline text-amber-500 h-5 w-5" />
                        </a>
                    </div>
                </div>
            ))}
        </>
    )
}