import React, {useEffect, useState} from 'react'

import HighchartsReact from 'highcharts-react-official'

import Highcharts from 'highcharts'

import {useNavigate} from 'react-router-dom'


// import HighContrastLight from 'highcharts/themes/high-contrast-light'
// import DarkUnica from 'highcharts/themes/dark-unica'
// import SandSignika from 'highcharts/themes/sand-signika'
// import Skies from 'highcharts/themes/skies'
// import HighContrastDark from 'highcharts/themes/high-contrast-dark'
// import Grid from 'highcharts/themes/grid'

import {useAppDispatch, useAppSelector} from '../../store/store'
import {fetchBankData} from '../../store/reducers/bankDataSlice'
import {BankDataType} from '../../api/api'

import {AppButton} from '../../components/AppButton/AppButton'
import SvgSelector from '../../components/SvgSelector/SvgSelector'




import {RouterPath} from '../../utils/constants'

import styles from './BankData.module.scss'

// DarkUnica(Highcharts)
// SandSignika(Highcharts)
// Skies(Highcharts)
// HighContrastDark(Highcharts)
// Grid(Highcharts)



export const BankData = () => {
    const {bankData, statusBankData} = useAppSelector(state => state.bankData)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const [buttonSwitching, setButtonSwitching] = useState(0)

    if (buttonSwitching){
        console.log('Light')
    } else {
        console.log('Dark')
    }

   const theme = {
       colorBg: buttonSwitching ? '#1e293b' : '#fff',
       xAxisText: buttonSwitching ? '#fff' : '#1e293b',
       yAxisText: buttonSwitching ? '#fff' : '#1e293b',
       itemStyle: buttonSwitching ? '#fff' : '#1e293b',
       itemHoverStyle: buttonSwitching ? '#fff' : '#1e293b',
    }




    const linearGradient = {x1: 0, x2: 0, y1: 0, y2: 1.5}

    useEffect(() => {
        dispatch(fetchBankData())
    }, [])


    const creatingElement = (dataEl: number[], nameEl: string, linearGradientConfig: Object, styleColorConfig: Array<Array<number | string>>) => {
        return {
            name: nameEl,
            data: dataEl,
            color: {
                linearGradient: linearGradientConfig,
                stops: styleColorConfig
            }
        }
    }


    const option = {
        chart: {
            type: 'line',
            backgroundColor: theme.colorBg,
            scrollablePlotArea: {
                minWidth: 1200,
                scrollPositionX: 1
            }
        },
        legend: {
            align: 'right',
            verticalAlign: 'middle',
            layout: 'vertical',
            backgroundColor: theme.colorBg,
            itemStyle: {
                color: theme.itemStyle,
            },
            itemHoverStyle: {
                color: theme.itemHoverStyle,
            },
        },
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 1000
                },
                chartOptions: {
                    legend: {
                        align: 'center',
                        verticalAlign: 'bottom',
                        layout: 'horizontal'
                    }
                }
            }]
        },
        title: {
            text: 'Bank earnings statistics'
        },
        xAxis: {
            categories: bankData.map((el: BankDataType) => el.month),
            labels: {
                style: {
                    color: theme.xAxisText,
                },
            },
        },
        yAxis: {
            labels: {
                style: {
                    color: theme.yAxisText,
                },
            },
            title: {
                style: {
                    color: theme.yAxisText,
                },
            },
        },
        series: [
            creatingElement(bankData.map((el: BankDataType) => el.bank.alfaBank), 'Alfa', linearGradient, [[0, '#ef3024'], [1, 'rgba(239,48,36,0.53)']]),
            creatingElement(bankData.map((el: BankDataType) => el.bank.sberBank), 'Sber', linearGradient, [[0, '#1fa038'], [1, 'rgba(31,160,56,0.5)']]),
            creatingElement(bankData.map((el: BankDataType) => el.bank.tinkoffBank), 'Tinkoff', linearGradient, [[0, '#ffdd2d'], [1, 'rgba(255,221,45,0.5)']]),
            creatingElement(bankData.map((el: BankDataType) => el.bank.gazPromBank), 'Gaz Prom', linearGradient, [[0, '#476bf0'], [1, 'rgba(71,107,240,0.5)']]),
            creatingElement(bankData.map((el: BankDataType) => el.bank.pochtaBank), 'Pochta', linearGradient, [[0, '#011689'], [1, '#d32b51']]),
            creatingElement(bankData.map((el: BankDataType) => el.bank.rayffayzenBank), 'Rayffayzen', linearGradient, [[0, '#ef8800'], [1, 'rgb(239,136,0)']]),
            creatingElement(bankData.map((el: BankDataType) => el.bank.rosBank), 'Ros Bank', linearGradient, [[0, '#00234d'], [1, 'rgba(0,35,77,0.5)']]),
            creatingElement(bankData.map((el: BankDataType) => el.bank.moskovskiyKreditnyyBank), 'Moskovskiy Bank', linearGradient, [[0, '#dd0a34'], [1, 'rgba(221,10,52,0.5)']]),
            creatingElement(bankData.map((el: BankDataType) => el.bank.rosselkhozBank), 'Rosselkhoz', linearGradient, [[0, '#1e5e2f'], [1, 'rgba(30,94,47,0.5)']]),
            creatingElement(bankData.map((el: BankDataType) => el.bank.sovkomBank), 'Sovkom', linearGradient, [[0, '#fc5055'], [1, 'rgba(252,80,85,0.5)']])
        ]
    }


    return (
        <div className={styles.chart}>
            <div className={styles.chart__container}>
                <div className={`${styles.header} ${styles.chart__header}`}>
                    <div className={styles.header__btn}>
                        <AppButton mode='black' onClick={() => navigate(RouterPath.home)}>
                            <SvgSelector id='arrow-in-round' svgColor={'#fff'} className={'turn_in_opposite_dir'}/>
                            back
                        </AppButton>
                    </div>
                    <div className={styles.header__title}>Chart Line</div>
                    <div className={`${styles.theme_switch} ${styles.header__theme_switch}`}>
                        <div className={styles.theme_switch__body}>
                            <button onClick={() => setButtonSwitching(0)}>
                                Light
                            </button>
                            <button onClick={() => setButtonSwitching(1)}>
                                Dark
                            </button>
                            <div className={buttonSwitching ? `${styles.theme_switch__slider} ${styles.active}` : `${styles.theme_switch__slider}`}></div>
                        </div>
                    </div>
                </div>
                <div className={styles.chart__main}>
                    <HighchartsReact highcharts={Highcharts} options={option}/>
                </div>
                <div className={styles.chart__footer}>

                </div>
            </div>
        </div>
    )
}


