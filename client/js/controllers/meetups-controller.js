

app.controller('meetupsController',['$scope','$resource',
	function($scope,$resource){
		var Meetup = $resource('/api/meetups')
		console.log("load meetups controller")

		Meetup.query(function(results){
			$scope.meetups = results
		})

		$scope.createMeetup = function(){
			console.log("meetup created")
			var meetup = new Meetup()
			console.log(meetup)
			meetup.name = $scope.meetupName
			meetup.$save(function(result){
				//-- update view -//
				$scope.meetups.push(result)
				$scope.meetupName = ''
				//--
			});
			// $scope.meetups.push({name: $scope.meetupName})
			// $scope.meetupName = ''
		}


		$scope.deleteMeetup = function(object){
			console.log("in client side delete meetup", object)
			object.$delete("test",function(result){
				console.log("back from delete")
				},
				function(result){
					console.log("fail")
				})
			// db.meetups.find({_id:ObjectId("54d5291f2512702c1bfb7d2c") })
		}

}])
