// import React, { useState } from 'react';
import React from 'react';
import { useCounter } from '../hooks/useCounter';

const Counter = () => {
	// const [value, setValue] = useState(0);
	const [value, { increase, decrease }] = useCounter();

	return (
		<div>
			{/* <button onClick={() => setValue((prevState) => prevState - 1)}>-</button> */}
			<button onClick={decrease}>-</button>
			{value}
			{/* <button onClick={() => setValue((prevState) => prevState + 1)}>+</button> */}
			<button onClick={increase}>+</button>
		</div>
	);
};

export default Counter;
