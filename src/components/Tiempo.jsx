import React from 'react'
import { WeatherIcon } from './WeatherIcon.jsx'
import { Detalles } from './Detalles.jsx'
export const Tiempo = ({ data }) => {
  const horario = data.location.localtime
  const diaSlice = horario.slice(0, 10)
  const horaSlice = horario.slice(10, 16)
  return (
    <div className='flex flex-col text-center justify-center'>
      <h1 className='text-slate-900 text-5xl pt-3 sm:text-6xl sm:mx-4 sm:dnf install rust cargomy-1 sm:tracking-wider'>
        {data.location.name}
      </h1>
      <div className='flex justify-center'>
        <p className='text-slate-200 text-1xl mx-14 my-2 sm:text-3xl'>{`${diaSlice}`}</p>
        <p className='text-slate-200 text-1xl mx-14 my-2 sm:text-3xl'>{`${horaSlice}`}</p>
      </div>
      <p className='text-slate-200 text-1xl mx-4 my-2 sm:text-3xl '>
        {data.current.text}
      </p>
      <div>
        <h1 className='text-slate-200 font-normal text-6xl mx-4 sm:text-5xl sm:font-semibold '>
          {data.current.temp_c}
          <span className='text-slate-200 font-thin sm:font-normal'> C°</span>
        </h1>
      </div>
            <WeatherIcon data={data}/>
            <Detalles data={data}/>
    </div>
  )
}
