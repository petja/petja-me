export function formatMinutes(minutes: number) {
  const hours = Math.floor(minutes / 60)
  const modulo = Math.floor(minutes % 60)

  return `${hours} h ${modulo} min`
}
