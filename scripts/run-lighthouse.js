#!/usr/bin/env node
import http from 'http';
import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';
import { promisify } from 'util';

const execPromise = promisify(exec);

// Serve the dist directory
const PORT = 4173;
const DIST_DIR = path.resolve(process.cwd(), 'dist');

const server = http.createServer((req, res) => {
  let filePath = path.join(DIST_DIR, req.url === '/' ? 'index.html' : req.url.slice(1));
  
  // Handle extensionless paths
  if (!path.extname(filePath)) {
    filePath += '.html';
  }

  fs.access(filePath, fs.constants.R_OK, (err) => {
    if (err) {
      if (req.url === '/') {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 Not Found</h1>', 'utf-8');
      } else {
        res.writeHead(302, { 'Location': '/' });
        res.end();
      }
      return;
    }

    const contentType = getContentType(filePath);
    res.writeHead(200, { 'Content-Type': contentType });
    fs.createReadStream(filePath).pipe(res);
  });
});

function getContentType(filePath) {
  const extname = path.extname(filePath);
  switch (extname) {
    case '.html': return 'text/html';
    case '.js': return 'text/javascript';
    case '.css': return 'text/css';
    case '.json': return 'application/json';
    case '.png': return 'image/png';
    case '.jpg': return 'image/jpg';
    case '.gif': return 'image/gif';
    case '.svg': return 'image/svg+xml';
    case '.ico': return 'image/x-icon';
    default: return 'application/octet-stream';
  }
}

server.listen(PORT, async () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
  
  try {
    // Wait for server to be ready
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Run Lighthouse
    const lighthouseCmd = `npx lighthouse http://localhost:${PORT} --output html --output-path ./lighthouse-report.html --chrome-flags="--headless --no-sandbox --disable-gpu --disable-dev-shm-usage" --preset desktop --only-categories=performance,accessibility,best-practices,seo`;
    console.log(`Running Lighthouse: ${lighthouseCmd}`);
    
    const { stdout, stderr } = await execPromise(lighthouseCmd);
    if (stdout) console.log(stdout);
    if (stderr) console.error(stderr);
    
    console.log('✅ Lighthouse report generated successfully');
  } catch (error) {
    console.error('❌ Lighthouse failed:', error);
  } finally {
    server.close();
    console.log('📱 Server stopped');
  }
});