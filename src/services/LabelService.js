import {Label} from "../models/Label";
import {platforms, Social} from "../models/Social";

export function getLabel(id) {
  return labels.filter(l => l.id === id)
}

const labels = [
  {
    id: 1,
    label: Label("Bank Records NYC", "https://www.discogs.com/label/975964-BANK-Records-NYC", "New York based record label run by Entro Senestre",[
      Social("entro.senestre.bankrecords","https://www.instagram.com/entro.senestre.bankrecords/",platforms.insta),
      Social("bankrecordsnyc", "https://www.facebook.com/bankrecordsnyc/", platforms.fb),
      Social("bankrecordsnyc","https://soundcloud.com/bankrecordsnyc", platforms.sc),
      Social("BANK", "https://bank.bandcamp.com/", platforms.bc)
    ])
  },
  {
    id: 2,
    label: Label("Tripalium Records", "https://www.discogs.com/label/776230-Tripalium-Records", "\n" +
      "French label releasing acid, noise, techno, experimental, rave, braindance.\n" +
      "The following are imprints of Tripalium Records: Acid Avengers Records, Tripalium Rave Series, Digital Mutant Series, Tripalium Podcast",[
        Social("tripaliumcorp","https://www.facebook.com/tripaliumcorp/",platforms.fb)
    ])
  }
];
