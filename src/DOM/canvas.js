import { FULL_WIDTH_SCREEN, FULL_HEIGHT_SCREEN } from '/src/index.js'

// --- --- --- CANVAS
export function getCanvas({ on, size }) {
	let element = on || document.querySelector('body')

	const canvas = document.createElement('canvas')
	const context = canvas.getContext('2d')

	// style
	// canvas.style.backgroundColor = 'green'
	canvas.style.position = 'absolute'
	canvas.style.top = '50%'
	canvas.style.left = '50%'
	canvas.style.transform = 'translate(-50%, -50%)'
	canvas.width = size
		? size.width
			? size.width
			: FULL_WIDTH_SCREEN
		: FULL_WIDTH_SCREEN
	canvas.height = size
		? size.height
			? size.height
			: FULL_HEIGHT_SCREEN
		: FULL_HEIGHT_SCREEN

	// create
	element.appendChild(canvas)

	return { canvas, context }
}
