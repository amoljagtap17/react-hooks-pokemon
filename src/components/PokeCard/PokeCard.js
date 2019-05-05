import React from 'react'
import { padToThree } from 'utils/utils'

import styles from 'components/PokeCard/PokeCard.module.scss'

const PokeCard = ({ id, name, type, exp }) => {

  const imgSrc = `${process.env.REACT_APP_POKE_API}${padToThree(id)}.png`

  return (
    <div className={styles['pokecard']}>
      <h1 className={styles['pokecard-title']}>{name}</h1>
      <div className={styles['pokecard-image']}>
        <img src={imgSrc} alt={name} />
      </div>
      <div className={styles['pokecard-data']}>Type: {type}</div>
      <div className={styles['pokecard-data']}>EXP: {exp}</div>
    </div>
  )
}

export default PokeCard
