import React from 'react'

import {useNavigate} from 'react-router-dom'

import {AppButton} from '../../components/AppButton/AppButton'
import SvgSelector from '../../components/SvgSelector/SvgSelector'
import statisticsIcon from '../../assets/img/icons/statistics-icon.png'
import {RouterPath} from '../../utils/constants'
import {Loading} from '../../components/Loading/Loading'
import {useAppSelector} from '../../store/store'
import './Home.scss'

export const Home = () => {
    const {isInitializeApp} = useAppSelector(state => state.app)
    const navigate = useNavigate()

    if (!isInitializeApp) {
        return (
            <Loading/>
        )
    }

    return (
        <div className={'home'}>
            <div className={'home__container'}>
                <div className={'header home__header'}>
                    <div className={'header__icon'}>
                        <img src={statisticsIcon} alt={''}/>
                    </div>
                    <h1 className={'header__title'}>Statistical Data</h1>
                    <p className={'header__text'}>An application for displaying various kinds of statistical data using
                        the Highcharts library. The application is open source.</p>
                </div>
                <div className={'main home__main'}>
                    <p className={'main__text'}>#All statistics are fiction and are used as an example!</p>
                    <div className={'buttons main__buttons'}>
                        <div className={'buttons__btn'}>
                            <AppButton mode={'coral'} onClick={() => navigate(RouterPath.bankData)}>
                                Column chart
                                <SvgSelector id={'right-arrow'}/>
                            </AppButton>
                        </div>
                        <div className={'buttons__btn'}>
                            <AppButton mode={'green'} disabled={true} onClick={() => navigate(RouterPath.bankData)}>
                                Line chart
                                <SvgSelector id={'right-arrow'}/>
                            </AppButton>
                        </div>
                        <div className={'buttons__btn'}>
                            <AppButton mode={'blue'} disabled={true} onClick={() => navigate(RouterPath.bankData)}>
                                Area chart
                                <SvgSelector id={'right-arrow'}/>
                            </AppButton>
                        </div>
                        <div className={'buttons__btn'}>
                            <AppButton mode={'black'} disabled={true} onClick={() => navigate(RouterPath.bankData)}>
                                3D cylinder
                                <SvgSelector id={'right-arrow'}/>
                            </AppButton>
                        </div>
                    </div>
                </div>
                <div className={'footer home__footer'}>
                    <div className={'footer__icon'}>
                        <img src={statisticsIcon} alt={'statistics-icon'}/>
                    </div>
                    <p className={'footer__text'}>"Statistical Data" was built from the hard work of <a
                        className={'footer__link'} target={'_blank'}
                        href={'https://github.com/VictorSvetailo'}>contributor.</a></p>
                </div>
            </div>
        </div>
    )
}
