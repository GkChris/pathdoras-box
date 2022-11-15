**Pathtool**

***Guide***

Given a root folder, the tool returns a txt file -default name: paths.txt- with the paths of all js childs.
Import the {pathtool} function and assign the root folder as a parameter. Function accept output file name as second parameter.


```Javascript
const {pathtool} = require('gkchris-pathdoras-box');

pathtool('<root_folder>', '<output_file_name>')
```