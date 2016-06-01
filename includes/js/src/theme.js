$(document).ready(function(){
	$('header').affix({
		offset:{
			top: function (){
				return ( this.top = $( 'header' ).outerHeight( true ) );
			},
		}
	});
});