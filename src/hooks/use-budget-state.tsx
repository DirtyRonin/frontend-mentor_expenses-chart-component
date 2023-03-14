import React from 'react'
import { DailyValue, days, Days } from '../models'
import { EmptyWeeklyValues, WeeklyBudget } from '../models/budget'

export function useBudgetState() {
  const [state, dispatch] = React.useState<WeeklyBudget>({
    incomes: EmptyWeeklyValues(),
    expenses: EmptyWeeklyValues(),
    bilance: 0
  })

  const mapDailyValues = (
    dailyValues: DailyValue[]
  ): Record<Days | 'highestValue', DailyValue> => {
    const mappedDays = days.reduce((prev, current) => {
      const dailyValue = dailyValues.find((x) => x.day === current)

      if (dailyValue === undefined)
        throw new Error(`day ${current} is missing in daily values`)

      prev[current] = dailyValue

      return prev
    }, EmptyWeeklyValues())

    mappedDays.highestValue = dailyValues.sort((x, y) => {
      if (x.amount < y.amount) return 1
      if (x.amount > y.amount) return -1
      return 0
    })[0]

    return mappedDays
  }

  React.useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/assets/data.json`)
      .then((result) => result.json())
      .then((data) =>
        dispatch((prevState) => ({
          ...prevState,
          expenses: mapDailyValues(data)
        }))
      )
  }, [])

  return { state }
}
