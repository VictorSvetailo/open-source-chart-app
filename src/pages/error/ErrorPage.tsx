import React from 'react'

import {useNavigate} from 'react-router-dom'

import {RouterPath} from '../../utils/constants'
import {AppButton} from '../../components/AppButton/AppButton'
import './ErrorPage.scss'


export const ErrorPage = () => {
    const navigate = useNavigate()

    return (
        <div className={'error'}>
            <div className={'error__container'}>
                <div className={'content error__content'}>
                    <span className={'content__code'}>404</span>
                    <span className={'content__text'}>Page not found!</span>
                    <div className={'content__btn'}>
                        <AppButton mode={'coral'} onClick={() => navigate(RouterPath.home)}>
                            Back to home
                        </AppButton>
                    </div>
                </div>
            </div>
        </div>
    )
}
