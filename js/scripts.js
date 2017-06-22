
/**
 * Created by GeancarlosCE on 03/06/2016.
 */
$(function () {
	var toggleMenu = $('#toggle-menu');
	var nav = $('#main-nav');

	toggleMenu.on('click', function () {
		nav.add($('body')).toggleClass('mostrar');
	});
});