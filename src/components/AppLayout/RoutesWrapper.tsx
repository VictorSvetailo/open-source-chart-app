import React, {FC} from 'react'
import {Route, Routes} from 'react-router-dom'

import {RoutesType} from '../../utils/constants'

import AppLayout from './AppLayout'



const RoutesWrapper: FC<RoutesWrapperType> = ({routes}) => {
   return (
      <Routes>
         {routes.map(({path, mode}) => {
            return (
               <Route
                  key={path}
                  path={path}
                  element={<AppLayout mode={mode}/>}
               />
            )
         })}
      </Routes>
   )
}

export default RoutesWrapper


interface RoutesWrapperType {
    routes: RoutesType[]
}