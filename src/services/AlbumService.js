import Link from "../models/Link";
import Desc from "../models/Desc";
import {getArtist} from "./ArtistService";
import {getLabel} from "./LabelService";
import {getGenre} from "./GenreService";
import {findById} from "./GenericService";
import {platforms} from "../models/Social";

export function getAlbums() {
  return albums
}
export function getAlbum(id) {
  return findById(id,albums)
}

export function getAlbumsForArtist(id) {
  return getAlbums().filter(a => a.artist.id === Number(id))
}


const albums = [
  {
    id: 1,
    artist: getArtist(1),
    label: getLabel(1),
    title: "Dedicated To Sublimity",
    genres: [getGenre(1), getGenre(2)],
    year: 2018,
    rating: 4.3,
    shortDesc: Desc("Sophisticated industrial techno with booming club tools and atmospheric parts.","phip123.github.io","phip123") ,
    longDesc: Desc(`E-Saggila returns after her EP 'Tools of my purpose' back to BANK Records and delivers an unique experience and a variety of sounds. Recommendation: Viper, which draws connections to hardcore and the last track 'Your Hole' with vocal mutations.`,"phip123.github.io","phip123"),
    links: [
      Link("Exclaim Review", "http://exclaim.ca/music/article/e-saggila-dedicated_to_sublimity",platforms.text),
      Link("Noisey Interview", "https://noisey.vice.com/en_us/article/evkvv4/e-saggila-viper-dedicated-to-sublimity-stream",platforms.text),
      Link("Viper", "https://www.youtube.com/watch?v=XbVlHBt-94A",platforms.yt),
      Link(`Your Hole`,"https://www.youtube.com/watch?v=WuEfxgkOyHs", platforms.yt)
    ],
    discogsLink: Link("Discogs","https://www.discogs.com/E-Saggila-Dedicated-To-Sublimity/release/12268517"),
    youtubeLink: Link("Youtube","https://www.youtube.com/watch?v=XbVlHBt-94A")
  }
];



