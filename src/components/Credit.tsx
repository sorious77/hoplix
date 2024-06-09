'use client'

export default function Credit({ credit }: { credit: ICredit }) {
  const fallbackSrc = '/default-credit.webp'

  return (
    <div>
      <img
        src={credit.profile_path || fallbackSrc}
        alt={credit.name}
        className='rounded-2xl h-5/6 bg-white'
      />
      <div className='text-sm mt-2 text-ellipsis overflow-hidden whitespace-nowrap'>
        {credit.character}
      </div>
      <div className='text-xs text-gray-400 mb-2 text-ellipsis overflow-hidden whitespace-nowrap'>
        {credit.name}
      </div>
    </div>
  )
}
