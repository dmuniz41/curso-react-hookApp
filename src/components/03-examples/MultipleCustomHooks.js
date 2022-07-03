import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { useCounter } from "../../hooks/useCounter";
import "../02-useEffect/effects.css";

export const MultipleCustomHooks = () => {
	const { counter, increment } = useCounter(1);

	const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

	//Si existe data extrae la posicion cero de la data
	const { author, quote } = !!data && data[0];

	console.log(author, quote);
	return (
		<div>
			<h1>Breaking Bad Quotes</h1>
			<hr />

			{loading ? (
				<div className='alert alert-info text-center'>Loading ....</div>
			) : (
				<blockquote className='blockquote text-right'>
					<p className='mb-0'>{quote}</p>
					<br />
					<footer className='blockquote-footer'>{author}</footer>
					<button className='btn btn-primary' onClick={increment}>
						Siguiente quote
					</button>
				</blockquote>
			)}
		</div>
	);
};
