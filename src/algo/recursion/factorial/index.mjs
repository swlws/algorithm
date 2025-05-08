function factorial(n) {
  if (n < 0) {
    throw new Error('Negative numbers are not allowed')
  }
  console.log(n)
  if (n === 0 || n === 1) {
    return 1
  }
  return n * factorial(n - 1)
}

console.log('阶乘', factorial(10))
