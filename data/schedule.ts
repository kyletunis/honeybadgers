import { arenas, saveOnFoods, theQCentre, juanDeFuca, pearkes, panorama, wurtele, archieBrowning, seaparc, westHills } from './arenas';
import { teams, honeyBadgers, victoriaPylons, dentextStingrays, seoulChickenBlackouts, brickyardBoozehounds, northIslandWildmen } from './teams';

{/* Schedule Information */ }

export const schedule = [
    {
        opponent: `${victoriaPylons.name}`,
        opponentRecord: `${victoriaPylons.record}`,
        logo: `${victoriaPylons.logo}`,
        date: 'Friday, January 12th',
        time: '10:00 PM',
        location: `${seaparc.name}`,
        directions: `${seaparc.directions}`,
        arenaImg: `${seaparc.image}`
    },
    {
        opponent: `${northIslandWildmen.name}`,
        opponentRecord: `${northIslandWildmen.record}`,
        logo: `${northIslandWildmen.logo}`,
        date: 'Saturday, January 27th',
        time: '11:00 PM',
        location: `${westHills.name}`,
        directions: `${westHills.directions}`,
        arenaImg: `${westHills.image}`
    },
    {
        opponent: `${dentextStingrays.name}`,
        opponentRecord: `${dentextStingrays.record}`,
        logo: `${dentextStingrays.logo}`,
        date: 'Friday, February 2nd',
        time: '10:30 PM',
        location: `${westHills.name}`,
        directions: `${westHills.directions}`,
        arenaImg: `${westHills.image}`
    },
    {
        opponent: `${seoulChickenBlackouts.name}`,
        opponentRecord: `${seoulChickenBlackouts.record}`,
        logo: `${seoulChickenBlackouts.logo}`,
        date: 'Friday, February 9th',
        time: '10:00 PM',
        location: `${saveOnFoods.name}`,
        directions: `${saveOnFoods.directions}`,
        arenaImg: `${saveOnFoods.image}`
    },
];