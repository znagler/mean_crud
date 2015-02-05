

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
			meetup.name = $scope.meetupName
			meetup.$save(function(result){
				$scope.meetups.push(result)
				$scope.meetupName = ''
			});
			// $scope.meetups.push({name: $scope.meetupName})
			// $scope.meetupName = ''
		}

}])
