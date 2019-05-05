import React from 'react'
import PokeCard from 'components/PokeCard/PokeCard'
import styles from 'components/PokeDeck/PokeDeck.module.scss'

const PokeDeck = ({ isWinner, exp, pokemons }) => {

  let title

  if (isWinner) {
    title = <h1 className={styles['pokedeck-winner']}>Winning Hand!</h1>
  } else {
    title = <h1 className={styles['pokedeck-loser']}>Losing Hand!</h1>
  }

  return (
    <div className={styles['pokedeck']}>
      {title}
      <h4>Total Experience: {exp}</h4>
      <div className={styles['pokedeck-cards']}>
        {
          pokemons.map(pokemon => (
            <PokeCard
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              type={pokemon.type}
              exp={pokemon.base_experience} />
          ))
        }
      </div>
    </div>
  )
}

export default PokeDeck
