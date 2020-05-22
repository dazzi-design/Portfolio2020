// portfolio.js

// "main-page"
// works effect 
$(function () {
    // 탭 버튼 이벤트
    $('#works nav a').on('click', function () {
        // 카테고리명 (hash값)확인
        var cat_name = $(this).attr('href');
        console.log(cat_name)


        // all 버튼은 조건문을 사용하기 / !== < 같지 않다는 뜻
        if (cat_name !== '#work_list_all') {
            // 해당 아이디의 목록을 표시(all이 아닌경우만)
            $('#work_list_all > ul').hide(200);
            $(cat_name).show(200);
        } else {
            // all 버튼을 누른경우
            $('#work_list_all > ul').show(200);
        }

        // 앵커태그가 원래 자리 가려고하는게 있어서 하이퍼링크 기본이벤트 금지 시킨다.
        return false;
    })

});

// about scroll영역에서 스크롤아이콘 고정시키기 * y값이 어떻게 콘솔되는지 확인하고, 본 고정되야하는 y값 더해지게 처리
$(function () {
    var origin_y = 250;
    $('.about_right').on('scroll', function () {
        var y = $(this).scrollTop();
        console.log(y);

        $('#about > .about_right > #scroll_icon img')
            .css('top', (origin_y + y) + 'px');

    });
});

// 내부링크(#)시 부드러운 스크롤 이동
$(document).ready(function(){
    $("#main_gnb a").on('click', function(event){
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            },800, function(){
                window.location,hash = hash;
            });
        }  // End if
    });
});

// "sub-page"
