import Link from "../models/Link";
import Desc from "../models/Desc";
import {getArtist} from "./ArtistService";
import {getLabel} from "./LabelService";
import {getGenre} from "./GenreService";

export function getAlbums() {
  return albums
}


const albums = [
  {
    id: 1,
    artist: getArtist(1),
    label: getLabel(1),
    title: "Dedicated To Sublimity",
    genres: [getGenre(1), getGenre(2)],
    year: 2018,
    shortDesc: Desc("Evil, wild-eyed industrial techno and gloomy doom core from USA’s Rita Mikhael a.k.a. E-Saggila", "https://boomkat.com/products/dedicated-to-sublimity") ,
    longDesc: Desc("Toronto's Rita Mikhael has been slinging powerful blasts of noisy electronic music for the better part of this decade. Her unholy missives — which for the most part fly the E-Saggila standard — were first disseminated via her own Summer Isle imprint, which she co-founded with Max \\\"Death Kneel\\\" Klebanoff.  More recently, the producer has seen her work released by the equally dank Opal Tapes, Aught Void and Bank Records labels.\\n\" +\n" +
      "      \" \\n\" +\n" +
      "      \"Mikhael returns to Bank for her first full-length LP, a writhing collection of half-decomposed techno and desolate electro tracks.  Ironically named Dedicated to Sublimity, the atmosphere here is far from uplifting.\\n\" +\n" +
      "      \" \\n\" +\n" +
      "      \"The punishing, noisy techno blast of opening track \\\"Brunette Cistern\\\" combines atmospheric, barely discernible melodic motifs beneath a coruscating tapestry of beats, bass and bomb fragments. \\\"Glass Wing\\\" is a rhythmic romp beneath the static grey sky of a William Gibson novel. The ghosts of broken mechanisms haunt the foreground of \\\"Reputation,\\\" their clattering cries beating back a pounding sea of reverberating drums. \\\"Your Hole\\\" is filled with a sinister chatter that is pulverized into grainy waves of drone. An organ-like melody swoops in to provide somewhat of a respite from the icy spray, worming its way into the listener's subconscious as the proceedings come to a close.\\n\" +\n" +
      "      \" \\n\" +\n" +
      "      \"With this record, Mikhael demonstrates that she's capable of producing both skull-rattling, beat-driven techno, as well as a more introspective and atmospheric brand of sonic material. Woven into both of these approaches is her distinct vision, which is both beguiling and ferocious. (Bank Records) \\n", "http://exclaim.ca/music/article/e-saggila-dedicated_to_sublimity\n"),
    links: [
      Link("Review","http://exclaim.ca/music/article/e-saggila-dedicated_to_sublimity"),
      Link("Discogs","https://www.discogs.com/E-Saggila-Dedicated-To-Sublimity/release/12268517"),
      Link("Noisey Interview", "https://noisey.vice.com/en_us/article/evkvv4/e-saggila-viper-dedicated-to-sublimity-stream"),
      Link("Viper on youtube", "https://www.youtube.com/watch?v=XbVlHBt-94A")
    ]
  }
];



