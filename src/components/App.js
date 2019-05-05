import React from 'react'

import styles from 'components/App.module.scss'

const App = () => {
  console.log('test', process.env.REACT_APP_NAME)

  return <div className={styles['text']}>App!</div>
}

export default App
