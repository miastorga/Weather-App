import React from 'react'
import notFound from '/src/Imgs/SeekPng.com_donald-trump-toupee-png_3292234-min.png'
export const TiempoMessage = ({ error }) => {
  return (
    <div className='text-2xl flex flex-col justify-center  items-center h-80 m-2 text-center font-bold md:text-4xl'>
      {error ? (
        <>
          <h1 className='text-slate-200 mt-10'>
            No se pudo encontrar la ciudad{' '}
          </h1>
          <div>
            <img src={notFound} alt='' className='h-56 mt-10' />
          </div>
        </>
      ) : (
        <h1 className='text-slate-200 mt-10'>Ingresa una ciudad</h1>
      )}
    </div>
  )
}
