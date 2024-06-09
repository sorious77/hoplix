import axios from 'axios'
import { BASE_URL } from '@/utils/url'
import Provider from '@/components/Provider'
import React from 'react'
import Link from 'next/link'

const getProvider = async (id: string) => {
  const { data: providers }: { data: IProviders } = await axios.get(
    `${BASE_URL}/${id}/providers`
  )

  return providers['KR'] || null
}

export default async function Providers({ id }: { id: string }) {
  const provider = await getProvider(id)

  const keys: ProviderKey[] = ['flatrate', 'buy', 'rent']

  return (
    <div>
      {provider ? (
        <>
          <Link
            href={provider.link}
            target='_blank'
            className='text-lg hover:text-red-500 transition-colors ease-in-out'
          >
            View Detail
          </Link>
          {keys.map(
            (key) =>
              provider[key] && (
                <div className='mt-2' key={key}>
                  <h1 className='uppercase'>{key}</h1>
                  <div className='grid grid-cols-4'>
                    {provider[key]?.map((item) => (
                      <Provider {...item} key={item.provider_id} />
                    ))}
                  </div>
                </div>
              )
          )}
        </>
      ) : (
        'No Provider'
      )}
    </div>
  )
}
