export function Label(id = -1, name = "-", bio = "-", socials = [], links = []) {
  return {
    id: id,
    name: name,
    bio: bio,
    socials: socials,
    links: links
  }
}

export const EMPTY = Label();
