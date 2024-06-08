import { Metadata } from 'next'
import axios from 'axios'
import { BASE_URL } from '@/utils/url'

export const metadata: Metadata = {
  title: 'Movie Detail',
}

const getMovie = async (id: string) => {
  const { data: movie }: { data: IMovieDetail } = await axios.get(
    `${BASE_URL}/${id}`
  )

  return movie
}

export default async function Page({
  params: { id },
}: {
  params: { id: string }
}) {
  const movie = await getMovie(id)

  return (
    <div>
      <img src={movie.backdrop_path} alt={movie.title} />
      <div>{movie.title}</div>
    </div>
  )
}
