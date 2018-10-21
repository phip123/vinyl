export function findById(id, list) {
  return list.filter(e => e.id === Number(id))[0]
}
