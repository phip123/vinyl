import Artist from "../models/Artist";
import {platforms, Social} from "../models/Social";

export function getArtist(id) {

  return artists.find(a => a.id === id)
}

const artists = [
  {
    id: 1,
    artist: Artist("E-Saggila", "https://www.discogs.com/artist/4495678-E-Saggila", "-",[
      Social("esaggilato","https://www.facebook.com/esaggilato/",platforms.fb),
      Social("e-saggila","https://soundcloud.com/esaggila",platforms.sc)
    ])
  },
  {
    id: 2,
    artist: Artist("Nostromo", "https://www.discogs.com/artist/6350671-Nostromo-13", "-",[
      Social("nostromoberlin", "https://www.facebook.com/nostromoberlin/",platforms.fb),
      Social("nostromomusic", "https://soundcloud.com/nostromomusic", platforms.sc),
      Social("NOSTROMO", "https://x-img.bandcamp.com/album/greater-tension-trplm002", platforms.bc)
    ])
  }
];
