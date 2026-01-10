import '../Home/homepage.css'
import './products.css';
import { Dispatch, SetStateAction } from 'react';

interface ProductFilterProps{
	isShown: boolean,
	setIsShown: Dispatch<SetStateAction<boolean>>, //Official react way of telling Ts that this is a STATE SETTER from useState.
	handleMin: (e: React.ChangeEvent <HTMLInputElement>) => void,
	handleMax: (e: React.ChangeEvent <HTMLInputElement>) => void,
	min: number, max: number;
}
export function ProductFilter({isShown, setIsShown, handleMin, handleMax, min ,max}: ProductFilterProps){
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
