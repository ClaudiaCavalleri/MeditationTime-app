import bellSound from "../assets/audio/bell.mp3";
import bowlDeepSound from '../assets/audio/bowl-deep.mp3';
import calmWavesSound from '../assets/audio/calm-waves.mp3';
import campfireSound from '../assets/audio/campfire.mp3';
import drippingWaterSound from '../assets/audio/dripping-water.mp3';
import heavyRainSound from '../assets/audio/heavy-rain.mp3';
import jungleSound from '../assets/audio/jungle.mp3';
import softPianoSound from '../assets/audio/soft-piano.mp3';
import spaceSound from '../assets/audio/space-sound.mp3';
import vacuumSound from '../assets/audio/vacuum.mp3';
import whiteNoiseSound from '../assets/audio/white-noise.mp3';

import { GiGong, GiRingingBell, GiCampfire, GiPianoKeys, GiJungle, GiDroplets, GiRaining, GiWaves, GiJupiter, GiVacuumCleaner, GiSoundWaves } from "react-icons/gi";


const soundData = [
    {
        id: 0,
        title: "Bell sound",
        soundUrl: bellSound,
        icon: <GiRingingBell size={50} />
    },
    {
        id: 1,
        title: "Bowl deep",
        soundUrl: bowlDeepSound,
        icon: <GiGong size={50} />
    },
    {
        id: 2,
        title: "Calm waves",
        soundUrl: calmWavesSound,
        icon: <GiWaves size={50} />
    },
    {
        id: 3,
        title: "Campfire",
        soundUrl: campfireSound,
        icon: <GiCampfire size={50} />
    },
    {
        id: 4,
        title: "Dripping water",
        soundUrl: drippingWaterSound,
        icon: <GiDroplets size={50} />
    },
    {
        id: 5,
        title: "Heavy rain",
        soundUrl: heavyRainSound,
        icon: <GiRaining size={50} />
    },
    {
        id: 6,
        title: "Jungle",
        soundUrl: jungleSound,
        icon: <GiJungle size={50} />
    },
    {
        id: 7,
        title: "Soft piano",
        soundUrl: softPianoSound,
        icon: <GiPianoKeys size={50} />
    },
    {
        id: 8,
        title: "Space",
        soundUrl: spaceSound,
        icon: <GiJupiter size={50} />
    },
    {
        id: 9,
        title: "Vacuum",
        soundUrl: vacuumSound,
        icon: <GiVacuumCleaner size={50} />
    },
    {
        id: 10,
        title: "White noise",
        soundUrl: whiteNoiseSound,
        icon: <GiSoundWaves size={50} />
    },
]

export default soundData;