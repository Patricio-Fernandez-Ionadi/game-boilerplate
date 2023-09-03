import { controls, createButton } from "./src/DOM/controls.js";
import { root } from "./src/DOM/root.js";
import { Game } from "./src/index.js";

let game = new Game();

createButton("start");
createButton("restart");
createButton("stop");

for (let n of controls.childNodes) {
	n.addEventListener("click", (e) => {
		const label = e.target.innerHTML;
		switch (label) {
			case "start":
				root.style.backgroundColor = "black";
				game.start();
				loop();
				break;
			case "restart":
				game.stop();
				game = new Game();
				game.start();
				break;
			case "stop":
				root.style.backgroundColor = "#ddd";
				game.stop();
				break;
		}
	});
}

function loop(stamp) {
	const loopId = window.requestAnimationFrame(loop);

	if (game.isRunning) {
		game.update(stamp);
		game.renderFPS();
	} else {
		window.cancelAnimationFrame(loopId);
	}
}
loop();
