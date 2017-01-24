
var app = angular.module('quantcast',[]);

app.controller('mainController',['$scope', function($scope) {

	//Sample JSON Data 
	$scope.creatives = [{
		"creative_title": "DOUBLECLICK - 320x480",
		"creative_id": "32929723",
		"creative_name": "Groomshop Static 320x480",
		"language": "EN",
		"creativeImages" : ["https://d13yacurqjgara.cloudfront.net/users/40433/screenshots/3235994/dr_1x.png","https://d13yacurqjgara.cloudfront.net/users/158441/screenshots/3236268/dribbble_1x.jpg"]
	}, {
		"creative_title": "DOUBLECLICK - 728x90",
		"creative_id": "32929724",
		"creative_name": "Groomshop Static 728x90",
		"language": "FR",
		"creativeImages" : ["https://d13yacurqjgara.cloudfront.net/users/43342/screenshots/3236003/dribbble_2017_jan19_1x.jpg"]
	}, {
		"creative_title": "DOUBLECLICK - 300x250",
		"creative_id": "32929725",
		"creative_name": "Groomshop Static 300x250",
		"language": "EN",
		"creativeImages" : ["https://d13yacurqjgara.cloudfront.net/users/29503/screenshots/3235817/dribbble-gif_1x.gif","https://d13yacurqjgara.cloudfront.net/users/14152/screenshots/3236036/kiddo_1x.gif"]
	}, {
		"creative_title": "TheTradeDesk - 480x320",
		"creative_id": "32929746",
		"creative_name": "KidsShop Static 480x320",
		"language": "EN",
		"creativeImages" : ["https://d13yacurqjgara.cloudfront.net/users/34556/screenshots/3235911/layout-exploration_1x.jpg","https://d13yacurqjgara.cloudfront.net/users/57127/screenshots/3236566/login_page_1x.jpg","https://d13yacurqjgara.cloudfront.net/users/41719/screenshots/3236478/meet_humans_dribbble_1x.jpg"]
	}, {
		"creative_title": "DOUBLECLICK - 320x480",
		"creative_id": "32929727",
		"creative_name": "Groomshop Static 320x480",
		"language": "EN",
		"creativeImages" : ["https://d13yacurqjgara.cloudfront.net/users/59947/screenshots/3236625/muti-2.jpg","https://d13yacurqjgara.cloudfront.net/users/257123/screenshots/3236547/party_time_1x.png","https://d13yacurqjgara.cloudfront.net/users/12779/screenshots/3236458/passing_through_patch_1x.png"]
	}, {
		"creative_title": "DOUBLECLICK - 320x480",
		"creative_id": "32929728",
		"creative_name": "Groomshop Static 320x480",
		"language": "FR",
		"creativeImages" : ["https://d13yacurqjgara.cloudfront.net/users/407255/screenshots/3236696/r29b_1x.jpg"]
	}, {
		"creative_title": "DOUBLECLICK - 320x480",
		"creative_id": "32929729",
		"creative_name": "Groomshop Static 320x480",
		"language": "FI",
		"creativeImages" : ["http://inmobiads.com/a1.png", "http://inmobiads.com/a2.png", "http://inmobiads.com/a1.png"]
	},{
		"creative_title": "DOUBLECLICK - 320x480",
		"creative_id": "32929723",
		"creative_name": "Groomshop Static 320x480",
		"language": "EN",
		"creativeImages" : ["https://d13yacurqjgara.cloudfront.net/users/40433/screenshots/3235994/dr_1x.png","https://d13yacurqjgara.cloudfront.net/users/158441/screenshots/3236268/dribbble_1x.jpg"]
	}, {
		"creative_title": "DOUBLECLICK - 728x90",
		"creative_id": "32929724",
		"creative_name": "Groomshop Static 728x90",
		"language": "FR",
		"creativeImages" : ["https://d13yacurqjgara.cloudfront.net/users/43342/screenshots/3236003/dribbble_2017_jan19_1x.jpg"]
	}, {
		"creative_title": "DOUBLECLICK - 300x250",
		"creative_id": "32929725",
		"creative_name": "Groomshop Static 300x250",
		"language": "EN",
		"creativeImages" : ["https://d13yacurqjgara.cloudfront.net/users/29503/screenshots/3235817/dribbble-gif_1x.gif","https://d13yacurqjgara.cloudfront.net/users/14152/screenshots/3236036/kiddo_1x.gif"]
	}, {
		"creative_title": "TheTradeDesk - 480x320",
		"creative_id": "32929746",
		"creative_name": "KidsShop Static 480x320",
		"language": "EN",
		"creativeImages" : ["https://d13yacurqjgara.cloudfront.net/users/34556/screenshots/3235911/layout-exploration_1x.jpg","https://d13yacurqjgara.cloudfront.net/users/57127/screenshots/3236566/login_page_1x.jpg","https://d13yacurqjgara.cloudfront.net/users/41719/screenshots/3236478/meet_humans_dribbble_1x.jpg"]
	}, {
		"creative_title": "DOUBLECLICK - 320x480",
		"creative_id": "32929727",
		"creative_name": "Groomshop Static 320x480",
		"language": "EN",
		"creativeImages" : ["https://d13yacurqjgara.cloudfront.net/users/59947/screenshots/3236625/muti-2.jpg","https://d13yacurqjgara.cloudfront.net/users/257123/screenshots/3236547/party_time_1x.png","https://d13yacurqjgara.cloudfront.net/users/12779/screenshots/3236458/passing_through_patch_1x.png"]
	}, {
		"creative_title": "DOUBLECLICK - 320x480",
		"creative_id": "32929728",
		"creative_name": "Groomshop Static 320x480",
		"language": "FR",
		"creativeImages" : ["https://d13yacurqjgara.cloudfront.net/users/407255/screenshots/3236696/r29b_1x.jpg"]
	}, {
		"creative_title": "DOUBLECLICK - 320x480",
		"creative_id": "32929729",
		"creative_name": "Groomshop Static 320x480",
		"language": "FI",
		"creativeImages" : ["http://inmobiads.com/a1.png", "http://inmobiads.com/a2.png", "http://inmobiads.com/a1.png"]
	}];


	//Added selected flag as false to all the creatives
	angular.forEach($scope.creatives,function(creative) {
		creative.selected = false;
		$scope.selectAllFlag =false;
	})

	//SelectAll Feature
	$scope.selectAllCreatives = function(){
		if($scope.selectAllFlag == false) {
			$scope.selectAllFlag = true;
		} else if($scope.selectAllFlag == true) {
			$scope.selectAllFlag = false;
		}
		angular.forEach($scope.creatives,function(creative) {
				creative.selected = $scope.selectAllFlag;
		});
	}

	$scope.deleteSelectedDesign = function(creative) {
		var index = $scope.creatives.indexOf(creative);
		$scope.creatives.splice(index,1);
	}

	//Some Random Timeout to show loading images.
	//Time to load the image asset is based on the index of that card.
	setTimeout(function() {
		var imgs = document.querySelectorAll('.imgContainer > img');

		angular.forEach(imgs,function(elem, index){
			setTimeout(function() {
			elem.src = elem.getAttribute('data-src'); },500*index);
			elem.onload = function() {
				this.parentElement.classList.remove('spinner');
			}
			elem.onerror = function() {
				this.parentElement.classList.remove('spinner');
				this.parentElement.classList.add('noImageContent');
				this.remove();
			}
		})
	},1000);
}])