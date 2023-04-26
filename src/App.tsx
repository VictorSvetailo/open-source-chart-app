import React from 'react'
import {Provider} from 'react-redux'

import {store} from './store/store'
import RoutesWrapper from './components/AppLayout/RoutesWrapper'
import {routes} from './utils/constants'


function App() {
    return (
        <Provider store={store}>
            <RoutesWrapper routes={routes}/>
        </Provider>
    )
}

export default App
