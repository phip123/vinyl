import {Label} from "../models/Label";
import {platforms, Social} from "../models/Social";
import {findById} from "./GenericService";
import * as albumService from './AlbumService';
import Link from "../models/Link";
import Bio from "../models/Bio";


export function getLabel(id) {
  return findById(id, labels)
}

export function findLabelsForArtist(id) {
  return [...new Set(albumService.getAlbumsForArtist(id).map(a => a.label))]
}

const labels = [
  Label(
    1,
    "Bank Records NYC",
    Bio("New York based record label run by Entro Senestre",  [Link("discogs","https://www.discogs.com/label/975964-BANK-Records-NYC")]), [
      Social("BANK on discogs", "https://www.discogs.com/label/975964-BANK-Records-NYC",platforms.album),
    Social("entro.senestre.bankrecords", "https://www.instagram.com/entro.senestre.bankrecords/", platforms.insta),
    Social("bankrecordsnyc", "https://www.facebook.com/bankrecordsnyc/", platforms.fb),
    Social("bankrecordsnyc", "https://soundcloud.com/bankrecordsnyc", platforms.sc),
    Social("BANK", "https://bank.bandcamp.com/", platforms.bc)
  ],[
    Link("BANK Records on Resident Advisor","https://www.residentadvisor.net/record-label.aspx?id=13559",platforms.user)
  ])
  ,
  Label(2, "Tripalium Records", "\n" +
    Bio("French label releasing acid, noise, techno, experimental, rave, braindance.\n" +
    "The following are imprints of Tripalium Records: Acid Avengers Records, Tripalium Rave Series, Digital Mutant Series, Tripalium Podcast",[Bio("discogs","https://www.discogs.com/label/776230-Tripalium-Records")]), [
      Social("discogs","https://www.discogs.com/label/776230-Tripalium-Records",platforms.album),
    Social("tripaliumcorp", "https://www.facebook.com/tripaliumcorp/", platforms.fb)
  ],[
    Link("Trip. Records on Resident Advisor","https://www.residentadvisor.net/record-label.aspx?id=12336", platforms.user),
    Link("Trip. Records Homepage", "https://www.residentadvisor.net/record-label.aspx?id=12336")
  ])

];
