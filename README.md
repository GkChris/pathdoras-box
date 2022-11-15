# **gkchris-pathdoras-box**

## ***About the pathtool***

Given a root folder, the tool creates a txt file named *paths.txt*. If the file already exists, the new records will be appended to the existing file instead of overwriting.
The function returns a promise, resolve true when finished.
Import the *pathtool* function and pass the root folder as a parameter.

```Javascript
const {pathtool} = require('gkchris-pathdoras-box');

pathtool('<root_folder>')
```