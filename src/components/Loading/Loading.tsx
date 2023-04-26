import React from 'react'

import preloaderSVG from '../../assets/img/preloader/preloader.svg'
import './Loading.scss'

export const Loading = () => {
    return (
        <div className={'loading'}>
            <img src={preloaderSVG} alt={'preloader'}/>
        </div>
    )
}

