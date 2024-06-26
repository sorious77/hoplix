import { Metadata } from 'next'
import { Suspense } from 'react'
import axios from 'axios'
import { BASE_URL } from '@/utils/url'
import Link from 'next/link'
import MovieMenu from '@/components/MovieMenu'
import Credits from '@/components/Credits'
import Videos from '@/components/Videos'
import Providers from '@/components/Providers'
import Similars from '@/components/Similars'

const getMovie = async (id: string) => {
  const { data: movie }: { data: IMovieDetail } = await axios.get(
    `${BASE_URL}/${id}`
  )

  return movie
}

export async function generateMetadata({
  params,
}: {
  params: { id: string }
}): Promise<Metadata> {
  const id = params.id

  const movie = await getMovie(id)

  return {
    title: movie.title,
  }
}

const getRuntime = (runtime: number) => {
  return runtime > 60
    ? `${Math.floor(runtime / 60)}H ${runtime % 60}M`
    : `${runtime}M`
}

export default async function Page({
  params: { id },
}: {
  params: { id: string }
}) {
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
            <Credits id={id} />
          </Suspense>
          <Suspense fallback={<div>Loading Movie Videos...</div>}>
            <Videos id={id} />
          </Suspense>
          <Suspense fallback={<div>Loading Movie Provider...</div>}>
            <Providers id={id} />
          </Suspense>
          <Suspense fallback={<div>Loading Movie Similars...</div>}>
            <Similars id={id} />
          </Suspense>
        </MovieMenu>
      </div>
    </div>
  )
}
