var mongoose = require ('mongoose');
var HistorySchema = new mongoose.Schema({
	user: String,
	url: String,
	id: String,
	source_url: String
});

mongoose.model ('History', HistorySchema);