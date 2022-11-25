const fsp = require('fs').promises;
const fs = require('fs');
var path = require('path');


function pathtool(dir, results, txtWrite){

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

            let path = pathname+'/'+content;
            
            type = await fsp.lstat(path)
            
            if(type.isFile() && content.endsWith('.js')) {
                // path = path.slice(2);
                results.push(path)
                if(txtWrite) fs.appendFileSync('paths.txt', path+'\n')
                continue;
            } 
        
            if(type.isDirectory()) {
                await pathtool(path, results, txtWrite)
            }
        }
        resolve(results);
    })
        
}

module.exports = {pathtool}

