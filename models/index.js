const mongoose = require("mongoose");

const Schema = mongoose.Schema ;
const articleSchema = new Schema({
	_id : {
		type : Schema.Types.ObjectId ,
		required : true ,
	},
	title : {
		type : String ,
		required : true
	},
	url : {
		type : String ,
		required : true
	},
	date : {
		type : Data , 
		default: Date.now
	}
})

const Article = mongoose.model(Article , articleSchema);

module.exports = Article; 
module.exports = {
  Article: require("./articles")
};