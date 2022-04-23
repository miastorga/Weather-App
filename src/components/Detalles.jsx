import React from 'react'

export const Detalles = ({ data }) => {
  return (
    <div className='flex justify-evenly text-2xl flex-wrap'>
      <p className='text-center sm:text-3xl'>
        Humedad: {data.current.humidity}%
      </p>
      <p className='text-center sm:text-3xl'>
        Viento: {data.current.wind_kph}km/h
      </p>
      <p className='text-center sm:text-3xl'>
        Precipitacion: {data.current.precip_mm}mm
      </p>
    </div>
  )
}
