import { useEffect, useState } from 'react'
import axios from 'axios'
import fog from '/src/icons/cloudy-night-2.svg'
import { Wrapper } from './components/Wrapper'
import { Detalles } from './components/Detalles'
import { Tiempo } from './components/Tiempo'
const App = () => {
  const [input, setInput] = useState('')
  const [data, setData] = useState({})
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
          console.error(error)
        })
    }
  }
  return (
    <Wrapper>
      <div className='flex justify-center m-2 sm:w-3/4 sm:m-2'>
        <input
          type='text'
          className='rounded-lg text-2xl bg-gray-500 w-11/12  p-2 sm:h-14 '
          placeholder='San Antonio, cl'
          onChange={(e) => setInput(e.target.value)}
          value={input}
          onKeyPress={getData}
        />
      </div>
      {Object.keys(data).length === 0 ? (
        <h1 className='text3xl'>undedined</h1>
      ) : (
        <>
          <Tiempo data={data} />
          <div className='flex justify-center'>
            <img src={fog} alt='' className='w-60 sm:w-72' />
          </div>
          <Detalles data={data} />
        </>
      )}
    </Wrapper>
  )
}

export default App
