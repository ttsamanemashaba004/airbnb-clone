import './ListingPreFooter.css'

const ListingPreFooter = () => {
  return (
    <div className='listting_footer_container'>
        <p className='listing_footer_header'>Explore other options in France</p>
        <div className='listting_footer_columns'>
            <div className='listting_footer_columns_column'>
               <p>Paris</p>
               <p>Lille</p>
               <p>Toulouse</p> 
            </div>
            <div className='listting_footer_columns_column'>
               <p>Nice</p>
               <p>Aix-en-Provence</p>
               <p>Montpellier</p> 
            </div>
            <div className='listting_footer_columns_column'>
               <p>Lyon</p>
               <p>Rouen</p>
               <p>Dijon</p> 
            </div>
            <div className='listting_footer_columns_column'>
               <p>Marseille</p>
               <p>Amiens</p>
               <p>Grenoble</p> 
            </div>
        </div>
        <div className='listting_footer_section'>
            <p className='listting_footer_section_header'>Unique stays on Airbnb</p>
            <div className='listting_footer_columns'>
            <div className='listting_footer_columns_column'>
               <p>Beach House Rentals</p>
               <p>Cabin Rentals</p> 
            </div>
            <div className='listting_footer_columns_column'>
               <p>Camper Rentals</p>
               <p>Tiny House Rentals</p>
            </div>
            <div className='listting_footer_columns_column'>
               <p>Glamping Rentals</p>
               <p>Lakehouse Rentals</p> 
            </div>
            <div className='listting_footer_columns_column'>
               <p>Treehouse Rentals</p>
               <p>Mountain Chalet Rentals</p>
            </div>
        </div>
        </div>
        <div className='listting_footer_breadcrumb'>
        <div className="text-icon">
              <span className="show-more show-more1">{`Airbnb`}</span>
              <span className="arrow">{`>`}</span>
            </div>
            <div className="text-icon">
              <span className="show-more show-more1">{`Europe`}</span>
              <span className="arrow">{`>`}</span>
            </div>
            <div className="text-icon">
              <span className="show-more show-more1">{`France`}</span>
              <span className="arrow">{`>`}</span>
            </div>
            <div className="text-icon">
              <span className="show-more show-more1">{`Bordeaux`}</span>
            </div>
        </div>
    </div>
  )
}

export default ListingPreFooter