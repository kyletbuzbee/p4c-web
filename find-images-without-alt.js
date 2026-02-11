const fs = require('fs');
const path = require('path');

function findImagesWithoutAlt(directory) {
    const results = [];
    
    function traverse(dir) {
        const files = fs.readdirSync(dir);
        
        files.forEach(file => {
            const filePath = path.join(dir, file);
            const stat = fs.statSync(filePath);
            
            if (stat.isDirectory()) {
                traverse(filePath);
            } else if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
                const content = fs.readFileSync(filePath, 'utf8');
                const imgTags = content.match(/<img[^>]*?>/g);
                
                if (imgTags) {
                    imgTags.forEach(imgTag => {
                        if (!imgTag.includes('alt=')) {
                            results.push({
                                file: filePath,
                                tag: imgTag.trim()
                            });
                        }
                    });
                }
            }
        });
    }
    
    traverse(directory);
    return results;
}

const srcDir = path.join(__dirname, 'src');
const imagesWithoutAlt = findImagesWithoutAlt(srcDir);

console.log('Images without alt text:');
console.log('=======================');

imagesWithoutAlt.forEach(result => {
    console.log(`File: ${result.file}`);
    console.log(`Tag: ${result.tag}`);
    console.log('------------------------');
});

console.log(`Total: ${imagesWithoutAlt.length} images without alt text`);
