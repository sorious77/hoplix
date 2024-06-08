import type { Metadata } from 'next'
import axios from 'axios'
import { BASE_URL } from '@/utils/url'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Home',
}

const getMovies = async () => {
  const { data }: { data: Movie[] } = await axios.get(`${BASE_URL}/movies`)

  return data
}

export default async function Home() {
  const movies = await getMovies()

  return (
    <main>
      Home~
      <div>
        {movies &&
          movies.map((movie) => (
            <div key={movie.id}>
              <Link href={`/movie/${movie.id}`}>{movie.title}</Link>
            </div>
          ))}
      </div>
    </main>
  )
}
