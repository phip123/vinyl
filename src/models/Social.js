export function Social(name= "", url = "", platform = "") {
  return {
    name: name,
    url: url,
    platform: platform
  }
}

export const platforms = {
  sc: "sc",
  fb: "fb",
  insta: "insta",
  bc: "bc",
  generic: "gen",
  text: "text",
  yt: "youtube",
  user: "user"
};


export const EMTPY = Social();
