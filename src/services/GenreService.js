export function getGenre(id) {
  return genres.filter(g => g.id === id)
}

const  genres = [
  {
    id: 1,
    name: "Techno"
  },
  {
    id: 2,
    name: "Industrial"
  },
  {
    id: 3,
    name: "EBM"
  }
];
