/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'IGM_NRW\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-arrow_left': '&#xe600;',
		'icon-arrow_right': '&#xe601;',
		'icon-arrow_up': '&#xe602;',
		'icon-calender': '&#xe603;',
		'icon-close': '&#xe604;',
		'icon-download_alt': '&#xe605;',
		'icon-download': '&#xe606;',
		'icon-downloadcenter': '&#xe607;',
		'icon-facebook_alt': '&#xe608;',
		'icon-facebook': '&#xe609;',
		'icon-igm_logo': '&#xe60a;',
		'icon-mail': '&#xe60b;',
		'icon-marker': '&#xe60c;',
		'icon-menu': '&#xe60d;',
		'icon-minus': '&#xe60e;',
		'icon-mitglied': '&#xe60f;',
		'icon-nrw_wortmarke': '&#xe610;',
		'icon-play': '&#xe611;',
		'icon-plus': '&#xe612;',
		'icon-search': '&#xe613;',
		'icon-share': '&#xe614;',
		'icon-slider_active': '&#xe615;',
		'icon-slider': '&#xe616;',
		'icon-twitter_alt': '&#xe617;',
		'icon-twitter': '&#xe618;',
		'icon-youtube': '&#xe619;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
