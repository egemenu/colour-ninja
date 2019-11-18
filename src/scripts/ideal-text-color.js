// https://stackoverflow.com/questions/4726344/how-do-i-change-text-color-determined-by-the-background-color <3

const getRGBComponents = (color) => {

	let r = color.substring(1, 3);
	let g = color.substring(3, 5);
	let b = color.substring(5, 7);

	return {
		 R: parseInt(r, 16),
		 G: parseInt(g, 16),
		 B: parseInt(b, 16)
	};
}

const idealTextColor = (bgColor) => {

	let nThreshold = 105;
	let components = getRGBComponents(bgColor);
	let bgDelta = (components.R * 0.299) + (components.G * 0.587) + (components.B * 0.114);

	return ((255 - bgDelta) < nThreshold) ? "#333333" : "#ffffff";
}

export default idealTextColor;