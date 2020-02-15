export default param => {
  let urlString = window.location.href
  let url = new URL(urlString)
  return url.searchParams.get(param)
}
