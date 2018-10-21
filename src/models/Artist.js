export default function Artist(id = -1,name = "-", discogsUrl = "-", bio= "-", socials = [],links = []) {
  return {
    id: id,
    name: name,
    discogsUrl: discogsUrl,
    bio: bio,
    links: links,
    socials: socials
  }
}
