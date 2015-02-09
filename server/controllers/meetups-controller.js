var Meetup = require('../models/meetup')

module.exports.create = function(req,res){
	console.log(req.body)
	var meetup = new Meetup(req.body)
	meetup.save(function(err,result){
		console.log(result)
		res.json(result)

	})
}
module.exports.list = function(req,res){
	Meetup.find({},function(err,results){
		res.json(results)
	})

}

module.exports.delete = function(req,res){
	console.log("in delete")
	// console.log(req)
	// console.log(req)

	// console.log("in side module exports delete",req,res)
	console.log("reqbody",req.body)
	// Meetup.find({},function(err,results){
	// 	res.json(results)
	// })

}

