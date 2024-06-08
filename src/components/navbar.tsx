import Link from 'next/link'

export default function Navbar() {
  return (
    <div>
      <h1 className='text-2xl text-center'>
        <Link href='/'>Movie App</Link>
      </h1>
    </div>
  )
}
