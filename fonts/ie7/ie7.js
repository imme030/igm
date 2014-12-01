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
		'icon-arrow_down': '&#xe600;',
		'icon-arrow_left': '&#xe601;',
		'icon-arrow_right': '&#xe602;',
		'icon-arrow_up': '&#xe603;',
		'icon-calender': '&#xe604;',
		'icon-close': '&#xe605;',
		'icon-download_alt': '&#xe606;',
		'icon-download': '&#xe607;',
		'icon-downloadcenter': '&#xe608;',
		'icon-facebook_alt': '&#xe609;',
		'icon-facebook': '&#xe60a;',
		'icon-igm_logo': '&#xe60b;',
		'icon-mail': '&#xe60c;',
		'icon-marker': '&#xe60d;',
		'icon-menu': '&#xe60e;',
		'icon-minus': '&#xe60f;',
		'icon-mitglied': '&#xe610;',
		'icon-nrw_wortmarke': '&#xe611;',
		'icon-play': '&#xe612;',
		'icon-plus': '&#xe613;',
		'icon-quote': '&#xe614;',
		'icon-Radio_active': '&#xe615;',
		'icon-Radio_check': '&#xe616;',
		'icon-Radio': '&#xe617;',
		'icon-search': '&#xe618;',
		'icon-share': '&#xe619;',
		'icon-slider_active': '&#xe61a;',
		'icon-slider': '&#xe61b;',
		'icon-switch_off': '&#xe61c;',
		'icon-switch_on': '&#xe61d;',
		'icon-twitter_alt': '&#xe61e;',
		'icon-twitter': '&#xe61f;',
		'icon-youtube': '&#xe620;',
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
