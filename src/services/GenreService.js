import Genre from "../models/Genre";
import * as albumService from "./AlbumService";

export function getGenre(id) {
  return genres.filter(g => g.id === id)[0]
}

export function getGenresForArtist(id) {
  return [... new Set(albumService.getAlbumsForArtist(id).flatMap(a => {
    return a.genres
  }))]
}

export function getGenresForLabel(id) {
  return [... new Set(albumService.getAlbumsForLabel(id).flatMap(a => {
    return a.genres
  }))]
}

const  genres = [
  Genre(1,"Techno"),Genre(2,"Industrial"), Genre(3,"EBM")
];
