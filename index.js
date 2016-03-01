var Tempman = {};
var path = require("path"),
 	fs 	 = require("fs"),
 	Nunjucks = require('nunjucks');

module.exports = Tempman;
Tempman.curDir = null;

/**
 * Set template directory path
 * @param {string} path template directory path
 */
Tempman.setDir = function (path) {
	this.curDir = path
	return this
}

/**
 * Get template file
 * @param  {string} filename file name 
 * @param  {Function} cb  function to call when done
 */
Tempman.getFile = function (filename, data, cb) {
	fs.readFile(path.join(Tempman.curDir, filename), function(err, content){
		if (err) return cb(err);
		var env = new Nunjucks.Environment(new Nunjucks.FileSystemLoader(Tempman.curDir));
		env.renderString(content.toString(), data, function(err, parsedContent){
			if (err) return cb(err);
			return cb(null, parsedContent)
		})
	});
}
