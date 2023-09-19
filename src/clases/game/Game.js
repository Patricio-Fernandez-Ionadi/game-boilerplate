import { Keyboard, getDeltaTime, Canvas } from '/src/index.js'

export class Game {
	constructor() {
		this.canvas = null
		this.context = null
		this.timer = {
			fps: 0,
			aps: 0,
			fpsCounter: 0,
			apsCounter: 0,
			tick: 1 * 1000,
			counter: 0,
			tickUpdate: false,
			frame_id: null,
		}
		this.keyboard = {}

		this.frameId = null
		this.isRunning = false
		this.over = false

		this.#init()
	}

	// PUBLIC
	play() {
		if (!this.frameId) this.#startAnimation()

		this.isRunning = true
	}

	// PRIVATE
	#init() {
		this.canvas = new Canvas()
		this.context = this.canvas.getContext()

		this.keyboard = new Keyboard()
	}
	#startAnimation() {
		this.frameId = window.requestAnimationFrame(this.#loop.bind(this))
	}
	#stopAnimation() {
		if (this.frameId) window.cancelAnimationFrame(this.frameId)
	}

	#handleTimers(deltaTime) {
		// control por tick
		if (this.timer.tickCounter > this.timer.tick) {
			this.timer.tickUpdate = true
			this.timer.tickCounter = 0
		} else {
			this.timer.tickUpdate = false
			this.timer.tickCounter += deltaTime
		}

		// control por segundo
		if (this.timer.counter > 1000) {
			this.timer.fps = this.timer.fpsCounter
			this.timer.aps = this.timer.apsCounter
			this.timer.fpsCounter = 0
			this.timer.apsCounter = 0
			this.timer.counter = 0
			// console.log(`FPS: ${this.timer.fps} || APS: ${this.timer.aps}`)
		} else {
			this.timer.counter += deltaTime
		}
	}
	#clearCanvas() {
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
	}

	// WRITTEABLE CODE

	#draw() {
		this.timer.fpsCounter++
		/* // ------- ######## ------- // */
		/* // ------- ######## ------- // */
		// -> dibujado de componentes
	}
	#update() {
		this.#clearCanvas()
		this.timer.apsCounter++
		/* // ------- ######## ------- // */
		/* // ------- ######## ------- // */
		// -> actualizacion libre de componentes

		/* // ------- ######## ------- // */
		/* // ------- ######## ------- // */
		// --- actualizacion por tiempo ---
		if (this.timer.tickUpdate) {
			// -> actualizacion limitada de componentes
		}
	}

	#loop(timeStamp) {
		const deltaTime = getDeltaTime(timeStamp)
		this.#handleTimers(deltaTime)
		this.#clearCanvas()
		/* // ------- ######## ------- // */
		/* // ------- ######## ------- // */
		// -> Operaciones de animación

		this.#update()
		this.#draw()

		/* // ------- ######## ------- // */
		/* // ------- ######## ------- // */
		if (this.over) this.#stopAnimation()
		this.frameId = window.requestAnimationFrame(this.#loop.bind(this))
	}
}
