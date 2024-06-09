import axios from 'axios'
import { BASE_URL } from '@/utils/url'
import Link from 'next/link'
import { Suspense } from 'react'
import MovieCredits from '@/components/MovieCredits'
import MovieMenu from '@/components/MovieMenu'

const getMovie = async (id: string) => {
  const { data: movie }: { data: IMovieDetail } = await axios.get(
    `${BASE_URL}/${id}`
  )

  return movie
}

const getRuntime = (runtime: number) => {
  return runtime > 60
    ? `${Math.floor(runtime / 60)}H ${runtime % 60}M`
    : `${runtime}M`
}

export default async function MovieDetail({ id }: { id: string }) {
  const movie = await getMovie(id)

  return (
    <div className='md:grid md:grid-cols-2 md:gap-2'>
      <Link href={movie.homepage} target='_blank'>
        <img src={movie.poster_path} alt={movie.title} className='rounded-xl' />
      </Link>
      <div className='py-2 md:px-2 flex flex-col'>
        <h1 className='text-xl md:text-2xl'>{movie.title}</h1>
        <div className='flex mt-2'>
          {movie.genres.map((genre) => (
            <div
              className='mr-2 bg-zinc-200 text-black px-2 text-sm rounded-lg'
              key={genre.id}
            >
              {genre.name}
            </div>
          ))}
        </div>
        <div className='my-2 grid text-end'>
          <div className='flex justify-end'>
            <div className='mr-4'>{movie.release_date}</div>
            <div className='mr-4'>⭐️ {movie.vote_average.toFixed(1)}</div>
            <div>⏰ {getRuntime(movie.runtime)}</div>
          </div>
        </div>
        <p className='first-letter:text-2xl first-letter:text-red-500'>
          {movie.overview}
        </p>
        <MovieMenu labels={['credits', 'videos', 'providers', 'similar']}>
          <Suspense fallback={<div>Loading Movie Credits..</div>}>
            <MovieCredits id={id} />
          </Suspense>
          <div>videos</div>
          <div>providers</div>
          <div>similar</div>
        </MovieMenu>
      </div>
    </div>
  )
}
