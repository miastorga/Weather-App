import { useEffect, useState } from 'react'
import axios from 'axios'
import fog from '/src/icons/cloudy-night-2.svg'
import { Wrapper } from './components/Wrapper'
import { Detalles } from './components/Detalles'
import { Tiempo } from './components/Tiempo'
const App = () => {
  const [input, setInput] = useState()
  const [dataLocation, setDataLocation] = useState({})
  const [dataCurrent, setDataCurrent] = useState({})
  const getData = () => {
    const options = {
      method: 'GET',
      url: 'https://weatherapi-com.p.rapidapi.com/current.json',
      params: { q: 'san antonio, cl' },
      headers: {
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
        'X-RapidAPI-Key': '27a5fef328mshd6e08d85ee067b3p1d73d7jsna56414f40368',
      },
    }

    axios
      .request(options)
      .then((response) => {
        setDataLocation(response.data.location)
        setDataCurrent(response.data.current)
      })
      .catch(function (error) {
        console.error(error)
      })
  }
  const inputHandler = (e) => {
    e.preventDefault()
    setInput((prevInput) => prevInput, e.target.value)
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <Wrapper>
      <div className='flex justify-center m-2 sm:w-3/4 sm:m-2'>
        <form action='' onSubmit={(e) => inputHandler(e)}>
          <input
            type='text'
            className='rounded-lg text-2xl bg-gray-500 w-11/12  p-2 sm:h-14'
            placeholder='San Antonio, cl'
          />
        </form>
      </div>
      <Tiempo dataLocation={dataLocation} dataCurrent={dataCurrent} />
      <div className='flex justify-center'>
        <img src={fog} alt='' className='w-60 sm:w-72' />
      </div>
      <Detalles dataCurrent={dataCurrent} />
    </Wrapper>
  )
}

export default App
