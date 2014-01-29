// Route queries to the proper controller.  
var config = require('../config.js');
var search = require('./controllers/search.js');
var special = require('./controllers/special.js');
var lookup = require('./controllers/lookup.js');


function walton(params,callback){
	if( params.type == "search") {
		search(config,params,callback);
	}else if( params.type == "special" ){
		special(config,params,callback);
	}else if( params.type == "lookup" ){
		lookup(config,params,callback);
	}
}

module.exports = walton;
