import { Keyboard } from "../../index.js";
import { ubication } from "../../utils/ubication.js";
import { View } from "../index.js";

class Player {
	constructor() {
		this.position = {
			x: 0,
			y: 0,
		};
		this.size = {
			width: 32,
			height: 32,
		};
		this.velocity = {
			x: 0,
			y: 0,
		};
		this.speed = 8;
		this.isJumping = false;
		this.moving = false;
		this.bounce = true;
	}

	draw(c) {
		c.fillStyle = "blue";
		c.fillRect(
			this.position.x,
			this.position.y,
			this.size.width,
			this.size.height
		);
	}

	update(c) {
		this.draw(c);
		this.position.x += this.velocity.x;
		this.position.y += this.velocity.y;
	}
}

export class Game {
	constructor() {
		//
		this.isRunning = false;
		this.frames = {
			secs: 0,
			elapsed: 0,
			counter: 0,
			stamp: 0,
			fps: 0,
		};

		//
		this.keys = Keyboard;

		//
		this.screen = new View();
		this.$canvas = null;
		this.c = null;

		//
		this.gravity = 1;
		this.player = null;
		this.camera = {
			position: {
				x: this.screen.size.width * 0.3,
				y: 0,
			},
			size: {
				width: this.screen.size.width * 0.3,
				height: this.screen.size.height,
			},
			empty: true,
		};

		//
		this.entities = [];
		this.map = {
			scrollOffset: 0,
		};
	}

	__init__() {
		// creacion de canvas
		this.screen.setView();
		// escucha de teclado
		this.keys.eventListener();
		// set de canvas en Game
		this.$canvas = this.screen.canvas;
		this.c = this.screen.context;
	}

	start() {
		if (!this.isRunning) {
			console.warn("game running");
			// cambio de estado
			this.isRunning = true;
			// creacion de juego
			this.__init__();
			// creacion de personaje
			if (this.player) return this.player;
			else this.player = new Player();
		}
	}

	stop() {
		// cambio de estado
		this.isRunning = false;
		// eliminacion canvas
		this.screen.closeView();
		// remover eventos de teclado
		this.keys.removeListener();
		// reseteo de valores
		this.resetCounter();
		this.player = null;

		console.error("game not running");
	}

	update(ts) {
		// limpiar pantalla
		this.screen.clear();
		// enviar timestamp al contador de fps
		this.fpsCounter(ts);
		// dibujado de personaje
		this.showCamera();
		this.__playerUpdate();
	}

	__playerUpdate() {
		this.player.update(this.c);
		this.applyGravity(this.player);

		if (
			this.keys.pressed.right &&
			ubication(this.player).right + this.player.velocity.x <
				ubication(this.camera).right
		) {
			this.player.moving = true;
			this.moveRight(this.player);
		} else if (
			this.keys.pressed.left &&
			ubication(this.player).left > ubication(this.camera).left
		) {
			this.player.moving = true;
			this.moveLeft(this.player);
		} else {
			this.player.moving = false;
			this.moveLeft(this.player);
			this.moveRight(this.player);
		}

		if (this.keys.pressed.jump && !this.player.isJumping) {
			this.player.isJumping = true;
			this.player.velocity.y = -15;
		}
	}

	// ------------------------
	showCamera() {
		this.c.fillStyle = "rgba(255,0,0,0.5)";
		this.c.fillRect(
			this.camera.position.x,
			this.camera.position.y,
			this.camera.size.width,
			this.camera.size.height
		);

		if (
			ubication(this.player).left > this.camera.position.x &&
			ubication(this.player).right <
				this.camera.position.x + this.camera.size.width
		) {
			this.camera.empty = false;
		}
	}

	applyGravity(e) {
		let succes = false;

		if (ubication(e).bottom < this.camera.size.height) {
			e.velocity.y += this.gravity;
		} else {
			e.velocity.y = 0;
			e.position.y = this.camera.size.height - e.size.height;
			succes = true;
		}

		if (succes) {
			if (this.player.isJumping) this.player.isJumping = false;
		}
	}

	moveRight(elem) {
		if (this.player.moving) {
			elem.velocity.x = this.player.speed;
		} else {
			this.map.scrollOffset += this.player.speed;
			elem.velocity.x = 0;
		}
	}
	moveLeft(elem) {
		if (this.player.moving) {
			elem.velocity.x = -this.player.speed;
		} else {
			if (this.map.scrollOffset > 0) {
				this.map.scrollOffset += -this.player.speed;
			}
			elem.velocity.x = 0;
		}
	}

	//
	resetCounter() {
		this.frames.secs = 0;
		this.frames.elapsed = 0;
		this.frames.stamp = 0;
		this.frames.counter = 0;
		this.frames.fps = 0;
	}
	renderFPS() {
		this.c.font = "20px Arial";
		this.c.fillStyle = "black";
		this.c.fillText(`fps: ${this.frames.fps}`, 10, 20);
	}
	fpsCounter(timestamp) {
		this.frames.counter++;
		if (timestamp - this.frames.stamp >= 1000) {
			this.frames.stamp = timestamp;
			this.frames.fps = this.frames.counter;
			this.frames.counter = 0;
			this.frames.secs++;
		}
		if (this.frames.elapsed !== this.frames.secs) {
			this.renderFPS();
			this.frames.elapsed++;
		}
	}
}
