export function Note({ children, color = 'green', title = 'Note' }) {
  return (
    <div className={`my-4 bg-${color}-600 text-white shadow-lg pb-1`}>
      <div className='font-bold border-white border-b-2 px-2 py-2 text-center'>
        {title}
      </div>
      <div className='px-4 py-4'>{children}</div>
    </div>
  )
}
// bg-gradient-to-b  from-green-500 to-green-600
