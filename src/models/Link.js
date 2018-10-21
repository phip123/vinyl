import {platforms} from "./Social";

export default function Link(text ="",link ="", platform = platforms.generic) {
  return {
    text: text,
    link: link,
    platform: platform
  }
}

export const EMPTY = Link();
