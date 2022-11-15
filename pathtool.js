const fsp = require('fs').promises;
const fs = require('fs');
var path = require('path');

var results = [];
async function pathtool(dir){

    return new Promise(async (resolve, reject) => {
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
                fs.appendFileSync('paths.txt', pathname+'/'+content+'\n')
                continue;
            } 
        
            if(type.isDirectory()) {
                pathtool(pathname+'/'+content)
            }
        }
        resolve(true);
    })
        
}

module.exports = {pathtool}

