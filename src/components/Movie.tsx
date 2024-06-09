import Link from 'next/link'

export default function Movie(movie: IMovie) {
  return (
    <div className='mb-2 md:mb-10 hover:scale-105 ease-in-out duration-300'>
      <Link href={`/movie/${movie.id}`}>
        <h1 className='text-sm md:text-lg text-ellipsis overflow-hidden whitespace-nowrap pl-1 mb-1'>
          {movie.title}
        </h1>
        <img
          src={movie.backdrop_path}
          alt={movie.title}
          className='w-11/12 rounded-lg'
        />
      </Link>
    </div>
  )
}
