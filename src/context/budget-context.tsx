import React from 'react'
import { WeeklyBudget } from '../models/budget'

export const BudgetContext = React.createContext<WeeklyBudget | undefined>(
  undefined
)
