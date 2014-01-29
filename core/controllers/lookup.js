//	Walmart Search API
// https://developer.walmartlabs.com/docs/read/Search_API

var request = require('request');
var url = 'http://api.walmartlabs.com/v1/items/';

function lookup(config,params,callback){

	var formedURL = url 
					+ params.product
					+ "?apiKey="
					+ config.apikey;
				
	//add linkshare if one exists
	if(config.lsPublisherId)
	{
		formedURL	+=	"&lsPublisherId="
					+	config.lsPublisherId;
	}
	
	formedURL +=  "&format=json";
	
	request(formedURL, function (error, response, body) {
		if (!error && response.statusCode == 200) {
			callback(JSON.parse(body));
		 }
	});
}


module.exports = lookup;

