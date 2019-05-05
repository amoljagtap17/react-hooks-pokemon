const padToThree = number => (
  number <= 999 ? `00${number}`.slice(-3) : number
)

const getExp = hand => (
  hand.reduce((exp, pokemon) => exp + pokemon.base_experience, 0)
)

const getRandomId = value => (
  Math.floor(Math.random() * value)
)

export {
  padToThree,
  getExp,
  getRandomId
}
