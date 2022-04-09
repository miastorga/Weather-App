import React from 'react'

export const Detalles = () => {
  return (
    <div className='flex justify-evenly text-2xl gap-3 p-2 flex-wrap'>
      <p className=' my-3 text-center sm:my-5 sm:text-2xl'>Humedad: 100%</p>
      <p className=' my-3 text-center sm:my-5 sm:text-2xl'>viento: 5km/h</p>
      <p className=' my-3 text-center sm:my-5 sm:text-2xl'>
        precipitacion: 0mm
      </p>
    </div>
  )
}
