const padToThree = number => (
  number <= 999 ? `00${number}`.slice(-3) : number
)

export {
  padToThree
}
