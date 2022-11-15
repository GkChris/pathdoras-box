const fsp = require('fs').promises;
const fs = require('fs');
var path = require('path');
const default_dirname = process.argv[2] ? process.argv[2] : './';

var results = [];
async function terminator(dir){
        
    var dirname = path.dirname(dir);    
    var relativepath = path.relative(default_dirname, dir);
    var basename = path.basename(dir);
    var pathname = dirname+'/'+basename;
    var file_content = fs.readdirSync(pathname);
    var type = await fsp.lstat(pathname);

    for await (let content of file_content){
        if(content.includes('node_modules')) continue;
        type = await fsp.lstat(pathname+'/'+content)
        if(type.isFile() && content.endsWith('.js')) {
            results.push(pathname+'/'+content)
            continue;
        } 
    
        if(type.isDirectory()) {
            terminator(pathname+'/'+content)
        }
    }
    console.log('Dirname: ',dirname);
    console.log('Relative path: ',relativepath);
    console.log('Basename: ',basename);
    console.log('Pathname: ',pathname);
    console.log('File content: ',file_content);
    console.log('Results: ',results);
}

terminator(default_dirname)

