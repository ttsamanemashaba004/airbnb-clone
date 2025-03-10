import './ListingContent.jsx'
import ListingLeft from './ListingLeft.jsx'
import ListingRight from './ListingRight.jsx'

const ListingContent = () => {
  return (
    <div className='listing_content_container'> 
        <ListingLeft/>
        <ListingRight />
    </div>
  )
}

export default ListingContent