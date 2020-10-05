export function Note({ children, title = 'Note' }) {
  return (
    <div className='my-4 bg-gradient-to-b italic text-yellow-900 from-yellow-200 to-yellow-300 shadow pb-1'>
      <div className='bg-yellow-400 font-bold text-yellow-900 border-yellow-500 border-b-2 px-2 py-2 text-center'>
        {title}
      </div>
      <div className='px-2 py-4'>{children}</div>
    </div>
  )
}
