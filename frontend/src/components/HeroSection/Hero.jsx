import './Hero.css'
import Navbar from './Navbar/Navbar'
import Search from './Search/Search'


const Hero = () => {
  return (
    <div className='hero_container'>
        <Navbar />
        <Search />
    </div>
  )
}

export default Hero