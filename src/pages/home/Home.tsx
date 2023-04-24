import React from 'react'

import {useNavigate} from 'react-router-dom'

import {AppButton} from '../../components/AppButton/AppButton'
import SvgSelector from '../../components/SvgSelector/SvgSelector'

import statisticsIcon from '../../assets/img/icons/statistics-icon.png'

import {RouterPath} from '../../utils/constants'

import styles from './Home.module.scss'

export const Home = () => {

   const navigate = useNavigate()

   return (
      <div className={styles.home}>
         <div className={styles.home__container}>
            <div className={`${styles.header} ${styles.home__header}`}>
               <div className={styles.header__icon}>
                  <img src={statisticsIcon} alt='' />
               </div>
               <h1 className={styles.header__title}>Statistical Data</h1>
               <p className={styles.header__text}>An application for displaying various kinds of statistical data using
                  the Highcharts library. The application is open source.</p>
            </div>
            <div className={`${styles.main} ${styles.home__main}`}>
               <p className={styles.main__text}>#All statistics are fiction and are used as an example!</p>
               <div className={`${styles.buttons} ${styles.main__buttons}`}>
                  <div className={styles.buttons__btn}>
                     <AppButton mode='coral' onClick={() => navigate(RouterPath.bankData)}>
                        Line chart
                        <SvgSelector id='right-arrow' svgColor={'#fff'} />
                     </AppButton>
                  </div>
                  <div className={styles.buttons__btn}>
                     <AppButton mode='green' onClick={() => navigate(RouterPath.bankData)}>
                        Column chart
                        <SvgSelector id='right-arrow' svgColor={'#fff'} />
                     </AppButton>
                  </div>
                  <div className={styles.buttons__btn}>
                     <AppButton mode='blue' classNameCustom={'button_disabled'} disabled={true} onClick={() => navigate(RouterPath.bankData)}>
                        Area chart
                        <SvgSelector id='right-arrow' svgColor={'#fff'} />
                     </AppButton>
                  </div>
                  <div className={styles.buttons__btn}>
                     <AppButton mode='black' classNameCustom={'button_disabled'} disabled={true} onClick={() => navigate(RouterPath.bankData)}>
                        3D cylinder
                        <SvgSelector id='right-arrow' svgColor={'#fff'} />
                     </AppButton>
                  </div>
               </div>
            </div>
            <div className={`${styles.footer} ${styles.home__footer}`}>
               <div className={styles.footer__icon}>
                  <img src={statisticsIcon} alt='' />
               </div>
               <p className={styles.footer__text}>"Statistical Data" was built from the hard work of <a className={styles.footer__link} target='_blank' href='https://github.com/VictorSvetailo'>contributor.</a></p>
            </div>
         </div>
      </div>
   )
}
