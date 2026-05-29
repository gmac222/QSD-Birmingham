const { Jimp } = require('jimp');

async function main() {
  const image = await Jimp.read('logo.png');
  const counts = {};
  
  for (let x = 0; x < image.bitmap.width; x++) {
    for (let y = 0; y < image.bitmap.height; y++) {
      const hex = image.getPixelColor(x, y).toString(16).padStart(8, '0');
      if (hex.slice(6) !== '00') {
          const rgb = hex.slice(0, 6);
          const r = parseInt(rgb.slice(0,2), 16);
          const g = parseInt(rgb.slice(2,4), 16);
          const b = parseInt(rgb.slice(4,6), 16);
          
          // filter out grayscale
          const max = Math.max(r, g, b);
          const min = Math.min(r, g, b);
          if (max - min < 20) continue;
          
          counts[rgb] = (counts[rgb] || 0) + 1;
      }
    }
  }
  
  const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
  console.log("Colors sorted by count:");
  console.log(sorted.slice(0, 20));
}

main().catch(console.error);
