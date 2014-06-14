(function() { 

	var app = angular.module("myrtle",[]); 

	
	app.controller('LarkController', function(){
		this.photos = photos; 
		this.description = description;
		this.title = title;
	});

	app.controller('ReviewController', function(){
		this.review = {}; // set review to an empty object...will be filled with our data.
		this.addReview = function(product) {
			product.reviews.push(this.review); //push the controller review on the reviews array.
			this.review =  {}; // clear the form hide the live preview
			alert('Hey you did it.');
		};
	});


	var title = "Myrtle Beach Vacation Home";
	var description = "Welcome to our vacation home at the beach!";
	var photos = [ 
		{
			caption: 'Come on in!',
			image: [
		      "build/img/beach11.jpg",
		      "build/img/beach11-sm.jpg",
		    ],
		    sizes: [
		      "1024",
		      "320",
		    ],
		},
		{
			caption: 'Living Room, with updated furniture.',
			image: [
		      "build/img/beach3.jpg",
		      "build/img/beach3-sm.jpg",
		    ],
		    sizes: [
		      "1024",
		      "320",
		    ],
		},

		{
			caption: 'Dining Room with island, great for entertaining.',
			image: [
		      "build/img/beach4.jpg",
		      "build/img/beach4-sm.jpg",
		    ],
		    sizes: [
		      "1024",
		      "320",
		    ],
		},

		{
			caption: 'Dining Room looking into the living room.',
			image: [
		      "build/img/beach5.jpg",
		      "build/img/beach5-sm.jpg",
		    ],
		    sizes: [
		      "1024",
		      "320",
		    ],
		},

		{
			caption: 'Master bedroom.',
			image: [
		      "build/img/beach6.jpg",
		      "build/img/beach6-sm.jpg",
		    ],
		    sizes: [
		      "1024",
		      "320",
		    ],
		},

		{
			caption: 'Laundry and bathroom attached to master bedroom.',
			image: [
		      "build/img/beach7.jpg",
		      "build/img/beach7-sm.jpg",
		    ],
		    sizes: [
		      "1024",
		      "320",
		    ],
		},

		{
			caption: 'Bathroom.',
			image: [
		      "build/img/beach8.jpg",
		      "build/img/beach8-sm.jpg",
		    ],
		    sizes: [
		      "1024",
		      "320",
		    ],
		},

		{
			caption: 'The sunroom.  A great place to read the morning paper.',
			image: [
		      "build/img/beach9.jpg",
		      "build/img/beach9-sm.jpg",
		    ],
		    sizes: [
		      "1024",
		      "500",
		    ],
		},
		{
			caption: 'View of the breakfat nook, from the kitchen.',
			image: [
		      "build/img/beach17.jpg",
		      "build/img/beach17-sm.jpg",
		    ],
		    sizes: [
		      "1024",
		      "320",
		    ],
		},

		{
			caption: 'View from the sunroom to the dining room.',
			image: [
		      "build/img/beach10.jpg",
		      "build/img/beach10-sm.jpg",
		    ],
		    sizes: [
		      "1024",
		      "320",
		    ],
		},

		

		{
			caption: 'Birds eye view.',
			image: [
		      "build/img/beach12.jpg",
		      "build/img/beach12-sm.jpg",
		    ],
		    sizes: [
		      "1024",
		      "320",
		    ],
		},

		{
			caption: 'Just a few feet from the beach access.',
			image: [
		      "build/img/beach13.jpg",
		    ],
		    sizes: [
		      "1024",
		      "320",
		    ],
		},

		

		{
			caption: 'Viewing the house coming back from the beach.  The outdoor shower is great to rinse off.',
			image: [
		      "build/img/beach15.jpg",
		      "build/img/beach15-sm.jpg",
		    ],
		    sizes: [
		      "1024",
		      "320",
		    ],
		},

		{
			caption: 'Air conditioned.',
			image: [
		      "build/img/beach18.jpg",
		      "build/img/beach18-sm.jpg",
		    ],
		    sizes: [
		      "1024",
		      "320",
		    ],
		},	
	];
	

})();