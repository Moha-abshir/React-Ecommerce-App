import PropTypes from 'prop-types';
import './homepage.css'

export function ProductFilter({isShown}){
    
    return(
        <>
            <div className={`filter-option ${isShown ? 'show' : ''}`}>
				<div className="title"><h3>Filter</h3></div>
				<div className='cat'>
					<div>Category:</div>
					<div>
						<select name="category" id="category">
							<option value="default" >Default</option>
							<option value="clothes" >Clothes</option>
							<option value="electronics" >Electronics</option>
							<option value="furniture" >Furniture</option>
							<option value="shoes" >Shoes</option>
							<option value="miscellaneous" >miscellaneous</option>
						</select>
					</div>
				</div>
				<div className='price-estimate'>
					<div>
						<p>Price Range:</p>
					</div>
					<div className='estimator'>
						<div><p>Min Price</p><input type="text"/></div>
						<div><p>Max Price</p><input type="text"/></div>
					</div>
				</div>
				<div className='exact-details'>
					<div>
						<p>Name of the Product:</p>
						<input type="text"/>
						<p className='warning'>Enter the name if you exactly know what you are looking for!</p>
					</div>
					<div>
						<p>Exact Price:</p>
						<input type="text"/>
						<p className='warning'>Do not enter the exact price if you already estimated it within the range</p>
					</div>
				</div>

				<div className='complete'>
					<button>Complete Filtration</button>
				</div>

            </div>
        </>
    )
}
ProductFilter.propTypes = {
  isShown: PropTypes.bool.isRequired,
};
