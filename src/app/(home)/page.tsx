import type { Metadata } from 'next'
import axios from 'axios'
import { BASE_URL } from '@/utils/url'
import Movie from '@/components/Movie'

export const metadata: Metadata = {
  title: 'Home',
}

const getMovies = async () => {
  const { data: movies }: { data: IMovie[] } = await axios.get(`${BASE_URL}`)

  return movies
}

export default async function Home() {
  const movies = await getMovies()

  return (
    <main>
      {movies && (
        <div>
          <h1 className='md:text-xl mb-4'>오늘 글로벌 TOP 20 영화</h1>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-2'>
            {movies.map((movie) => (
              <Movie {...movie} key={movie.id} />
            ))}
          </div>
        </div>
      )}
    </main>
  )
}
