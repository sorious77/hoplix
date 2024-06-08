import Link from 'next/link'

export default function Movie(movie: IMovie) {
  return (
    <div>
      <Link href={`/movie/${movie.id}`}>
        <h1 className='text-xl'>{movie.title}</h1>
        <img src={movie.backdrop_path} alt={movie.title} className='w-60' />
      </Link>
    </div>
  )
}
