import BigCard from './BigCard/BigCard'
import './Hero.css'
import Navbar from './Navbar/Navbar'
import Search from './Search/Search'


const Hero = () => {
  return (
    <div className='hero_container'>
        <Navbar />
        <Search />
        <BigCard />
    </div>
  )
}

export default Hero