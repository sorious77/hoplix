'use client'

import { useState } from 'react'

export default function MovieMenu({
  labels,
  children,
}: {
  labels: string[]
  children: React.ReactNode[]
}) {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className='my-4 flex flex-col'>
      <div className='self-center'>
        <div className='flex'>
          {labels.map((label, index) => (
            <button
              key={index}
              className={`px-4 py-2 -mb-px text-center font-semibold text-sm transition-colors ease-in-out uppercase ${
                index === activeTab
                  ? 'text-red-500 border-b-2 border-red-500'
                  : 'text-white border-b-2 border-black'
              }`}
              onClick={() => setActiveTab(index)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
      <div className='p-4'>{children[activeTab]}</div>
    </div>
  )
}
