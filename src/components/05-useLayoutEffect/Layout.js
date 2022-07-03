import React, { useLayoutEffect, useRef, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { useCounter } from "../../hooks/useCounter";
import "../02-useEffect/effects.css";
import "./layout.css";

export const Layout = () => {
	const { counter, increment } = useCounter(1);

	const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

	//Si existe data extrae la posicion cero de la data
	const { quote } = !!data && data[0];

	const pTag = useRef();

	const [boxSize, setBoxSize] = useState({});

	useLayoutEffect(() => {
		setBoxSize(pTag.current.getBoundingClientRect());
	}, [quote]);

	return (
		<div>
			<h1>Layout Effect</h1>
			<hr />
			<blockquote className='blockquote text-right'>
				<p className='mb-0' ref={pTag}>
					{quote}
				</p>
				<br />
			</blockquote>
			<pre>{JSON.stringify(boxSize, null, 3)}</pre>
			<button className='btn btn-primary' onClick={increment}>
				Siguiente quote
			</button>
		</div>
	);
};
