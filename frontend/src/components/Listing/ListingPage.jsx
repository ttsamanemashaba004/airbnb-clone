import './ListingPage.css'
import ImageGrid from './ImageGrid'
import ListingContent from './ListingContent'

const ListingPage = () => {
  return (
    <div className='Listing_page_container'>
        <ImageGrid />
        <ListingContent />
    </div>
  )
}

export default ListingPage