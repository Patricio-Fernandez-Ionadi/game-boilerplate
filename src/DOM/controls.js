export const controls = document.getElementById("controls");

const button = (label) => {
	const btn = document.createElement("button");
	btn.innerHTML = label;
	return btn;
};

export const createButton = (label) => {
	controls.appendChild(button(label));
};
