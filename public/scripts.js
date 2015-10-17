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
        var postHtml = "<li class='post list-group-item'>" + data.content + " <span data-id='" + data._id + "' class='close delete'>X</span></li>";
        $('.posts').append(postHtml);
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
      console.log("delete me");

      var postId = $(this).data().id;
      var post = $(this).closest('li');

      $.ajax({
        type: "delete",
        url: '/posts/' + postId
      })
      .done(function(data) {
        console.log(data);
        $(post).remove();
      })
      .fail(function(data) {
        console.log("Failed to terminate a cat!");
      });
    };

$('.post').on('click', '.close', closeCallback);

//Update Post Counter 
function postCounter(){
	if (postCount === 0){
	$('#postCount').append('0');
	} else {
	$('#postCount').empty();
	$('#postCount').append(postCount);
	}
}

});
