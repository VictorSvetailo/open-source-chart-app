import Highcharts from 'highcharts'
import Menu from 'highcharts/modules/exporting'
import Accessibility from 'highcharts/modules/accessibility'

import {BankDataType} from '../../api/api'

export const optionalChartSetting = (bankData: BankDataType[]) => {
    Menu(Highcharts)
    Accessibility(Highcharts)
    const linearGradient = {x1: 0, x2: 0, y1: 0, y2: 1.5}

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

    return {
        chart: {
            type: 'column',
            scrollablePlotArea: {
                minWidth: 1500,
                scrollPositionX: 1
            },
            navigation: {
                buttonOptions: {
                    enabled: true
                }
            },
            spacingLeft: 0,
            spacingRight: 0,
            width: null
        },
        legend: {
            align: 'left',
            x: -10,
            verticalAlign: 'middle',
            layout: 'vertical',
            itemMarginTop: 0,
            itemMarginBottom: 0
        },
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 2000
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
            categories: bankData.map((el: BankDataType) => el.month)
        },
        yAxis: {
            title: {
                text: 'Profit'
            },
            labels: {
                align: 'right',
                x: 50
            }
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
}

