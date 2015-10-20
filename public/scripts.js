$(document).ready(function(){

var postCount;

//Submit Form
$('#newPost').on('submit', function(e){
	e.preventDefault();
	if ($('#post-content').val() === ''){
		console.log('No post content');
	} else {
	var formData = $(this).serialize();
	
	$.ajax({
        url: '/posts',
        type: "POST",
        data: formData
    })
      .done(function(data) {
        console.log("made a post successfully: ", data);
        
        var date = new Date().toDateString();
        var postHtml = "<div class='col-md-4 post well'>" 
        + "Date:<p class='date'>" + date + "</p>" + "<ol><li>" + data.item1 + "</li>" 
        + "<li>" + data.item2 + "</li>"
        + "<li>" + data.item3 + "</li></ol>"
        + " <span data-id='" 
        + data._id  
        + "' class='close delete'>x</span></div>";

        $('.posts').append(postHtml);
        postCounter();
       	$('.post').on('click', '.close', closeCallback);
        $('#newPost')[0].reset();
        })
        .fail(function(data) {
        console.log("Failed to make post!");
    	});
    }
});

//Delete Post
var closeCallback = function(e) {
      e.preventDefault();

      var postId = $(this).data().id;
      var post = $(this).closest('div');

      $.ajax({
        type: "delete",
        url: '/posts/' + postId
      })
      .done(function(data) {
        console.log(data);
        $(post).remove();
        postCounter();
      })
      .fail(function(data) {
        console.log("Failed to terminate a post!");
      });
    };

$('.post').on('click', '.close', closeCallback);

//Update Post Counter 
function postCounter(){
	if (postCount === 0){
	$('#postCount').append('0');
	} else {
  $('#postCount').empty();
	$('#postCount').append($('.posts div').length);
	}
}

postCounter();

});
