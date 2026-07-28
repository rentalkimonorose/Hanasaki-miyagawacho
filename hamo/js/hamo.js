// ページトップ
// http://www.webopixel.net/javascript/538.html
$(function() {
	var topBtn = $('#pagetop');
	topBtn.hide();

	$(window).scroll(function () {
		if ($(this).scrollTop() > 1000) {
			topBtn.fadeIn();
		} else {
			topBtn.fadeOut();
		}
	});

	topBtn.click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 500);
		return false;
	});
});

// スムーズスクロール安定版（ページ内のみ）
// http://www.lavison.net/1108/
$(function() {
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});
});

// shareボタン
// twitter（非同期化）
!function(d,s,id) {
	var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';
	if(!d.getElementById(id)){
		js=d.createElement(s);js.id=id;
		js.async = true;
		js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);
	}
}
(document, 'script', 'twitter-wjs');

// shareボタン
// Facebook（非同期化）
(function(d, s, id) {
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) return;
	js = d.createElement(s); js.id = id;
	js.async = true;
	js.src = "//connect.facebook.net/ja_JP/sdk.js#xfbml=1&appId=&version=v2.0";
	fjs.parentNode.insertBefore(js, fjs);
}
(document, 'script', 'facebook-jssdk'));

// shareボタン
// google+1（非同期化）
  window.___gcfg = {lang: 'ja'};

  (function() {
    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
    po.src = 'https://apis.google.com/js/platform.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
  })();