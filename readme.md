### Tempman

Tempman is a simple template processing library for parsing nunjucks templates. It will find
and process templates found in a directory. 

## Install

```
npm install tempman 
```

## Example

```
var Tempman = require("tempman")

Tempman.setDir("mydir").getFile("mytemp.html", { name: "James" }, function(err, content){
	console.log(content)
})
```

