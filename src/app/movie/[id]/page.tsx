import { Metadata } from 'next'
import MovieDetail from '@/components/MovieDetail'
import { Suspense } from 'react'

export const metadata: Metadata = {
  title: 'Movie Detail',
}

export default async function Page({
  params: { id },
}: {
  params: { id: string }
}) {
  return (
    <Suspense fallback={<div>Loading Movie Detail..</div>}>
      <MovieDetail id={id} />
    </Suspense>
  )
}
