import React from 'react'

import {Home} from '../pages/home/Home'
import {ErrorPage} from '../pages/error/ErrorPage'
import {BankData} from '../pages/bankData/BankData'

export function CheckRoute(mode: string) {

    const modes: any = {
        home: <Home/>,
        bankData: <BankData/>,
        error: <ErrorPage/>
    }
    return modes[mode]
}