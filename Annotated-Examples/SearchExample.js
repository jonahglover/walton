//	Walmart Search API Example

// 	Sources:
//	https://developer.walmartlabs.com/docs/read/Search_API
//	https://developer.walmartlabs.com/docs/read/Taxonomy_API

var Walton = require('walton');

/*
Walton takes in a list of search parameters that can be used to narrow the result. Refer to the Taxonomy API to learn more about which parametre's are valid, and add them to your JSON parameter list. 

To get a full list of Category ID's go to http://api.walmartlabs.com/v1/taxonomy?apiKey={apiKey} .

For an explanation of the parameters used refer to https://developer.walmartlabs.com/docs/read/Search_API. 
*/

//An example search query might look like this*:

var params = {
	"type"			: "search",
	"query" 		: "ipod",
	"categoryId" 	: "3944",
	"start" 		: "1",
	"sort" 			: "price",
	"order" 		: "asc",
	"format"		: "json",
	"responseGroup" : "full"
};

//* You are free to include or not include any parameters you wish. Invalid parameters will be ignored. Note that invalid arguments may cause an error response.

/*
Walton also takes a single argument function that receives the full JSON response from your query. 

For an explanation of the response body refer to https://developer.walmartlabs.com/docs/read/Item_Field_Description
*/

// A sample Walton search call might look like this

//NOTE:  "body" is a JSON object

Walton(params, function(body){
	console.log(body);
	});
