jQuery(document).ready(function($) {
	$('#opt-1-btn').click(function(event) {hideAll();$('#opt-1-div').show();});
	$('#opt-2-btn').click(function(event) {hideAll();$('#opt-2-div').show();});
	$('#opt-3-btn').click(function(event) {hideAll();$('#opt-3-div').show();});
	$('#opt-4-btn').click(function(event) {hideAll();$('#opt-4-div').show();});
	$('#opt-5-btn').click(function(event) {hideAll();$('#opt-5-div').show();});
	$('#opt-6-btn').click(function(event) {hideAll();$('#opt-6-div').show();});
	$('#opt-7-btn').click(function(event) {hideAll();$('#opt-7-div').show();});
	$('#opt-8-btn').click(function(event) {hideAll();$('#opt-8-div').show();});
});
function hideAll() {
	$('#opt-1-div').hide();
	$('#opt-2-div').hide();
	$('#opt-3-div').hide();
	$('#opt-4-div').hide();
	$('#opt-5-div').hide();
	$('#opt-6-div').hide();
	$('#opt-7-div').hide();
	$('#opt-8-div').hide();
}