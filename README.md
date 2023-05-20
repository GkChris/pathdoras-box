# pathdoras-box

## Description

Pathtool is a powerful tool designed to extract all file paths that end with .js within a specified root directory. It serves as a valuable asset for both coding purposes and storing data in an external text file.

The tool meticulously traverses every branch of the folder tree originating from the specified root directory. During this process, it resolves and captures the file paths of all JavaScript files (.js). This comprehensive search ensures that no relevant files are overlooked.

Furthermore, Pathtool provides an option to write the extracted file paths to an external text file named paths.txt. This text file is placed in the parent folder if the third parameter is set to true. This feature offers a convenient way to save and reference the extracted paths for future use. 

**Note that pathtool skips node_modules content**

## Install 

```
npm i pathdoras-box
```


## Usage 

```Javascript
const {pathtool} = require('pathdoras-box');

function get_paths(){
    pathtool('<your_root directory>', [], Boolean)
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


| Argument       | Required | Type    | Description                                      |
|----------------|----------|---------|--------------------------------------------------|
| root directory | required | string  | Specified root directory                         |
| Empty array    | required | array   | Required for the algorithm to operate            |
| Store data     | optional | boolean | Option to store data to file (default: false).   |
