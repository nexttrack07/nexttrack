export function Contents({ contents = [] }) {
  const getId = (text) => text.toLowerCase().split(' ').join('-')

  const handleClick = (line) => () => {
    document
      .getElementById(getId(line))
      .scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className='my-6 shadow rounded border border-gray-700 bg-gray-100'>
      <div className='p-4 border-gray-700 text-gray-800 border-b'>
        Table of Contents
      </div>
      <div className='p-4'>
        {contents.map((line, index) => (
          <div
            className='my-2 text-blue-700'
            key={getId(line)}
            onClick={handleClick(line)}
          >
            {`${index + 1}. ${line}`}
          </div>
        ))}
      </div>
    </div>
  )
}
