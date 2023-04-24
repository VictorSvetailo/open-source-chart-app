import React from 'react'

import loadingGif from '../../assets/img/loading/loading-gif.svg'

import styles from './Loading.module.scss'

export const Loading = () => {
   return (
      <div className={styles.loading}>
         <img src={loadingGif} alt=''/>
      </div>
   )
}

