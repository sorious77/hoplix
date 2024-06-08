import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Movie Detail',
}

export default function Page({ params: { id } }: { params: { id: string } }) {
  return <>{id}</>
}
