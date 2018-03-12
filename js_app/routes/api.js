var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var History = mongoose.model('History');
var request = require("request");
var convert = require('xml-js');
const util = require('util')

router.get('/cat', function(req, res, next) {
	var url = "http://thecatapi.com/api/images/get?format=xml&type=jpg"
	request.get(url, function (error, response, body) {

		console.log(body)

		var options = {ignoreComment: true, alwaysChildren: true, compact: true};
		var result_get = convert.xml2js(body, options);
		console.log(result_get)

		var image = result_get['response']['data']['images']['image']
		var url_data = image['url']['_text']
		var id_data = image['id']['_text']
		var source_url_data = image['source_url']['_text']

		console.log(
			id_data ,
			url_data ,
			source_url_data 
		);

		var history = new History()
		//hardcode user for now
		history.user = "1"
		history.url = url_data 
		history.id = id_data 
		history.source_url = source_url_data 
		history.save(function(err, history){
			if(err) {
				return res.send(500,err);
			}
			var returned_json = {}
			var key = 'image'
			returned_json[key] = {}
			var data = {
				url: url_data,
				id: id_data,
				source_url: source_url_data
			}

			returned_json[key] = data
			console.log(JSON.stringify(returned_json))

			return res.json(returned_json);

		});
	});
});


module.exports = router;
