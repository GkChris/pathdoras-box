**Pathtool**

***Guide***

Given a root folder, the tool creates a txt file -name: paths.txt- with the paths of all js childs.
Function contains a promise that returns true.
Import the {pathtool} function and assign the root folder as a parameter.

```Javascript
const {pathtool} = require('gkchris-pathdoras-box');

pathtool('<root_folder>')
```