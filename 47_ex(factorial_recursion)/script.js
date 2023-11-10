function factorial(num) {
  if (typeof num !== 'number' || !Number.isInteger(num)) {
    return 'Enter integer number'
  }

  if (num >= 1) {
    return num * factorial(num - 1)
  } else {
    return 1
  }
}
