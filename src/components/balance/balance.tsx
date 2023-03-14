import IconLogo from '../../assets/images/logo.svg'

export function Balance() {
  return (
    <div className='flex bg-soft-red h-[100px] justify-between items-center px-4 py-2 rounded-[10px] md:px-8 md:py-4 md:rounded-2xl md:h-28'>
      <div className='grid gap-1 md:gap-1.5'>
        <p className='text-cream text-sm md:text-base'>My balance</p>
        <h2 className='text-very-pale-orange font-normal text-xl md:text-3xl'>
          $921.48
        </h2>
      </div>
      <div>
        <img alt='' src={IconLogo} />
      </div>
    </div>
  )
}
