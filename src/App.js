import React from 'react';

import './App.css';

import Toggle from './Components/Toggle';
import Counter from './Components/Counter';

function App() {
	return (
		<div className='App'>
			<h2>Hooks</h2>
			<Toggle />
			<br />
			<Counter />
		</div>
	);
}

export default App;
