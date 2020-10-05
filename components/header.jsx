export function Header() {
  return (
    <div className='flex justify-between sticky top-0 bg-white py-3 px-2 shadow-xs border-b-1 mb-6'>
      <div className='w-7/12'>
        <img
          src='/logo.png'
          alt='Nexttrack logo'
          className='max-w-full h-auto'
        />
      </div>
      <div className='w-auto mt-4 mr-2'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='black'
          className='h-8 w-8 text-gray-500'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M4 6h16M4 12h16M4 18h16'
          />
        </svg>
      </div>
    </div>
  )
}
