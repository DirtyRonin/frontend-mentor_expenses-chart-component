import React from 'react'
import { BudgetContext } from '../context/budget-context'

export function useBudgetContext() {
  const context = React.useContext(BudgetContext)

  if (context === undefined)
    throw new Error('BudgetContext was used outside of its Provider')

  return context
}
