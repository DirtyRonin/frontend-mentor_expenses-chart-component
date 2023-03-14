import React from 'react'
import { useBudgetState } from '../../hooks/use-budget-state'
import { days } from '../../models'
import { Bar } from './bar'

export function SevenDaysChart() {
  const { state } = useBudgetState()

  return (
    <div
      className='grid items-end 
    grid-cols-chart-table-mobile grid-rows-[215px] gap-2
     md:grid-cols-chart-table-desktop md:grid-rows-[200px] md:gap-4'>
      {days.map((day, index) => (
        <React.Fragment key={index}>
          <Bar
            dailyValue={state.expenses[day]}
            highestValue={state.expenses.highestValue}></Bar>
        </React.Fragment>
      ))}
    </div>
  )
}
