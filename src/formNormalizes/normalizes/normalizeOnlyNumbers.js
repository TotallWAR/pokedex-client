const normalizeNumbers = (value, previousValue) => {
  if (!value) {
    return value
  }
  const onlyNums = value.replace(/[^\d]/g, '')
  return `${onlyNums.slice(0)}`
}

export default normalizeNumbers
