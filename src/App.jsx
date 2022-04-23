import { useState, useRef } from 'react'
import axios from 'axios'

import { Wrapper } from './components/Wrapper'
import { Detalles } from './components/Detalles'
import { Tiempo } from './components/Tiempo'
import { TiempoInicial } from './components/TiempoMessage'
import { WeatherIcon } from './components/WeatherIcon'
const App = () => {
  const [input, setInput] = useState('')
  const [data, setData] = useState({})
  const [error, setError] = useState(false)
  const getData = (e) => {
    const options = {
      method: 'GET',
      url: 'https://weatherapi-com.p.rapidapi.com/current.json',
      params: { q: `${input}` },
      headers: {
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
        'X-RapidAPI-Key': '27a5fef328mshd6e08d85ee067b3p1d73d7jsna56414f40368',
      },
    }
    if (e.key == 'Enter') {
      axios
        .request(options)
        .then((response) => {
          setData(response.data)
          setInput('')
        })
        .catch(function (error) {
          setError(true)
          // console.log(error.response.data.error)
          // if (error.response.data.error.code) {
          //   console.log('eero de la api')
          // }
        })
    }
  }
  return (
    <Wrapper>
      <div className='flex justify-center m-2 w-full'>
        <input
          type='text'
          className='text-white rounded-lg text-2xl bg-gray-500 w-11/12 p-2 sm:h-14 md:w-9/12'
          placeholder='San Antonio, cl'
          onChange={(e) => setInput(e.target.value)}
          value={input}
          onKeyPress={getData}
        />
      </div>
      {Object.keys(data).length === 0 ? (
        <TiempoInicial error={error} />
      ) : (
        <>
          <Tiempo data={data} />
          <WeatherIcon data={data} />
          <Detalles data={data} />
        </>
      )}
    </Wrapper>
  )
}

export default App
