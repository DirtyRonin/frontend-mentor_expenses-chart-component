import { BudgetContext } from '../../context/budget-context'
import { useBudgetState } from '../../hooks/use-budget-state'
import { SevenDaysChart } from '../seven-days-chart'

export function ExpensesChart() {
  const { state } = useBudgetState()

  return (
    <BudgetContext.Provider value={state}>
      <div className=''>
        <div
          className='flex flex-col bg-very-pale-orange shadow-sm shadow-gray
          py-4 px-4 gap-5 rounded-xl   
          md:w-expenses-desktop md:h-expenses-desktop md:px-8 md:py-8 md:gap-8 md:rounded-2xl '>
          <div>
            <h2 className='text-dark-brown font-bold text-left text-xl md:text-3xl '>
              Spending - Last 7 days
            </h2>
          </div>
          <div>
            <SevenDaysChart />
          </div>
          <div className='border-b-2 border-cream '></div>
          <div className=''>
            <div className='grid gap-2'>
              <p className='text-sm text-medium-brown text-left'>
                Total this month
              </p>
              <div className='flex justify-between items-center'>
                <h1 className=' font-bold text-dark-brown text-2xl md:text-4xl'>
                  $478.33
                </h1>
                <div className='flex flex-col leading-4'>
                  <p className='font-bold text-end text-dark-brown text-sm md:text-base'>
                    +2.4%
                  </p>
                  <p className='text-medium-brown text-sm md:text-base'>
                    from last month
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BudgetContext.Provider>
  )
}
