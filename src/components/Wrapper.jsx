import React from 'react'

export const Wrapper = (props) => {
  return (
    <div
      className='h-screen bg-no-repeat bg-cover bg-[url("/src/images/ricardo-gomez-angel-jg4pkrwaico-unsplash.jpg")]
    sm:bg-left sm:flex sm:flex-col'>
      {props.children}
    </div>
  )
}
