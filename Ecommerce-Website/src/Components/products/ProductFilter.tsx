import '../Home/homepage.css'
import './products.css';

interface ProductFilterProps{
	isShown: boolean,
	setIsShown: (val: boolean) => void, //For handling state setters in Ts, you cam just simply type it as a function that takes a value and has no return value
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
