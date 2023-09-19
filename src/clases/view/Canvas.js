import { getCanvas } from '/src/index.js'

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

		this.size.height = this.canvas.height
		this.size.width = this.canvas.width
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
			top: this.position.y,
			bottom: this.size.height,
			right: this.size.width,
			left: this.position.x,
		}
	}
}
