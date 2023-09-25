import { useEffect, useRef } from 'react';

export function useKeyPress(key: string, callback: (event: KeyboardEvent) => void) {
	const callbackRef = useRef(callback);

	useEffect(() => {
		callbackRef.current = callback;
	}, [callback]);

	useEffect(() => {
		const onKeyup = (event: KeyboardEvent) => {
			if (event.key === key) {
				callbackRef.current(event);
			}
		};
		document.body.addEventListener('keydown', onKeyup);
		return () => document.body.removeEventListener('keydown', onKeyup);
	}, [key]);
}
