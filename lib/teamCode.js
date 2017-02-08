const teamCode = () => {
  return [1, 2, 3, 4].reduce((key, x) => {
    return key + String.fromCharCode(randomInt(26) + 97)
  }, '')
}

const randomInt = max => parseInt(Math.random() * max)

module.exports = teamCode
