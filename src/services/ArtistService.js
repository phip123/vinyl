import Artist from "../models/Artist";
import {platforms, Social} from "../models/Social";
import {findById} from "./GenericService";
import Link from "../models/Link";
import Bio from "../models/Bio";
import albumService from "./AlbumService";

export function getArtist(id) {
  return findById(id, artists)
}

export function getArtistsForLabel(id) {
  return getArtists().filter(a => albumService.getAlbumsForArtist(a.id).filter(alb => alb.label.id === Number(id)));
}

export function getArtists() {
  return artists;
}



const artists = [
  Artist(1, "E-Saggila", "https://www.discogs.com/artist/4495678-E-Saggila", Bio("Rita Mikhael, Iraq-born, Toronto-based producer and live act. Fascinated by noise, industrial. Founded 2014 the label Summer Isle with Max Klebanoff, who does Death Kneel. Rita started the project as a way to produce more technical tracks and combined techno and industrial.", [Link("mixmag", "https://mixmag.net/feature/e-saggilas-fearless-electronic-music-and-commitment-to-the-diy-scene-is-making-an-impact")]), [
    Social("esaggilato", "https://www.facebook.com/esaggilato/", platforms.fb),
    Social("e-saggila", "https://soundcloud.com/esaggila", platforms.sc)
  ], [
    Link("Noisey Interview", "https://noisey.vice.com/en_us/article/evkvv4/e-saggila-viper-dedicated-to-sublimity-stream", platforms.text),
    Link("Resident Advisor", "https://www.residentadvisor.net/dj/e-saggila", platforms.user),
    Link("Show You", "https://www.youtube.com/watch?v=opPD-4hAIzY", platforms.yt),
    Link("Mixmag Interview", "https://mixmag.net/feature/e-saggilas-fearless-electronic-music-and-commitment-to-the-diy-scene-is-making-an-impact", platforms.text)
  ]),

  Artist(2, "Nostromo", "https://www.discogs.com/artist/6350671-Nostromo-13", "-", [
    Social("nostromoberlin", "https://www.facebook.com/nostromoberlin/", platforms.fb),
    Social("nostromomusic", "https://soundcloud.com/nostromomusic", platforms.sc),
    Social("NOSTROMO", "https://x-img.bandcamp.com/album/greater-tension-trplm002", platforms.bc)
  ])

];
