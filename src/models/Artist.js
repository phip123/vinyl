export default function Artist(name = "-", discogsUrl = "-", bio= "-", socials = [],links = []) {
  return {
    name: name,
    discogsUrl: discogsUrl,
    bio: bio,
    links: links,
    socials: socials
  }
}
