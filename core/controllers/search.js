//	Walmart Search API
// https://developer.walmartlabs.com/docs/read/Search_API

var request = require('request');
var url = 'http://api.walmartlabs.com/v1/search?apiKey=';

var validProperties = ["query","categoryId","start","sort","order","format","responseGroup"];

function search(config,params,callback){

	var formedURL = url + config.apikey;
	
	//add linkshare if one exists
	if(config.lsPublisherId)
	{
		formedURL	+="&lsPublisherId="
					+	config.lsPublisherId;
	}
	
	formedURL += paramGen(params);
	
	request(formedURL, function (error, response, body) {
		if (!error && response.statusCode == 200) {
			callback(JSON.parse(body));
		 }
	});
}

function paramGen(params){
	var reqURL="";
	for (var property in params){
		// ignore all properties that aren't in the validProperties list
		if( validProp(property) ){
			reqURL = reqURL + "&" + property + "=" + params[property];
		}
	}
	
	return reqURL;
}

/*
Fix this I don't like how slow it is
*/

function validProp(property){
	for(var i = 0; i < validProperties.length; i++){
		if(validProperties[i] == property){
			return true;
		}
	}
	return false;
}

module.exports = search;

