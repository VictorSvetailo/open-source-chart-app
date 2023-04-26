import React, {useEffect} from 'react'

import HighchartsReact from 'highcharts-react-official'

import Highcharts from 'highcharts'

import {useNavigate} from 'react-router-dom'

import {useAppDispatch, useAppSelector} from '../../store/store'
import {fetchBankData} from '../../store/reducers/bankDataSlice'

import {AppButton} from '../../components/AppButton/AppButton'
import SvgSelector from '../../components/SvgSelector/SvgSelector'

import {RouterPath} from '../../utils/constants'

import {Loading} from '../../components/Loading/Loading'
import {setAppThemeType} from '../../store/reducers/appSlice'

import {optionalChartSetting} from './bankDataOption'
import './BankData.scss'

export const BankData = () => {
    const {isInitializeApp, error, appThemeType} = useAppSelector(state => state.app)
    const {bankData} = useAppSelector(state => state.bankData)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()


    useEffect(() => {
        dispatch(fetchBankData())
    }, [])

    let option = {}

    if (isInitializeApp === 'loading') {
        return (
            <Loading/>
        )
    } else if (isInitializeApp === 'success') {
        option = optionalChartSetting(bankData)
    }

    return (
        <div className={'chart'}>
            <div className={'chart__container'}>
                <div className={'header chart__header'}>
                    <div className={'header__btn'}>
                        <AppButton mode={'black'} onClick={() => navigate(RouterPath.home)}>
                            <SvgSelector id={'arrow-in-round'} svgColor={'#fff'} className={'turn_in_opposite_dir'}/>
                            Back
                        </AppButton>
                    </div>
                    <div className={'header__title'}>Chart Line</div>
                    <div className={'theme_switch header__theme_switch'}>
                        {!error && <div className={'theme_switch__body'}>
                            <button onClick={() => dispatch(setAppThemeType('light'))}>
                                Light
                            </button>
                            <button onClick={() => dispatch(setAppThemeType('dark'))}>
                                Dark
                            </button>
                            <div
                                className={appThemeType === 'dark' ? 'theme_switch__slider active' : 'theme_switch__slider'}></div>
                        </div>
                        }
                    </div>
                </div>
                <div className={'chart__main'}>
                    <div className={appThemeType === 'dark' ? 'chart__body active' : 'chart__body'}>
                        {isInitializeApp === 'success' ? <HighchartsReact highcharts={Highcharts} options={option}
                                                                          containerProps={{style: {height: '100%'}}}/>
                            : <Loading/>
                        }
                    </div>
                </div>
                <div className={'chart__footer'}>
                </div>
            </div>
            {error && <div className={'error_message'}>{error}</div>}
        </div>
    )
}
