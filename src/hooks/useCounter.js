import { useState } from 'react';

export const useCounter = (initial = 0) => {
	const [value, setValue] = useState(initial);

	const increase = () => {
		setValue((prevState) => prevState + 1);
	};
	const decrease = () => {
		setValue((prevState) => prevState - 1);
	};

	return [value, { increase, decrease }];
};
