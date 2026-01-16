import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App';

const rootE1 = document.getElementById('root');

if(!rootE1) throw new Error("The element with id root is not found")
createRoot(rootE1).render(
	<StrictMode>
		<BrowserRouter>
			<App/>
		</BrowserRouter>
	</StrictMode>
)
