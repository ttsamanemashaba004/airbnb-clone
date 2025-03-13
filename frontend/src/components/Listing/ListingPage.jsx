import './ListingPage.css'
import ImageGrid from './ImageGrid'
import ListingContent from './ListingContent'
import Reviews from './Reviews'

const ListingPage = () => {
  return (
    <div className='Listing_page_container'>
        <ImageGrid />
        <ListingContent />
        <hr />
        <Reviews />
        <hr />
        <hr />
    </div>
  )
}

export default ListingPage