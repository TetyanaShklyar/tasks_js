function fib(num) {
  if (typeof num !== 'number' || !Number.isInteger(num) || num < 0) {
    return ''
  }

  if (num === 1) {
    return '0'
  }

  let fibonacci = [0, 1]

  for (let i = 2; i < num; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]
  }

  return fibonacci.join(' ')
}

console.log(fib(7))
