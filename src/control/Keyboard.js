// Class
export class Keyboard {
	constructor() {
		this.lastKey = ''

		window.addEventListener('keydown', (e) => {
			const { key } = e

			switch (key) {
				case 'ArrowLeft':
					this.lastKey = 'PRESS left'
					break
				case 'ArrowRight':
					this.lastKey = 'PRESS right'
					break
				case 'ArrowUp':
					this.lastKey = 'PRESS up'
					break
				case 'ArrowDown':
					this.lastKey = 'PRESS down'
					break
			}
		})
		window.addEventListener('keyup', (e) => {
			const { key } = e

			switch (key) {
				case 'ArrowLeft':
					this.lastKey = 'RELEASE left'
					break
				case 'ArrowRight':
					this.lastKey = 'RELEASE right'
					break
				case 'ArrowUp':
					this.lastKey = 'RELEASE up'
					break
				case 'ArrowDown':
					this.lastKey = 'RELEASE down'
					break
			}
		})
	}
}

/* // Namespaces
export const Keyboard = {
	pressed: {
		right: false,
		left: false,
		up: false,
		sprint: false,
		jump: false,
		sneak: false,
		last: null,
	},

	eventListener: () => {
		console.log('teclado a la escucha')
		window.addEventListener('keydown', ({ keyCode }) => {
			// console.log(keyCode);
			Keyboard.keyPressAction(keyCode)
		})
		window.addEventListener('keyup', ({ keyCode }) => {
			// console.log(keyCode);
			Keyboard.keyUpAction(keyCode)
		})
	},
	removeListener: () => {
		console.log('teclado desactivado')
		window.removeEventListener('keydown', null)
		window.removeEventListener('keyup', null)
	},
	keyPressAction: (key) => {
		switch (key) {
			case 37:
			case 65:
				Keyboard.pressed.left = true
				Keyboard.pressed.last = 'a'
				break
			case 39:
			case 68:
				Keyboard.pressed.right = true
				Keyboard.pressed.last = 'd'
				break
			case 40:
			case 83:
				Keyboard.pressed.down = true
				break
			case 38:
			case 87:
			case 32:
				Keyboard.pressed.jump = true
				Keyboard.pressed.up = true
				break
			case 16:
				Keyboard.pressed.sprint = true
				break
			case 17:
				Keyboard.pressed.sneak = true
				break
		}
	},
	keyUpAction: (key) => {
		switch (key) {
			case 37:
			case 65:
				Keyboard.pressed.left = false
				break
			case 39:
			case 68:
				Keyboard.pressed.right = false
				break
			case 40:
			case 83:
				Keyboard.pressed.down = false
				break
			case 38:
			case 87:
			case 32:
				Keyboard.pressed.jump = false
				Keyboard.pressed.up = false
				break
			case 16:
				Keyboard.pressed.sprint = false
				break
			case 17:
				Keyboard.pressed.sneak = false
				break
		}
	},
} */
