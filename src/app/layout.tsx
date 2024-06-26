import type { Metadata } from 'next'
import './globals.css'
import React from 'react'
import Navbar from '@/components/navbar'

export const metadata: Metadata = {
  title: {
    template: '%s | Hoplix',
    default: 'Hoplix',
  },
  description: 'Developed by sorious77',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html>
      <body className='px-5 md:px-10'>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
