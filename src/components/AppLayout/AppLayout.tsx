import React, {FC} from 'react'

import {CheckRoute} from '../../scripts/Layout'
import '../../assets/styles/app.scss'

const AppLayout: FC<AppLayoutType> = ({mode}) => {

    return (
        <>
            <div className={'app'}>
                {CheckRoute(mode)}
            </div>
        </>
    )
}

export default AppLayout


interface AppLayoutType {
    mode: string
}
