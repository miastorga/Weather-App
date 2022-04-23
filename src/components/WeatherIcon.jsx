import fog from '/src/icons/cloudy-night-2.svg'
import sunny from '/src/icons/day.svg'
import cloudy from '/src/icons/cloudy.svg'
import night from '/src/icons/night.svg'
import lightRain from '/src/icons/rainy-5.svg'
import heavyRain from '/src/icons/rainy-7.svg'
import weather from '/src/icons/weather.svg'
export const WeatherIcon = ({
  data: {
    current: { condition },
  },
}) => {
  let textWeatherIcon
  switch (condition.text) {
    case 'Sunny':
      textWeatherIcon = sunny
      break
    case 'Clear':
      textWeatherIcon = night
      break
    case 'Cloudy':
      textWeatherIcon = cloudy
      break
    case 'Mist':
    case 'Fog':
      textWeatherIcon = fog
      break
    case 'Light rain':
    case 'Moderate rain at times':
    case 'Moderate rain':
      textWeatherIcon = lightRain
      break
    case 'Heavy rain':
      textWeatherIcon = heavyRain
    default:
      textWeatherIcon = weather
      break
  }
  return (
    <div className='flex justify-center'>
      <img src={textWeatherIcon} alt='' className='h-60' />
    </div>
  )
}
