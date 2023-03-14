import { DailyValue, Days } from '.'

export const EmptyWeeklyValues = (): Record<
  Days | 'highestValue',
  DailyValue
> => ({
  mon: { day: 'mon', amount: 0 },
  tue: { day: 'tue', amount: 0 },
  wed: { day: 'wed', amount: 0 },
  thu: { day: 'thu', amount: 0 },
  fri: { day: 'fri', amount: 0 },
  sat: { day: 'sat', amount: 0 },
  sun: { day: 'sun', amount: 0 },
  highestValue: { day: 'sun', amount: 0 }
})

export interface WeeklyBudget {
  incomes: Record<Days | 'highestValue', DailyValue>
  expenses: Record<Days | 'highestValue', DailyValue>
  bilance: number
}
