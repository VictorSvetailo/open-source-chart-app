import React from 'react'

import {FC} from 'react'
import './AppButton.scss'

interface AppButtonType {
    onClick?: () => void
    mode: string
    children?: any
    disabled?: boolean
    classNameCustom?: string
}

export const AppButton: FC<AppButtonType> = React.memo(({onClick, mode, children, disabled, classNameCustom = ''}) => {

   const buttonModesStyles = () => {
      if (mode?.includes('coral')) return `button button_coral ${disabled && 'disabled'} ${classNameCustom}`
      if (mode?.includes('green')) return `button button_green ${disabled && 'disabled'} ${classNameCustom}`
      if (mode?.includes('blue')) return `button  button_blue ${disabled && 'disabled'}  ${classNameCustom}`
      if (mode?.includes('black')) return `button button_black ${disabled && 'disabled'} ${classNameCustom}`
   }

   return (
      <button
         className={buttonModesStyles()}
         onClick={onClick}
         disabled={disabled}
      >
         {children}
      </button>
   )
})

