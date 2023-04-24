import React, {FC} from 'react'

import {checkRoute} from '../../scripts/layout'
import '../../assets/styles/app.scss'

const AppLayout: FC<AppLayoutType> = ({mode}) => {

   return (
      <>
         <div className='app'>
            {checkRoute(mode)}
         </div>
      </>
   )
}

export default AppLayout


interface AppLayoutType{
    mode: string
}
