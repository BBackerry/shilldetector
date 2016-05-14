var mongoose = require('mongoose');

var ShillSchema = new mongoose.Schema({
	name: {type: String, index: true },	
	score: Number
});

module.exports = mongoose.model('Shill', ShillSchema);
