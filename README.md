# pathdoras-box

## Description

A tool to extract all paths with files that ends in .js under a specific root

A useful tool both for coding usage and saving data to external txt file. 

Pathtool parses through every single branch of the root's folder tree and resolves the paths of all .js files. Additionally it is possible to write the paths to an external .txt file named *paths.txt*, located inside the parent folder if the 3rd parameter is true.  

**Note that pathtool skips node_modules content**

## Install 

```
npm i pathdoras-box
```


## Usage 

```Javascript
const {pathtool} = require('pathdoras-box');

function get_paths(){
    pathtool('<your_root_folder_path>', [], Boolean)
    .then(res => console.log('res',res))
    .catch(err => console.log('err',err));
}

get_paths()
```

## Arguments

- root-folder-path (Required) -> String

- Empty array (Required)

- Boolean (Optional)

>Boolean parameter is optional. Pass true for writing results to external txt file
