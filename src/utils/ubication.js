export function ubication(elem) {
	return {
		top: elem.position.y,
		left: elem.position.x,
		bottom: elem.position.y + elem.size.height,
		right: elem.position.x + elem.size.width,
	};
}
