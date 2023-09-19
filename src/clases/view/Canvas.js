import { getCanvas, ubication } from '/src/index.js'

export class Canvas {
	constructor() {
		this.canvas = HTMLCanvasElement
		this.context = CanvasRenderingContext2D
		this.position = {
			x: 0,
			y: 0,
		}
		this.size = {
			width: 0,
			height: 0,
		}

		this.#init()
	}

	#init() {
		const { canvas, context } = getCanvas({ on: root })
		this.canvas = canvas
		this.context = context

		this.size.height = canvas.height
		this.size.width = canvas.width
	}

	clear() {
		this.context.clearRect(
			this.getSizes().left,
			this.getSizes().top,
			this.getSizes().right,
			this.getSizes().bottom
		)
	}

	getContext() {
		return this.context
	}

	getSizes() {
		return {
			top: ubication(this).top,
			bottom: ubication(this).bottom,
			right: ubication(this).right,
			left: ubication(this).left,
		}
	}
}
