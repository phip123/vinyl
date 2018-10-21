export default function Genre(id = -1,name = "-") {
  return {
    id: id,
    name: name
  }
}

export const EMPTY = Genre();
