// https://gist.github.com/jedfoster/7939513 <3 (edited)

const sassMix = function(color_2, color_1, weight) {
  
  const d2h = (d) => d.toString(16);
  const h2d = (h) => parseInt(h, 16);

  weight = (typeof(weight) !== 'undefined') ? weight : 50;

  let color = "#";

  for (let i = 0; i <= 5; i += 2) {
    let v1 = h2d(color_1.slice(1).substr(i, 2));
    let v2 = h2d(color_2.slice(1).substr(i, 2));
    
    let val = d2h(Math.floor(v2 + (v1 - v2) * (weight / 100.0))); 

    while (val.length < 2) {
      val = '0' + val; 
    }

    color += val;
  }
  
  return color;
};

export default sassMix;