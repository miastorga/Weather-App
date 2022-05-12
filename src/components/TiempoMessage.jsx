import React from 'react'

export const TiempoMessage = ({ error }) => {
  return (
    <div className='m-2 text-center text-black font-bold sm:text-lg md:text-2xl'>
      {error ? (
        <h1>No se pudo encontrar la ciudad </h1>
      ) : (
        <h1>Ingrese una ciudad</h1>
      )}
    </div>
  )
}
