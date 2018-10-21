export default function Bio(text = "-", sources = []) {
  return {
    text: text,
    sources: sources
  }
}

export const EMPTY = Bio();
