# **gkchris-pathdoras-box**

## ***About the pathtool***
A usefull tool both for coding usage and saving data to external txt file. 

Pathtool parses through every single branch of the root's folder tree and resolves the paths of all .js files. Additionally it is possible to write the paths to an external .txt file named *paths.txt*, located inside the parent folder if the 3rd parameter is true.  


#### Usage
Import the *pathtool* function.

First parameter is the root folder.

Second parameter needs to be an empty array.

Third parameter is optional. Pass true for writing results to external txt file

```Javascript
const {pathtool} = require('gkchris-pathdoras-box');

pathtool('<root_folder_path>', [], Boolean)
```