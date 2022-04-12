import React from 'react'

export const Detalles = ({ dataCurrent }) => {
  return (
    <div className='flex justify-evenly text-2xl flex-wrap'>
      <p className='text-center sm:my-5 sm:text-3xl'>
        Humedad: {dataCurrent.humidity}%
      </p>
      <p className='text-center sm:my-5 sm:text-3xl'>
        Viento: {dataCurrent.wind_kph}km/h
      </p>
      <p className='text-center sm:my-5 sm:text-3xl'>
        Precipitacion: {dataCurrent.precip_mm}mm
      </p>
    </div>
  )
}
