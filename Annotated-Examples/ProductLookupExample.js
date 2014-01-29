//	Walmart Product Lookup API Example

// 	Sources:
//	https://developer.walmartlabs.com/docs/read/Product_Lookup_API__new
//	https://developer.walmartlabs.com/docs/read/Item_Field_Description

var Walton = require('walton');

/*
Product Lookup receives a product ID.
*/

//An example product lookup query might look like this*:

var params = {
	"type"			: "lookup",
	"product"		: "12417832"
};

//* You are free to include or not include any parameters you wish. Invalid parameters will be ignored. Note that invalid arguments may cause an error response.

/*
Walton also takes a single argument function that receives the full JSON response from your query. 

For an explanation of the response body refer to https://developer.walmartlabs.com/docs/read/Item_Field_Description
*/

// A sample Walton product lookup call might look like this

//NOTE:  "body" is a JSON object

Walton(params, function(body){
	console.log(body);
	});
