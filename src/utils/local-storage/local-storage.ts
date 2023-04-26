import {AppThemeType} from '../../store/reducers/appSlice'

export const setAppThemeTypeLS = (state: AppThemeType) => {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem('application-theme-type', serializedState)
    } catch {
        // ignore write errors
    }
}

export const getAppThemeTypeLS = () => {
    try {
        const serializedState = localStorage.getItem('application-theme-type')
        if (serializedState === null) {
            return 'light'
        }
        return JSON.parse(serializedState)
    } catch (err) {
        return undefined
    }
}
