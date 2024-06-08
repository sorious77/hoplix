import Link from 'next/link'

export default function Movie(movie: IMovie) {
  return (
    <div className='mb-2 md:mb-10'>
      <Link href={`/movie/${movie.id}`}>
        <h1 className='text-xs md:text-lg text-ellipsis overflow-hidden whitespace-nowrap'>
          {movie.title}
        </h1>
        <img
          src={movie.backdrop_path}
          alt={movie.title}
          className='w-100 rounded-lg'
        />
      </Link>
    </div>
  )
}
