/* Author: 

*/
$('a').click(function(){
	if ($(this).html() == $('ul li:first a').html())
	{
		$('.cur_first').removeClass('cur_first');
		$('.cur').removeClass('cur');
		$('a.box_shadow').removeClass('box_shadow');
		$(this).addClass('cur_first').addClass('box_shadow');
	}else {
		$('.cur_first').removeClass('cur_first');
		$('.cur').removeClass('cur');
		$('a.box_shadow').removeClass('box_shadow');
		$(this).addClass('cur').addClass('box_shadow');
	}
	return false;
});





















