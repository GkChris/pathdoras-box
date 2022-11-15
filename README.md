# **gkchris-pathdoras-box**

## ***About the pathtool***
A usefull tool both for coding usage and saving data to external txt file. 

Pathtool parses through every single branch of the root's folder tree and resolves the paths of all .js files. Additionally it writes the paths to an external .txt file named *paths.txt* in the parent folder.  


#### Usage
Import the *pathtool* function and pass the root folder as the first parameter and an empty array as second parameter.

```Javascript
const {pathtool} = require('gkchris-pathdoras-box');

pathtool('<root_folder>', [])
```