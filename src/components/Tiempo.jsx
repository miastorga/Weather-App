import React from 'react'

export const Tiempo = ({ dataLocation, dataCurrent }) => {
  console.log(dataLocation)
  console.log(dataCurrent)
  return (
    <div className='flex flex-col text-center gap-5 '>
      <div className=''>
        <h1 className='text-5xl pt-3 sm:text-6xl sm:mx-4 sm:my-1 sm:tracking-wider'>
          {dataLocation.name}
        </h1>
        <p className='text-1xl mx-4 my-2 sm:text-3xl '>
          {dataLocation.localtime}
        </p>
        <p className='text-1xl mx-4 my-2 sm:text-3xl '>
          {/* {dataCurrent.condition.text} */}
        </p>
      </div>
      <div>
        <h1 className='font-normal text-6xl mx-4 sm:text-5xl sm:font-semibold '>
          {dataCurrent.temp_c}
          <span className='font-thin sm:font-normal'> C°</span>
        </h1>
      </div>
    </div>
  )
}
