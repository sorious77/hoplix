import axios from 'axios'
import { BASE_URL } from '@/utils/url'
import Movie from '@/components/Movie'
import Similar from '@/components/Similar'

const getSimilars = async (id: string) => {
  const { data: similars }: { data: ISimilar[] } = await axios.get(
    `${BASE_URL}/${id}/similar`
  )

  return similars
}

export default async function Similars({ id }: { id: string }) {
  const similars = await getSimilars(id)

  return (
    <div className='grid grid-cols-2 md:grid-cols-4 gap-2'>
      {similars.map((movie) => (
        <Similar {...movie} key={movie.id} />
      ))}
    </div>
  )
}
