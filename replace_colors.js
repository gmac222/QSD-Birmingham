const fs = require('fs');
const path = require('path');

const dir = __dirname;
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace orange accent
  content = content.replace(/#F97316/g, '#F8690D');
  content = content.replace(/#f97316/g, '#F8690D');
  content = content.replace(/249, 115, 22/g, '248, 105, 13');
  content = content.replace(/249,115,22/g, '248,105,13');
  
  // Replace backgrounds to QSD dark blue (#0A1925)
  content = content.replace(/#08090a/g, '#0A1925');
  content = content.replace(/#0a0a0f/g, '#0A1925');
  content = content.replace(/#050B14/g, '#0A1925');
  
  // Update rgba values for scroll vignette that used to match the background #08090a (rgb 8,9,10)
  content = content.replace(/rgba\(8,\s*9,\s*10,/g, 'rgba(10, 25, 37,');
  content = content.replace(/rgba\(8,9,10,/g, 'rgba(10,25,37,');

  // Update rgba for #050B14 (rgb 5,11,20) used in about.html etc
  content = content.replace(/rgba\(5,\s*11,\s*20,/g, 'rgba(10, 25, 37,');
  content = content.replace(/rgba\(5,11,20,/g, 'rgba(10,25,37,');

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated ${file}`);
}
