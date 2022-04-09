import React from 'react'

export const Wrapper = (props) => {
  return (
    <div className='w-full h-screen px-0 bg-no-repeat bg-cover bg-[url("/src/images/ricardo-gomez-angel-jg4pkrwaico-unsplash.jpg")] sm:bg-left sm:p-5 sm:flex sm:justify-around'>
      {props.children}
    </div>
  )
}
