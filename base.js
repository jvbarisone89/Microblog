$(document).ready(function(){

var postContent;
var postCount;




//Submit Form
$('#submit').click(function(){
	if($('#textContent').val() === ''){
		console.log('There is no text in string.');
	} else {
	postContent = $('#textContent').val();
	addItem(postContent);
	postCount = ($('#todo li').length);
	postCounter(postCount);
	$('#textContent').val('');
	}
});

//Add list item

function addItem(){
	var xButton = "<input type= 'checkbox' class='checked'></input>";
	$('#todo').append('<li class= "list-group-item">' + postContent + xButton + '</li>');
}

//Update Post Counter 
function postCounter(){
	if (postCount === 0){
	$('#postCount').append('0');
	} else {
	$('#postCount').empty();
	$('#postCount').append(postCount);
	}
}

//Update Progress Bar




//Complete list item

$('.checked').on('click', function(){
	console.log('i was clicked.');
});

});
