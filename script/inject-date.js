const fs = require('fs');
const path = require('path');

const files = ['index.html', 'remote-jobs.html', 'tech-news.html', 'cv-resume.html'];

files.forEach(file => {
  const filePath = path.join(__dirname, '../', file);
  if (!fs.existsSync(filePath)) return;

  const stats = fs.statSync(filePath);
  const date = stats.mtime.toISOString().split('T')[0];

  let html = fs.readFileSync(filePath, 'utf8');

  // Replace URL placeholder
  const url = file === 'index.html'
   ? 'https://remoteng.com.ng/'
    : `https://remoteng.com.ng/${file}`;
  html = html.replace('"url": "__PAGE_URL__"', `"url": "${url}"`);

  // Replace date placeholder
  html = html.replace('"dateModified": "__BUILD_DATE__"', `"dateModified": "${date}"`);

  fs.writeFileSync(filePath, html);
  console.log(`Updated ${file} -> ${date}`);
});
