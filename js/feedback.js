$(document).ready(function(){
	$("#feedback-tab").click(function() {
		$("#feedback-form").toggle("slide");
		$('body').toggleClass('feedback-open');
	});

	$("#feedback-form form").on('submit', function(event) {
		var $form = $(this);
		$.ajax({
			type: $form.attr('method'),
			url: $form.attr('action'),
			data: $form.serialize(),
			success: function() {
				$("#feedback-form").toggle("slide").find("textarea").val('');
			}
		});
		event.preventDefault();
	});
	
	jQuery(document).bind("click touchstart", function(e){
		var container = jQuery('#feedback');
		if(jQuery('body').hasClass('feedback-open') && !container.is(e.target) && container.has(e.target).length === 0){
			$("#feedback-form").toggle("slide");
			jQuery('body').removeClass('feedback-open');
		}
	 });
});

