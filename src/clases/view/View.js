import { Canvas, removeCanvas, root } from "../../DOM/root.js";

export class View {
	constructor() {
		this.canvas = HTMLCanvasElement;
		this.context = null;
		this.position = {
			x: 0,
			y: 0,
		};
		this.size = {
			width: 1024,
			height: 576,
		};
	}

	setView() {
		this.canvas = root.appendChild(Canvas());
		this.context = this.canvas.getContext("2d");
		this.canvas.style.backgroundColor = "white";
		// console.log(this.canvas);
		// console.log(this.context);

		this.canvas.height = this.size.height;
		this.canvas.width = this.size.width;
	}

	closeView() {
		removeCanvas();
	}

	clear() {
		this.context.clearRect(
			this.position.x,
			this.position.y,
			this.size.width,
			this.size.height
		);
	}

	getContext() {
		return this.context;
	}

	getSizes() {
		return {
			top: this.position.y,
			bottom: this.size.height,
			right: this.size.width,
			left: this.position.x,
		};
	}
}
