import crypto from 'crypto'

function generateToken(userId) {
  const timestamp = Math.floor(Date.now() / 1000)
  const secret = 'my-secret-key'
  const signature = crypto
    .createHash('sha256')
    .update(userId + timestamp + secret)
    .digest('hex')
  return `${userId}.${timestamp}.${signature}`
}

const token = generateToken('123')
console.log(token)
