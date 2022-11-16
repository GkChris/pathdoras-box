const fsp = require('fs').promises;
const fs = require('fs');
var path = require('path');


async function pathtool(dir, results, txtWrite){

    return new Promise(async (resolve, reject) => {

        if(!dir || !results) {
            reject(new Error('Missing parameter!'));
        }

        
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
                if(txtWrite) fs.appendFileSync('paths.txt', pathname+'/'+content+'\n')
                continue;
            } 
        
            if(type.isDirectory()) {
                await pathtool(pathname+'/'+content, results, txtWrite)
            }
        }
        resolve(results);
    })
        
}

module.exports = {pathtool}

