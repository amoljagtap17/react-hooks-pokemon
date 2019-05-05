import React from 'react'
import PokeDeck from 'components/PokeDeck/PokeDeck'
import pokemonData from 'utils/pokemonData'

const App = () => {
  return (
    <PokeDeck
      pokemons={pokemonData}
      exp={245}
      isWinner={true}
    />
  )
}

export default App
