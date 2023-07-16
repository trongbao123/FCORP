import moment from "moment"

export const truncateString = (str, maxLength) => {
  if (str.length > maxLength) {
    str = str.substring(0, maxLength) + "..."
  }
  return str
}

export const formatDate = (date) => {
  return moment(date).format("DD/MM/YYYY")
}
