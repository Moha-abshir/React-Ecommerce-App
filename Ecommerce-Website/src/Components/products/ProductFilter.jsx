import PropTypes from 'prop-types';
import '../Home/homepage.css'
import './products.css';

export function ProductFilter({isShown, setIsShown, handleMin, handleMax, min ,max}){
	

    return(
        <>
            <div className={`filter-option ${isShown ? 'show' : ''}`}>
				<div className="title"><h3>Filter</h3></div>

				<div className='price-estimate'>
					<div>
						<p>Price Range:</p>
					</div>
					<div className='estimator'>
						<div><p>Min Price</p><input type="text" onChange={handleMin} value={min}/></div>
						<div><p>Max Price</p><input type="text" onChange={handleMax} value={max}/></div>
					</div>
				</div>

				<div className='complete'>
					<button onClick={()=>{setIsShown(false)}}>Complete Filtration</button>
				</div>

            </div>
        </>
    )
}
ProductFilter.propTypes = {
  isShown: PropTypes.bool.isRequired,
  setIsShown:PropTypes.func.isRequired,
  handleMin: PropTypes.func.isRequired,
  handleMax: PropTypes.func.isRequired,
  min: PropTypes.string.isRequired,
  max: PropTypes.string.isRequired
};
