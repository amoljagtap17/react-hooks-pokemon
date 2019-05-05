import React from 'react'
import PokeDeck from 'components/PokeDeck/PokeDeck'
import { getRandomId, getExp } from 'utils/utils'

const PokeGame = ({ pokemonData }) => {

  let hand1 = []
  let hand2 = pokemonData

  while (hand1.length < hand2.length) {
    let randId = getRandomId(hand2.length)
    let randPokemon = hand2.splice(randId, 1)[0]
    hand1.push(randPokemon)
  }

  let exp1 = getExp(hand1)
  let exp2 = getExp(hand2)

  return (
    <div>
      <PokeDeck pokemons={hand1} exp={exp1} isWinner={exp1 > exp2} />
      <PokeDeck pokemons={hand2} exp={exp2} isWinner={exp2 > exp1} />
    </div>
  )
}

export default PokeGame
