export class Player {
	constructor() {
		this.position = {
			x: 0,
			y: 0,
		}
		this.size = {
			width: 32,
			height: 32,
		}
		this.image = ''
		this.states = []
		this.currentState = {}

		this.velocity = {
			x: 0,
			y: 0,
		}
		this.speed = 8

		this.frames = {
			frameX: 0,
			frameY: 0,
			frameInterval: 16,
			maxFrame: 1,
		}

		this.isJumping = false
		this.weight = 1
	}

	draw(ctx) {
		// cuadrado azul
		ctx.fillStyle = 'blue'
		ctx.fillRect(
			this.position.x,
			this.position.y,
			this.size.width,
			this.size.height
		)

		// imagen
		// ctx.drawImage(
		// 	/* image */ this.image,
		// 	/* source x */ this.width * this.frameX,
		// 	/* source y */ this.height * this.frameY,
		// 	/* source width */ this.width,
		// 	/* source height */ this.height,
		// 	/* destination posici */ this.x,
		// 	/* destination posici */ this.y,
		// 	/* destination width */ this.width,
		// 	/* destination height */ this.height
		// );
	}

	update() {
		this.position.x += this.velocity.x
		this.position.y += this.velocity.y
	}

	setState(state) {
		this.currentState = this.states[state]
		this.currentState.enter()
	}
}
