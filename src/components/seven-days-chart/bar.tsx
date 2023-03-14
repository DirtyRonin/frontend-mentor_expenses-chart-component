import React from 'react'
import { DailyValue } from '../../models/'

interface BarProps {
  dailyValue: DailyValue
  highestValue: DailyValue
}

export function Bar({ highestValue, dailyValue }: BarProps) {
  const [showToolTip, setShowTooltip] = React.useState(false)

  const isHighestValue = () =>
    !(
      dailyValue.day !== highestValue.day ||
      dailyValue.amount !== highestValue.amount
    )

  return (
    <div className={`flex flex-col text-center gap-2.5 md:gap-2`}>
      <div
        className='relative text-very-pale-orange text-center font-bold 
                    h-10 text-sm 
                    md:text-base md:h-12'>
        {showToolTip ? (
          <p
            className='  absolute bg-dark-brown  bottom-2/4 right-2/4 translate-x-2/4 translate-y-2/4  shadow-sm shadow-dark-brown
          w-14 rounded py-1
          md:w-16 md:rounded-md md:py-2'>
            ${dailyValue.amount}
          </p>
        ) : null}
      </div>
      <div
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className={`${
          isHighestValue() ? 'bg-cyan' : 'bg-soft-red'
        } rounded hover:opacity-75`}
        style={{
          height: (dailyValue.amount / highestValue.amount) * 150 || 0
        }}></div>
      <p
        className='text-medium-brown text-[.6rem] md:text-sm
      '>
        {dailyValue.day}
      </p>
    </div>
  )
}
