export function compare(a, b) {
  const bandA = parseInt(a.formId)
  const bandB = parseInt(b.formId)

  let comparison = 0
  if (bandA > bandB) {
    comparison = 1
  } else if (bandA < bandB) {
    comparison = -1
  }
  return comparison
}
