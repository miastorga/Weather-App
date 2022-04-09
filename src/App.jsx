import { useEffect, useState } from 'react'
import axios from 'axios'
import fog from '/src/icons/cloudy-night-2.svg'
import { Wrapper } from './components/Wrapper'
import { Detalles } from './components/Detalles'
import { Tiempo } from './components/Tiempo'
const App = () => {
  const [data, setData] = useState({})
  const getData = () => {
    const options = {
      method: 'GET',
      url: 'https://weatherapi-com.p.rapidapi.com/current.json',
      params: { q: 'san antonio,cl' },
      headers: {
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
        // 'X-RapidAPI-Key': '27a5fef328mshd6e08d85ee067b3p1d73d7jsna56414f40368',
      },
    }

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data)
      })
      .catch(function (error) {
        console.error(error)
      })
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <Wrapper>
      <div className='text-center m-5'>
        <input
          type='text'
          className='rounded-lg text-2xl bg-gray-200 w-11/12 h-10 my-5 p-2'
          placeholder='San Antonio, cl'
        />
      </div>
      <Tiempo />
      <div className='flex justify-center '>
        <img src={fog} alt='' className='w-56' />
      </div>
      <Detalles />
    </Wrapper>
  )
}

export default App
