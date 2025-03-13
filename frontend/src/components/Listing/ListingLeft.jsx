import ListingDetails from './ListingDetails'
import './ListingLeft.css'
import TopContentListing from './TopContentListing'
import ListingDescription from './ListingDescription'
import WhereYouSleep from './WhereYouSleep'
import Offers from './Offers'
import Dates from './Dates'

const ListingLeft = () => {
  return (
    <div className='listing_left'>
        <TopContentListing />
        <ListingDetails />
        <hr />
        <ListingDescription />
        <hr />
        <WhereYouSleep />
        <hr />
        <Offers />
        <hr />
        <Dates />
    </div>
  )
}

export default ListingLeft