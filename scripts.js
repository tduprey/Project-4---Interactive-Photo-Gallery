// JavaScript Document

// Adds an array of media items. The idea is that you would be able to add items to the .media-container in the index.html page by simply adding the item's data to this array of objects. 

var myMedia = [
	{
		type   : "image",
		title  : "Media title 1",
		byline : "Tyler Duprey", 
		thumb  : "Media/Thumbs/01.jpg",
		path   : "Media/Photos/01.jpg",
		caption: "Caption for Media item 01"
	},
	{
		type   : "image",
		title  : "Media title 2",
		byline : "Tyler Duprey", 
		thumb  : "Media/Thumbs/02.jpg",
		path   : "Media/Photos/02.jpg",
		caption: "Caption for Media item 02"
	},
	{
		type   : "image",
		title  : "Media title 3", 
		byline : "Tyler Duprey",
		thumb  : "Media/Thumbs/03.jpg",
		path   : "Media/Photos/03.jpg",
		caption: "Caption for Media item 03"
	},
	{
		type   : "image",
		title  : "Media title 4", 
		byline : "Tyler Duprey",
		thumb  : "Media/Thumbs/04.jpg",
		path   : "Media/Photos/04.jpg",
		caption: "Caption for Media item 04"
	},
	{
		type   : "image",
		title  : "Media title 5", 
		byline : "Tyler Duprey",
		thumb  : "Media/Thumbs/05.jpg",
		path   : "Media/Photos/05.jpg",
		caption: "Caption for Media item 05"
	},
	{
		type   : "image",
		title  : "Media title 6", 
		byline : "Tyler Duprey",
		thumb  : "Media/Thumbs/06.jpg",
		path   : "Media/Photos/06.jpg",
		caption: "Caption for Media item 06"
	},
	{
		type   : "image",
		title  : "Media title 7", 
		byline : "Tyler Duprey",
		thumb  : "Media/Thumbs/07.jpg",
		path   : "Media/Photos/07.jpg",
		caption: "Caption for Media item 07"
	},
	{
		type   : "image",
		title  : "Media title 8", 
		byline : "Tyler Duprey",
		thumb  : "Media/Thumbs/08.jpg",
		path   : "Media/Photos/08.jpg",
		caption: "Caption for Media item 08"
	},
	{
		type   : "image",
		title  : "Media title 9", 
		byline : "Tyler Duprey",
		thumb  : "Media/Thumbs/09.jpg",
		path   : "Media/Photos/09.jpg",
		caption: "Caption for Media item 09"
	},
	{
		type   : "image",
		title  : "Media title 10", 
		byline : "Tyler Duprey",
		thumb  : "Media/Thumbs/10.jpg",
		path   : "Media/Photos/10.jpg",
		caption: "Caption for Media item 10"
	},
	{
		type   : "image",
		title  : "Media title 11", 
		byline : "Tyler Duprey",
		thumb  : "Media/Thumbs/11.jpg",
		path   : "Media/Photos/11.jpg",
		caption: "Caption for Media item 11"
	},
	{
		type   : "image",
		title  : "Media title 12", 
		byline : "Tyler Duprey",
		thumb  : "Media/Thumbs/12.jpg",
		path   : "Media/Photos/12.jpg",
		caption: "Caption for Media item 12"
	},
	{
		type   : "image",
		title  : "Media title 9", 
		byline : "Tyler Duprey",
		thumb  : "Media/Thumbs/09.jpg",
		path   : "Media/Photos/09.jpg",
		caption: "Caption for Media item 09"
	},
	{
		type   : "image",
		title  : "Media title 10", 
		byline : "Tyler Duprey",
		thumb  : "Media/Thumbs/10.jpg",
		path   : "Media/Photos/10.jpg",
		caption: "Caption for Media item 10"
	},
	{
		type   : "image",
		title  : "Media title 11", 
		byline : "Tyler Duprey",
		thumb  : "Media/Thumbs/11.jpg",
		path   : "Media/Photos/11.jpg",
		caption: "Caption for Media item 11"
	},
	{
		type   : "image",
		title  : "Media title 12", 
		byline : "Tyler Duprey",
		thumb  : "Media/Thumbs/12.jpg",
		path   : "Media/Photos/12.jpg",
		caption: "Caption for Media item 12"
	}
];

var $lightBox = $('<div id="lightBox"></div>');
var $feature  = $('<img class="featured-image" />');
var $fContent = $('<ul></ul>');
var $fTitle    = $('<li></li>');
var $fByLine   = $('<li></li>');
var $fCaption  = $('<li></li>');


$lightBox.append($feature);
$lightBox.append($fContent);
$fContent.append($fTitle);
$fContent.append($fByLine);
$fContent.append($fCaption);

// FUNCTIONS

// This is the main lightbox function. It will generate a full page overlay with the filtered list of media items in a slider-like user interface that the user can click through.

$("body").append($lightBox);

$lightBox.hide();

$(document).on('click', '.media-container a', function( event ) {
	event.preventDefault();
	
	var href = $(this).attr("class");
	$feature.attr('src', href);
	
	var getTitle   = $(this).find('h3').html();
	var getByLine  = $(this).find('.byLine').html();
	var getCaption = $(this).find('.caption').html();
	
	$fTitle.html( '<h2>' + getTitle + '</h2>' );
	$fByLine.html( getByLine );
	$fCaption.html( getCaption );
	
	$lightBox.show();
	
	
	
});

$(document).on('click', '#lightBox', function( event ) {
	event.preventDefault();
	
	$lightBox.hide();
	
});

$(document).on('keypress', '#lightBox', function( event ) {
	event.preventDefault();
	
	$lightBox.hide();
	
});

// Below is the printHTML function which is used to print the list of media items inside the gallery section as well as the div overlay for each media item.

function printHTML(url, title, type, css, path, by, cap) {
	$('.media-container').append(
		'<a href=" ' + 
		url + 
		'" class="' +
		path +
		'">' + 
		'<li ' + 
		css + 
		'> ' + 
		'<div class="media-overlay">' + 
		title + 
		type +
		'<img src="Media/mag-icon.svg" alt="magnifying glass icon."/>' +
		'<span class="byLine">Submitted By: ' +
		by + 
		'</span>' +
		'<span class="caption"> ' +
		cap + 
		'</span>' + 
		'</li></a>'
	);
}


//This is what I call the constructor function. It uses a simple for looop to iterate through the array of objects called myMedia() and it uses an if else statement to determine the media type and collect the data for each. 

function constructor() {
	var type;
	var title;
	var thumb;
	var childNumber;
	var imageURL;
	var css;
	
	for (var i=0; i<=myMedia.length; i++) {
		if (myMedia[i].type === "Image" || "Video" || "Animation") {
			
			childNumber = i+1;
			type = "<p>" + myMedia[i].type + "</p>";
			title = "<h3>" + myMedia[i].title + "</h3>";
			thumb = myMedia[i].thumb;
			imageURL = myMedia[i].path;
			by = myMedia[i].byline;
			cap = myMedia[i].caption;
			css = 'style="background-image: url( ' + thumb + ' );"';
			printHTML(thumb, title, type, css, imageURL,by,cap);
		} else if (myMedia.length === 0 || undefined) {
			$('.media-container').append('<li>' + noItems + '</li>');
		}
	}
}

constructor();









































