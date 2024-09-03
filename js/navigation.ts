/*
COMMON NAV by Alyx Shang.
Licensed under the FSL v1.
*/

export function slideOutHorizontalOpenNav(elementId: string): void {
	let element: HTMLElement = document.getElementById(elementId)!;
	element.style.width = '100vw';
}

export function slideOutHorizontalCloseNav(elementId: string): void {
	let element: HTMLElement = document.getElementById(elementId)!;
	element.style.width = '0vw';
}

export function slideOutVerticalOpenNav(elementId: string): void {
	let element: HTMLElement = document.getElementById(elementId)!;
	element.style.height = '100vh';
}

export function slideOutVerticalCloseNav(elementId: string): void {
	let element: HTMLElement = document.getElementById(elementId)!;
	element.style.height = '0vh';
}

export function slideOutFromCornerOpenNav(elementId: string): void {
	let element: HTMLElement = document.getElementById(elementId)!;
	element.style.width = '100vw';
	element.style.height = '100vh';
}

export function slideOutFromCornerCloseNav(elementId: string): void {
	let element: HTMLElement = document.getElementById(elementId)!;
	element.style.width = '0vw';
	element.style.height = '0vh';
}

export default {
	slideOutHorizontalOpenNav,
	slideOutHorizontalCloseNav,
	slideOutVerticalOpenNav,
	slideOutVerticalCloseNav,
	slideOutFromCornerOpenNav,
	slideOutFromCornerCloseNav
};
