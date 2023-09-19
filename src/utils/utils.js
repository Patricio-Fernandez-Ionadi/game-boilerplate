export function ubication(elem) {
	return {
		top: elem.position.y,
		left: elem.position.x,
		bottom: elem.position.y + elem.size.height,
		right: elem.position.x + elem.size.width,
	}
}
export function inCollision(e1, e2) {
	return (
		ubication(e1).left > ubication(e2).right &&
		ubication(e1).right < ubication(e2).left &&
		ubication(e1).top < ubication(e2).bottom &&
		ubication(e1).bottom > ubication(e2).top
	)
}

// --- --- --- CANVAS
// sin uso
export const _Canvas_ = {
	getCanvas: ({ on, size }) => {
		const { canvas, context } = getCanvas({ on, size })

		_Canvas_.canvas = canvas
		_Canvas_.context = context
	},
	canvas: null,
	context: null,
	width: 900,
	height: 475,
}
/**
 * aplica efecto de sombra interna
 * fue creada para rectangulos pequeños (16*16)
 * podria no funcionar con otros tamaños
 * configurar shadowOffsetX y shadowOffsetY para otros tamaños
 *
 * @param {CanvasRenderingContext2D} ctx
 */
export function applySquareShadow(ctx) {
	ctx.shadowOffsetX = -1
	ctx.shadowOffsetY = -1
	ctx.shadowBlur = 5
	ctx.shadowColor = 'rgba(120, 120, 120, 0.2)'
}

// --- --- --- TIMERS
/**
 * funcion que a partir de una instancia genera una variable lts (last timeStamp)
 * seteada en 1 y devuelve una funcion que la utilizara como contador
 * el valor de lts se mantendra para esa instancia
 * al llamar a la funcion llamada debemos pasarle el timeStamp del renderizado y restandolo con el valor del ultimo timeStamp (lts) obtendremos el deltaTime
 *
 * @returns fuction (timestamp) -> deltaTime
 */
const gts = () => {
	let lts = 1
	return (ts) => {
		const deltaTime = ts - lts
		lts = ts
		return deltaTime
	}
}
/**
 * instancia de gts para poder conservar el valor interno de la HOF y poder darle un nombre mas intuitivo
 *
 * @param timeStamp
 */
export const getDeltaTime = gts()

// --- --- --- OTHERS
/**
 * Genera un color aleatorio en sistema Hexadecimal
 * @returns random string of hex color ('#f8d9b0')
 */
export function getRandomColor() {
	const caracteres = [
		'a',
		'b',
		'c',
		'd',
		'e',
		'f',
		'0',
		'1',
		'2',
		'3',
		'4',
		'5',
		'6',
		'7',
		'8',
		'9',
	]
	let color = ''
	for (let i = 1; i < 7; i++) {
		const random = Math.floor(Math.random() * caracteres.length)
		color += caracteres[random]
	}
	return '#' + color
}
