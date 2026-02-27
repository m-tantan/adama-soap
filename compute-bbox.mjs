import fs from 'fs';
const svg = fs.readFileSync('public/adama-svg-logo.svg', 'utf8');
const dMatch = svg.match(/d="([^"]+)"/);
const d = dMatch[1];

let x = 0, y = 0, startX = 0, startY = 0;
let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;

function update(ax, ay) {
  if (ax < minX) minX = ax;
  if (ay < minY) minY = ay;
  if (ax > maxX) maxX = ax;
  if (ay > maxY) maxY = ay;
}

const tokens = d.match(/[MmLlHhVvCcSsQqTtAaZz]|[-+]?[0-9]*\.?[0-9]+(?:[eE][-+]?[0-9]+)?/g);
let i = 0;
function num() { return parseFloat(tokens[i++]); }

while (i < tokens.length) {
  const cmd = tokens[i];
  if (/^[A-Za-z]$/.test(cmd)) { i++; } else { i++; continue; }
  
  switch(cmd) {
    case 'M': x = num(); y = num(); startX = x; startY = y; update(x,y); break;
    case 'm': x += num(); y += num(); startX = x; startY = y; update(x,y); break;
    case 'L': x = num(); y = num(); update(x,y); break;
    case 'l': x += num(); y += num(); update(x,y); break;
    case 'H': x = num(); update(x,y); break;
    case 'h': x += num(); update(x,y); break;
    case 'V': y = num(); update(x,y); break;
    case 'v': y += num(); update(x,y); break;
    case 'c': {
      while (i < tokens.length && /^[-+0-9.]/.test(tokens[i])) {
        let cx1=x+num(),cy1=y+num(),cx2=x+num(),cy2=y+num(),ex=x+num(),ey=y+num();
        update(cx1,cy1); update(cx2,cy2); update(ex,ey);
        x=ex; y=ey;
      }
      break;
    }
    case 'C': {
      while (i < tokens.length && /^[-+0-9.]/.test(tokens[i])) {
        let cx1=num(),cy1=num(),cx2=num(),cy2=num(),ex=num(),ey=num();
        update(cx1,cy1); update(cx2,cy2); update(ex,ey);
        x=ex; y=ey;
      }
      break;
    }
    case 's': {
      while (i < tokens.length && /^[-+0-9.]/.test(tokens[i])) {
        let cx2=x+num(),cy2=y+num(),ex=x+num(),ey=y+num();
        update(cx2,cy2); update(ex,ey);
        x=ex; y=ey;
      }
      break;
    }
    case 'S': {
      while (i < tokens.length && /^[-+0-9.]/.test(tokens[i])) {
        let cx2=num(),cy2=num(),ex=num(),ey=num();
        update(cx2,cy2); update(ex,ey);
        x=ex; y=ey;
      }
      break;
    }
    case 'Z': case 'z': x = startX; y = startY; break;
    default: break;
  }
}

console.log('Bounding box:');
console.log('minX:', minX.toFixed(1), 'minY:', minY.toFixed(1));
console.log('maxX:', maxX.toFixed(1), 'maxY:', maxY.toFixed(1));
console.log('width:', (maxX-minX).toFixed(1), 'height:', (maxY-minY).toFixed(1));
console.log('Suggested viewBox with 10px padding:');
const pad = 10;
console.log(`${(minX-pad).toFixed(1)} ${(minY-pad).toFixed(1)} ${(maxX-minX+2*pad).toFixed(1)} ${(maxY-minY+2*pad).toFixed(1)}`);
