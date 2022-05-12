import React from 'react'

export const Tiempo = ({ data }) => {
  const horario = data.location.localtime
  const diaSlice = horario.slice(0, 10)
  const horaSlice = horario.slice(10, 16)
  return (
    <div className='flex flex-col text-center'>
      <h1 className='text-5xl pt-3 sm:text-6xl sm:mx-4 sm:my-1 sm:tracking-wider'>
        {/* {data.location.name} */}
      </h1>
      <div className='flex justify-center'>
        <p className='text-1xl mx-9 my-2 sm:text-3xl'>{`${diaSlice}`}</p>
        <p className='text-1xl mx-9 my-2 sm:text-3xl'>{`${horaSlice}`}</p>
      </div>
      <p className='text-1xl mx-4 my-2 sm:text-3xl '>
        {data.current.condition}
      </p>
      <div>
        <h1 className='font-normal text-6xl mx-4 sm:text-5xl sm:font-semibold '>
          {data.current.temp_c}
          <span className='font-thin sm:font-normal'> C°</span>
        </h1>
      </div>
    </div>
  )
}
