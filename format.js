const fs = require('fs');
const files = ['frontend/script.js', 'frontend/auth.js'];
files.forEach(file => {
    try {
        let content = fs.readFileSync(file, 'utf8');
        // Remove 3 or more consecutive newlines and replace with 2
        content = content.replace(/\n\s*\n\s*\n+/g, '\n\n');
        fs.writeFileSync(file, content);
        console.log(`Formatted ${file}`);
    } catch(e) {
        console.error(e);
    }
});
