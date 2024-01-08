let eb_slider = $('.eb_slider_list')

eb_slider.slick({
    arrows: false,
    dots: true,
    autoplay: true,
    pauseOnHover: false,
    fade: true,
});


//정지&재생버튼
//자바스크립트시 >> 선택자.addEventListerner('click',function(){})
//혹은          >> 선택자.onclick(function(){})
$('.event_box2 .page_act .btn_stop').click(function (e) {
    e.preventDefault();
    if ($('.event_box2 .page_act').hasClass('on')) {
        //on이라는 클래스명을 가지고 있다면 true, 아니라면 false.
        $('.event_box2 .page_act').removeClass('on');
        eb_slider.slick('slickPause');
    }
})


$('.event_box2 .page_act .btn_play').click(function (e) {
    e.preventDefault();
    if (!$('.event_box2 .page_act').hasClass('on')) {

        //! --> not   !! --> 긍정
        $('.event_box2 .page_act').addClass('on');
        eb_slider.slick('slickPlay');
    }
})


//event_box3
$('.card').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    pauseOnHover: false,
    fade: true,
});

$('.event_box3 .page_act .btn_stop').click(function (e) {
    e.preventDefault();
    if ($('.event_box3 .page_act').hasClass('on')) {
        //on이라는 클래스명을 가지고 있다면 true, 아니라면 false.
        $('.event_box3 .page_act').removeClass('on');
        $('.card').slick('slickPause');
    }
})


$('.event_box3 .page_act .btn_play').click(function (e) {
    e.preventDefault();
    if (!$('.event_box3 .page_act').hasClass('on')) {

        //! --> not   !! --> 긍정
        $('.event_box3 .page_act').addClass('on');
        $('.card').slick('slickPlay');
    }
})

//#cont2 #life button

let tab = $('.life_menu ul li');
let menu = $('.life_style ul li');

tab.mouseover(function () {
    let target = $(this);
    let index = target.index();
    console.log(index)
    menu.css({opacity:0})
    menu.eq(index).css({opacity:1})
});