import React, {useEffect} from 'react'

import HighchartsReact from 'highcharts-react-official'

import Highcharts from 'highcharts'

import {useAppDispatch, useAppSelector} from '../../store/store'
import {fetchBankData} from '../../store/reducers/bankDataSlice'
import {BankDataEntityType, BankDataType} from '../../api/api'

export const BankData = () => {
   const {bankData, statusBankData} = useAppSelector(state => state.bankData)
   const dispatch = useAppDispatch()

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
         type: 'line'
      },
      title: {
         text: 'Bank earnings statistics'
      },
      xAxis: {
         categories: bankData.map((el: BankDataType) => el.month)
      },
      series: [
         creatingElement(bankData.map((el: BankDataType) => el.bank.alfaBank), 'Alfa', linearGradient, [[0, '#ef3024'], [1, 'rgba(239,48,36,0.53)']]),
         creatingElement(bankData.map((el: BankDataType) => el.bank.sberBank), 'Sber', linearGradient,  [[0, '#1fa038'], [1, 'rgba(31,160,56,0.5)']]),
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
      <div>
         <HighchartsReact highcharts={Highcharts} options={option}/>
      </div>
   )
}