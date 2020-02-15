export default cellValue => {
  // formio date input returns a string with date and time
  // this function converts that to a time only string
  // this function also checks if the string is already formatted correctly
  // in that case we return the string in an array
  let removeTimeRegex = /[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/
  let formattedDate = cellValue
    ? cellValue.match(removeTimeRegex) == null
      ? [cellValue]
      : cellValue.match(removeTimeRegex)
    : ['']
  return formattedDate[0]
}
