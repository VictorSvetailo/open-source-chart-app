import {FC} from 'react'
import './AppButton.scss'

interface AppButtonType {
   onClick?: () => void
   mode?: string
   children?: any
   disabled?: boolean
   classNameCustom?: string
}

export const AppButton: FC<AppButtonType> = ({onClick, mode, children, disabled, classNameCustom}) => {
   console.log(classNameCustom)

   function buttonModesStyles() {
      if (mode?.includes('coral')) return `button button_coral ${classNameCustom}`
      if (mode?.includes('green')) return `button button_green ${classNameCustom}`
      if (mode?.includes('blue')) return `button  button_blue  ${classNameCustom}`
      if (mode?.includes('black')) return `button button_black ${classNameCustom}`
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
}

