/* Author: Milos

*/
//this code is a bit of a mess but I just wanted to see how tabs work as a JS tabs.
$('a').click(function(){
	//check if we are dealing with first element or not
	if ($(this).is('ul li:first-child a'))
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





















