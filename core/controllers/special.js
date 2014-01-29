//	Walmart Special Feed API
// https://developer.walmartlabs.com/docs/read/Special_Feeds

var request = require('request');
var url = 'http://api.walmartlabs.com/v1/feeds/';

function special(config,params,callback){

	var formedURL =                   url 
					+ params.category + "?"
					+ "apikey=" 
					+ config.apikey;

        request(formedURL, function (error, response, body) {
                if (!error && response.statusCode == 200) {
                        callback(JSON.parse(body));
                 }
        });

}

module.exports = special;

