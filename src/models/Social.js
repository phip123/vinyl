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
  bc: "bc"
};