import { createCanvas } from 'canvas';

export function generateProjectImage(title: string, tags: string[]): string {
  const canvas = createCanvas(800, 400);
  const ctx = canvas.getContext('2d');

  // Set background
  ctx.fillStyle = '#1e1e2e';
  ctx.fillRect(0, 0, 800, 400);

  // Draw title
  ctx.font = 'bold 40px Arial';
  ctx.fillStyle = '#ffffff';
  ctx.textAlign = 'center';
  ctx.fillText(title, 400, 100);

  // Draw tags
  ctx.font = '20px Arial';
  tags.forEach((tag, index) => {
    ctx.fillStyle = getTagColor(tag);
    ctx.fillText(tag, 400, 200 + index * 30);
  });

  // Generate random shapes
  for (let i = 0; i < 20; i++) {
    ctx.beginPath();
    ctx.arc(Math.random() * 800, Math.random() * 400, Math.random() * 20, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.5)`;
    ctx.fill();
  }

  return canvas.toDataURL();
}

function getTagColor(tag: string): string {
  const colors = ['#ff6b6b', '#4ecdc4', '#45aaf2', '#feca57', '#a55eea'];
  return colors[Math.floor(Math.random() * colors.length)];
}

export function generateSVGImage(title: string): string {
  const svg = `
    <svg width="800" height="400" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#1e1e2e"/>
      <text x="50%" y="50%" font-family="Arial" font-size="40" fill="white" text-anchor="middle">${title}</text>
      ${generateRandomShapes()}
    </svg>
  `;
  return `data:image/svg+xml;base64,${btoa(svg)}`;
}

function generateRandomShapes(): string {
  let shapes = '';
  for (let i = 0; i < 20; i++) {
    const x = Math.random() * 800;
    const y = Math.random() * 400;
    const r = Math.random() * 20;
    const color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    shapes += `<circle cx="${x}" cy="${y}" r="${r}" fill="${color}" opacity="0.5"/>`;
  }
  return shapes;
}

