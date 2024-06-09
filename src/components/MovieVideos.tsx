'use client'

import axios from 'axios'
import { BASE_URL } from '@/utils/url'
import YouTube from 'react-youtube'

const getMovieVideos = async (id: string) => {
  const { data: videos }: { data: IMovieVideo[] } = await axios.get(
    `${BASE_URL}/${id}/videos`
  )

  return videos
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getMovieVideos(id)

  return (
    <div className='grid grid-cols-2 gap-4'>
      {videos
        .filter((video) => video.official && video.site === 'YouTube')
        .slice(0, 8)
        .map((video) => (
          <div key={video.id}>
            <YouTube
              videoId={video.key}
              opts={{ width: '100%', height: '250px' }}
            />
          </div>
        ))}
    </div>
  )
}
