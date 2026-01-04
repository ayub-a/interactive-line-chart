import React from 'react'

import { ChartWithControls } from './components/chart'
import data from './data/data.json'

import './styles/theme.css'
import './styles/App.css'


function App() {
	const [chartData] = React.useState(data)
	
	return (
		<div className='App'>
			<h1 className='app_title'>A/B Test Statistics Chart 📈</h1>
			<ChartWithControls data={chartData}/>
		</div>
	)
}

export default App
