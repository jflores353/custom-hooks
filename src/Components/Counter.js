// import React, { useState } from 'react';
import React from 'react';
import { useCounter } from '../hooks/useCounter';

const Counter = () => {
	// const [value, setValue] = useState(0);
	const [value, { increase, decrease, reset }] = useCounter({
		initial: 5,
		minValue: -10,
		maxValue: 20,
	});

	return (
		<div>
			{/* <button onClick={() => setValue((prevState) => prevState - 1)}>-</button> */}
			<button onClick={decrease}>-</button>
			{value}
			{/* <button onClick={() => setValue((prevState) => prevState + 1)}>+</button> */}
			<button onClick={increase}>+</button>
			<button onClick={reset}>Reset</button>
		</div>
	);
};

export default Counter;