/**
() => isDark.value,
    () => {
        if (isDark.value) {
            theme.value = {
                ...initialOptions,
                chart: {
                    backgroundColor: '#1e293b',
                },
                xAxis: {
                    labels: {
                        style: {
                            color: '#cbd5e1',
                        },
                    },
                },
                yAxis: {
                    labels: {
                        style: {
                            color: '#cbd5e1',
                        },
                    },
                    title: {
                        style: {
                            color: '#cbd5e1',
                        },
                    },
                },
                legend: {
                    itemStyle: {
                        color: '#94a3b8',
                    },
                    itemHoverStyle: {
                        color: '#e2e8f0',
                    },
                },
            };
        } else {
            theme.value = {
                ...initialOptions,
                chart: {
                    backgroundColor: '#ffffff',
                },
                xAxis: {
                    labels: {
                        style: {
                            color: '#666666',
                        },
                    },
                },
                yAxis: {
                    labels: {
                        style: {
                            color: '#666666',
                        },
                    },
                    title: {
                        style: {
                            color: '#666666',
                        },
                    },
                },
                legend: {
                    itemStyle: {
                        color: '#333333',
                    },
                    itemHoverStyle: {
                        color: '#000000',
                    },
                },
            };
        }
    },
    { immediate: true },

 */

