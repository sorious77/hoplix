import Link from 'next/link'

export default function Similar(similar: ISimilar) {
  return (
    <div className='mb-2 md:mb-4 hover:scale-105 ease-in-out duration-300'>
      <Link href={`/movie/${similar.id}`}>
        <h1 className='text-sm text-ellipsis overflow-hidden whitespace-nowrap pl-1 mb-1'>
          {similar.original_title}
        </h1>
        <img
          src={similar.poster_path}
          alt={similar.original_title}
          className='w-11/12 rounded-lg'
        />
      </Link>
    </div>
  )
}
