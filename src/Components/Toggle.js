import React from 'react';
import { useToggle } from '../hooks/useToggle';

const Toggle = () => {
	// const [isToggled, setToggle, toggle] = useToggle(false);
	const { isToggled, toggle } = useToggle(false);

	return (
		<div>
			<button onClick={toggle}>Toggle</button>
			{isToggled && <p>I'm totally toggled!</p>}
		</div>
	);
};

export default Toggle;
