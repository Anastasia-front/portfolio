import { useCallback } from 'react';

export function useScrollLock(): Record<string, () => void> {
	const lockScroll = useCallback(() => {
		const scrollBarCompensation = window.innerWidth - document.body.offsetWidth;
		document.body.style.overflow = 'hidden';
		document.body.style.width = '100%';
		document.body.style.paddingRight = `${scrollBarCompensation}px`;
	}, []);

	const unlockScroll = useCallback(() => {
		document.body.style.overflow = '';
		document.body.style.width = 'auto';
		document.body.style.paddingRight = '0px';
	}, []);

	return { lockScroll, unlockScroll };
}
