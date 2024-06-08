import Link from 'next/link'

export default function Navbar() {
  return (
    <div>
      <h1 className='text-2xl font-bold text-red-600 my-4'>
        <Link href='/'>Hoplix</Link>
      </h1>
    </div>
  )
}
