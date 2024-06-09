import axios from 'axios'
import { BASE_URL } from '@/utils/url'
import MovieCredit from '@/components/MovieCredit'

const getCredits = async (id: string) => {
  const { data: credits }: { data: ICredit[] } = await axios.get(
    `${BASE_URL}/${id}/credits`
  )

  return credits
}

export default async function MovieCredits({ id }: { id: string }) {
  const credits = await getCredits(id)

  return (
    <div className='mt-2 grid grid-cols-4 gap-2'>
      {credits.slice(0, 8).map((credit) => (
        <MovieCredit credit={credit} key={credit.id} />
      ))}
    </div>
  )
}
