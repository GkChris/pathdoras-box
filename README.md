## ***About the pathdoras-box's pathtool***
A useful tool both for coding usage and saving data to external txt file. 

Pathtool parses through every single branch of the root's folder tree and resolves the paths of all .js files. Additionally it is possible to write the paths to an external .txt file named *paths.txt*, located inside the parent folder if the 3rd parameter is true.  


#### Usage
Import the *pathtool* function.

First parameter is the root folder.

Second parameter needs to be an empty array.

Third parameter is optional. Pass true for writing results to external txt file

```Javascript
const {pathtool} = require('pathdoras-box');

function get_paths(){
    pathtool('<your_root_folder_path>', [], Boolean)
    .then(res => console.log('res',res))
    .catch(err => console.log('err',err));
}

get_paths()
```