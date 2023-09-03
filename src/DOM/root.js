export const root = document.getElementById("root");

root.style.backgroundColor = "#ddd";
root.style.display = "flex";
root.style.justifyContent = "center";
root.style.alignItems = "center";
root.style.height = "586px";
root.style.width = "1034px";

export const Canvas = () => {
	return document.createElement("canvas");
};

export const removeCanvas = () => {
	return root.removeChild(root.childNodes[0]);
};
