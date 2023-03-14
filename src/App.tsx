import { Balance } from './components/balance'
import { ExpensesChart } from './components/expenses-chart'

function App() {
  return (
    <>
      <header></header>
      <nav></nav>
      <main>
        <div className='grid gap-4 bg-cream py-14 px-4 w-[375px] md:w-full md:gap-6'>
          <Balance />
          <ExpensesChart />
        </div>
      </main>
      <footer></footer>
    </>
  )
}

export default App
