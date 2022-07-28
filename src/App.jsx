import { useState, useRef } from 'react'
import axios from 'axios'

import { Tiempo } from './components/Tiempo'
import { TiempoMessage } from './components/TiempoMessage'
const App = () => {
	const refinput = useRef('')
	const [data, setData] = useState({})
	const [error, setError] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const getData = (e) => {
		const options = {
			method: 'GET',
			url: 'https://weatherapi-com.p.rapidapi.com/current.json',
			params: { q: `${refinput.current.value}` },
			headers: {
				'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
				'X-RapidAPI-Key': `${import.meta.env.VITE_API_KEY}`,
			},
		}
		if (e.key == 'Enter') {
			setIsLoading(true)
			axios
				.request(options)
				.then((response) => {
					setData(response.data)
					refinput.current.value = ''
				})
				.catch((error) => {
					refinput.current.value = ''
					setError(true)
					setData(false)
				})
				.finally(() => {
					setIsLoading(false)
				})
		}
	}
	return (
		<>
			<div className='text-center mt-4'>
				<input
					ref={refinput}
					type='text'
					className='placeholder:text-black text-black rounded-lg text-2xl bg-gray-100 w-11/12 p-2 sm:h-14 md:w-6/12'
					placeholder='San Antonio, cl'
					// value={refinput.current.value}
					onKeyPress={getData}
				/>
			</div>
			{!isLoading && Object.keys(data).length > 0 && <Tiempo data={data} />}
			{!isLoading && Object.keys(data).length === 0 && (
				<TiempoMessage error={error} />
			)}
			{isLoading && (
				<h1 className='text-4xl text-slate-200 text-center m-10'>
					Cargando...
				</h1>
			)}
		</>
	)
}
export default App
