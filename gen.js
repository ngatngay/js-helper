import { promises as fs } from 'fs';
import path from 'path';

const srcDir = path.join(path.dirname(new URL(import.meta.url).pathname), 'src');

async function scanFiles() {
    try {
        const files = await fs.readdir(srcDir);
        
        const {jqueryFiles, otherJsFiles} = files.reduce((acc, file) => {
            if (path.extname(file) === '.js') {
                file.endsWith('.jquery.js') ? acc.jqueryFiles.push(file) : acc.otherJsFiles.push(file);
            }
            return acc;
        }, { jqueryFiles: [], otherJsFiles: [] });

        const otherJsContent = otherJsFiles.map(file => `export * from './src/${file}';`).join('\n');
        await fs.writeFile('build-js.js', otherJsContent);

        const jqueryContent = jqueryFiles.map(file => `import './src/${file}';`).join('\n');
        const finalJQueryContent = `
import $ from 'jquery'

${jqueryContent}

export { $, $ as jQuery };
`;
        await fs.writeFile('build-jquery.js', finalJQueryContent);

        console.log('jQuery Files:', jqueryFiles);
        console.log('Other JS Files:', otherJsFiles);
    } catch (err) {
        console.error('Error processing files.', err);
    }
}

scanFiles();