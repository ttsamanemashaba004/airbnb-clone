import './ListingPage.css'
import ImageGrid from './ImageGrid'
import ListingContent from './ListingContent'
import Reviews from './Reviews'
import AboutTheHost from './AboutTheHost'
import ThingsToKnow from './ThingsToKnow'
import ListingPreFooter from './ListingPreFooter'

const ListingPage = () => {
  return (
    <div className='Listing_page_container'>
        <ImageGrid />
        <ListingContent />
        <hr />
        <Reviews />
        <hr />
        <hr />
        <AboutTheHost />
        <hr />
        <ThingsToKnow />
        <ListingPreFooter />
    </div>
  )
}

export default ListingPage