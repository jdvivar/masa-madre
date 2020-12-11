export const getSlotsWithName = function (name) {
  if (name) return [...this.querySelectorAll(`[slot="${name}"]`)]
  return [...this.querySelectorAll('[slot]')]
}
