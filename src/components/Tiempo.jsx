import React from 'react'

export const Tiempo = () => {
  return (
    <div className='flex flex-col text-center gap-5 sm:justify-around'>
      <div className='my-4'>
        <h1 className='text-5xl pt-5 sm:text-4xl mx-4 my-2 tracking-wider'>
          San Antonio
        </h1>
        <p className='text-1xl sm:text-2xl mx-4 my-2'>viernes, 12:30</p>
        <p className='text-1xl sm:text-2xl mx-4 my-2'>lluvias suaves</p>
      </div>
      <div>
        <h1 className='font-normal text-6xl mx-4 sm:text-5xl sm:font-semibold '>
          10°<span className='font-thin sm:font-normal'>C</span>
        </h1>
      </div>
    </div>
  )
}
