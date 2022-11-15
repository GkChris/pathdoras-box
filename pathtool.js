const fsp = require('fs').promises;
const fs = require('fs');
var path = require('path');

var results = [];
async function pathtool(dir, fileName){
    var file_name = fileName ? fileName : 'paths.txt'
    var dirname = path.dirname(dir);    
    var basename = path.basename(dir);
    var pathname = dirname+'/'+basename;
    var file_content = fs.readdirSync(pathname);
    var type = await fsp.lstat(pathname);

    for await (let content of file_content){
        if(content.includes('node_modules')) continue;
        type = await fsp.lstat(pathname+'/'+content)
        if(type.isFile() && content.endsWith('.js')) {
            results.push(pathname+'/'+content)
            fs.appendFileSync(fileName, pathname+'/'+content+'\n')
            continue;
        } 
    
        if(type.isDirectory()) {
            pathtool(pathname+'/'+content)
        }
    }
}

module.exports = {pathtool}

