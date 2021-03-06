import {platforms} from "../models/Social";

export function getIconForPlatform(platform) {
  switch (platform) {
    case platforms.sc: return "soundcloud";
    case platforms.fb: return "facebook";
    case platforms.bc: return "bandcamp";
    case platforms.insta: return "instagram";
    case platforms.generic: return "open-in-new";
    case platforms.text: return "note-text";
    case platforms.yt: return "youtube";
    case platforms.user: return "account";
    case platforms.album: return "album";
    default: return "link";
  }
}
