import Artist from "./Artist";
import {Label} from "./Label";
import Desc from "./Desc";
import Link from "./Link";

export function Album(id = -1, artist = Artist(), label = Label(), title = "-", genres = [], year = -1, rating = -1, shortDesc = Desc(), longDesc = Desc(), links = [], discogsLink = Link(), youtubeLink = Link()) {
  return {
    id: id,
    artist: artist,
    title: title,
    label: label,
    year: year,
    genres: genres,
    rating: rating,
    shortDesc: shortDesc,
    longDesc: longDesc,
    links: links,
    discogsLink: discogsLink,
    youtubeLink: youtubeLink
  }
}

export const EMTPY = Album();
