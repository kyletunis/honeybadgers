import { arenas, saveOnFoods, theQCentre, juanDeFuca, pearkes, panorama, wurtele, archieBrowning, seaparc, westHills } from './arenas';
import { teams, victoriaPylons, dentextStingrays, seoulChickenBlackouts, brickyardBoozehounds, northIslandWildmen } from './teams';

{/* Schedule Information */ }

export const schedule = [
    {
        id: 1,
        opponent: ` ${victoriaPylons.name}`,
        logo: `${victoriaPylons.logo}`,
        date: '2024-01-12',
        time: '10:00 PM',
        location: `${seaparc.name}`
    },
    {
        id: 2,
        opponent: `${northIslandWildmen.name}`,
        logo: `${northIslandWildmen.logo}`,
        date: '2024-01-27',
        time: '11:00 PM',
        location: `${westHills.name}`
    },
    {
        id: 3,
        opponent: `${dentextStingrays.name}`,
        logo: `${dentextStingrays.logo}`,
        date: '2024-02-04',
        time: '10:30 PM',
        location: `${westHills.name}`
    },
    {
        id: 4,
        opponent: `${seoulChickenBlackouts.name}`,
        logo: `${seoulChickenBlackouts.logo}`,
        date: '2024-02-09',
        time: '10:00 PM',
        location: `${saveOnFoods.name}`
    },
];