import React from 'react'

import {useNavigate} from 'react-router-dom'

import {RouterPath} from '../../utils/constants'

import './ErrorPage.module.scss'
import {AppButton} from '../../components/AppButton/AppButton'

import styles from './ErrorPage.module.scss'

export const ErrorPage = () => {

   const navigate = useNavigate()

   return (
      <div className={styles.error}>
         <div className={styles.error__container}>
            <div className={`${styles.content} ${styles.error__content}`}>
               <span className={styles.content__code}>404</span>
               <span className={styles.content__text}>Page not found!</span>
               <div className={styles.content__btn}>
                  <AppButton mode={'coral'} onClick={() => navigate(RouterPath.home)}>
                     Back to home
                  </AppButton>
               </div>
            </div>
         </div>
      </div>)
}
