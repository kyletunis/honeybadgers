import { arenas, saveOnFoods, theQCentre, juanDeFuca, pearkes, panorama, wurtele, archieBrowning, seaparc, westHills } from './arenas';
import { teams, victoriaPylons, dentextStingrays, seoulChickenBlackouts, brickyardBoozehounds, northIslandWildmen } from './teams';

{/* Schedule Information */ }

export const schedule = [
    {
        id: 1,
        opponent: ` ${victoriaPylons.name}`,
        logo: `${victoriaPylons.logo}`,
        date: 'Friday, January 12th, 2024',
        time: '10:00 PM',
        location: `${seaparc.name}`,
        directions: `${seaparc.directions}`,
        arenaImg: `${seaparc.image}`
    },
    {
        id: 2,
        opponent: `${northIslandWildmen.name}`,
        logo: `${northIslandWildmen.logo}`,
        date: 'Saturday, January 27th, 2024',
        time: '11:00 PM',
        location: `${westHills.name}`,
        directions: `${westHills.directions}`,
        arenaImg: `${westHills.image}`
    },
    {
        id: 3,
        opponent: `${dentextStingrays.name}`,
        logo: `${dentextStingrays.logo}`,
        date: 'Friday, February 2nd, 2024',
        time: '10:30 PM',
        location: `${westHills.name}`,
        directions: `${westHills.directions}`,
        arenaImg: `${westHills.image}`
    },
    {
        id: 4,
        opponent: `${seoulChickenBlackouts.name}`,
        logo: `${seoulChickenBlackouts.logo}`,
        date: 'Friday, February 9th, 2024',
        time: '10:00 PM',
        location: `${saveOnFoods.name}`,
        directions: `${saveOnFoods.directions}`,
        arenaImg: `${saveOnFoods.image}`
    },
];