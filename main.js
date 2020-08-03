//var $121=$.noConflict(true);
//var $1110=$.noConflict(true);

$(function(){
	
	//ハンバーガーメニュー
	//トグルボタンが押されたときに、クラスを付与
　$('.Toggle').click(function() {
　　$(this).toggleClass('active');

　if ($(this).hasClass('active')) {
　　$('.NavMenu').addClass('active');　 //クラスを付与
　} else {
　　$('.NavMenu').removeClass('active'); //クラスを外す
　}
　});

	/*--Back to Top--*/
	/*-------------*/
	
	// ボタン消す
	$('#back_to_top').hide();
	
	// スクロールしたらボタン現れる
	// 上に戻ったらボタン消える
	$(window).scroll(function() {
		if ($(this).scrollTop() > 60) {
			//fadeIn
			$('#back_to_top').fadeIn();
		} else {
			//fadeOut
			$('#back_to_top').fadeOut();
		}
	});
	
	// ボタン押されたら
	$('#back_to_top').click(function() {
			$('body, html').animate({
				scrollTop:0
			}, 500);
			return false;
		});

	$('.startpoint').click(function(){
		var contactPadding = 40;
        var targetTop = $('#contactform').offset().top;
        $('html,body').animate({
            scrollTop: targetTop-contactPadding
        }, 500);
        return false;
    });


     //YouTubeボタン
    $('#youtube').click(function(){
        $(".Toggle").toggleClass('active');//ハンバーガーメニューを×に
        $('.NavMenu').removeClass('active'); //クラスを外すnavを非アクティブ
        var p = $(".video").offset().top;
        var header=$('header').outerHeight();
        $('html,body').animate({ 
        	scrollTop: p-header 
        }, 500);
        return false;
    });

    //NEWSボタン
    $('#news-btn').click(function(){
        $(".Toggle").toggleClass('active');//ハンバーガーメニューを×に
        $('.NavMenu').removeClass('active'); //クラスを外すnavを非アクティブ
        var p = $(".news").offset().top;
        var header=$('header').outerHeight();
        $('html,body').animate({ 
        	scrollTop: p-header 
        }, 500);
        return false;
    });

    //instaボタン
    $('#insta').click(function(){
        $(".Toggle").toggleClass('active');//ハンバーガーメニューを×に
        $('.NavMenu').removeClass('active'); //クラスを外すnavを非アクティブ
        var p = $(".instagram-media").offset().top;
        var header=$('header').outerHeight();
        $('html,body').animate({ 
        	scrollTop: p-header 
        }, 500);
        return false;
    });

     //mapボタン
     $('#map-btn').click(function(){
        $(".Toggle").toggleClass('active');//ハンバーガーメニューを×に
        $('.NavMenu').removeClass('active'); //クラスを外すnavを非アクティブ
        var p = $("#map").offset().top;
        var header=$('header').outerHeight();
        $('html,body').animate({ 
        	scrollTop: p-header 
        }, 500);
        return false;
    });

    //signupボタン
    $('#form-ftp').click(function(){
        $(".Toggle").toggleClass('active');//ハンバーガーメニューを×に
        $('.NavMenu').removeClass('active'); //クラスを外すnavを非アクティブ
        var p = $("#link-form").offset().top;
        var header=$('header').outerHeight();
        $('html,body').animate({ 
        	scrollTop: p-header 
        }, 500);
        return false;
    });


});