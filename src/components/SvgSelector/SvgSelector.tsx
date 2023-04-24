import React, {FC} from 'react'
import PropTypes from 'prop-types'

interface SvgSelectorType {
   id?: 'arrow-down' | 'right-arrow' | 'arrow-in-round'
   svgColor?: any
   className?: any
}


const SvgSelector: React.FC<SvgSelectorType> = ({id = 'logo', svgColor = '#fff', className}) => {
   switch (id) {
      case 'arrow-down':
         return (
            <svg className={className} width='14' height='9' viewBox='0 0 14 9' fill='none'
                 xmlns='http://www.w3.org/2000/svg'>
               <path d='M1 1.5L7 7.5L13 1.5' stroke='#6F767E' strokeWidth='1.5' strokeLinecap='round'
                     strokeLinejoin='round' />
            </svg>
         )
      case 'right-arrow':
         return (
            <svg className={className} width='7' height='12' viewBox='0 0 7 12' fill='none'
                 xmlns='http://www.w3.org/2000/svg'>
               <path d='M1 0.82077L6 5.82077L1 10.8208' stroke={svgColor} strokeLinecap='round'
                     strokeLinejoin='round' />
            </svg>
         )
      case 'arrow-in-round':
         return (
            <svg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
               <path
                  d='M14.7803 28.6445C22.5123 28.6445 28.7803 22.3765 28.7803 14.6445C28.7803 6.91254 22.5123 0.644531 14.7803 0.644531C7.04829 0.644531 0.780273 6.91254 0.780273 14.6445C0.780273 22.3765 7.04829 28.6445 14.7803 28.6445Z'
                  stroke='white' strokeLinecap='round' strokeLinejoin='round' />
               <path d='M14.7803 20.2444L20.3803 14.6444L14.7803 9.04443' stroke='white' strokeLinecap='round'
                     strokeLinejoin='round' />
               <path d='M9.18018 14.6445H20.3802' stroke='white' strokeLinecap='round' strokeLinejoin='round' />
            </svg>
         )
      default:
         return null
   }
}
export default SvgSelector
