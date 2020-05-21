import { useState } from 'react';

export const useCounter = ({
	minValue = -1000,
	maxValue = 1000,
	initial = 0,
}) => {
	const [value, setValue] = useState(initial);

	const increase = () => {
		setValue((prevState) => (prevState >= maxValue ? maxValue : prevState + 1));
	};
	const decrease = () => {
		setValue((prevState) => (prevState <= minValue ? minValue : prevState - 1));
	};

	const reset = () => setValue(initial);

	return [value, { increase, decrease, reset, step }];
};
