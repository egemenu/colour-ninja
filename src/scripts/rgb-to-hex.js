// https://gist.github.com/jedfoster/7939513 <3 (edited)

const hex = (x) => ("0" + parseInt(x).toString(16)).slice(-2);

const rgb2hex = (rgb) => {
	rgb = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d]+))?\)$/);
	return '#' + (hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3])).toUpperCase(); 
}

export default rgb2hex;