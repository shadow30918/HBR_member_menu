$(function () {
    // dropdown-menu關閉設定
    if ($('.dropdown-menuSet').length > 0) {
        $('.dropdown-menuSet').on('click', function (e) {
            e.stopPropagation();
        });
    }

    if ($('.closeBtn').length > 0) {
        $('.closeBtn').click(function () {
            $(this).parents('.dropdownBoxSet').find('.dropdownToggle').dropdown('toggle')
        });
    }

    //預設dropdown-menu是打開的
    if ($('.dropdownDefaultOpen .dropdownToggle').length > 0) {
        $(".dropdownDefaultOpen .dropdownToggle").dropdown("toggle");
    }
    //全站同意Cookie訊息
    if ($('.cookie').length > 0) {
        $('.cookie').click(function () {
            $('.cookie').css("display", "none");
        });
    }

    //載入更多按鈕 change loader
    if ($('.moreBtn').length > 0) {
        $('.moreBtn').click(function () {
            $(this).addClass('addLoader')
        });
    }

    //追踨按鈕
    if ($('.followBtn').length > 0) {
        $('.followBtn').click(function () {
            $(this).toggleClass('followCheckBtn')
        });
    }

    //主題分類訂閲
    if ($('.sortBoxClick ul li i').length > 0) {
        $('.sortBoxClick ul li i').click(function () {
            $(this).parent().toggleClass('followCheckBtn')
        });
    }
    //goTop
    if ($('#gotop').length > 0) {
        $("#gotop").click(function () {
            jQuery("html,body").animate({
                scrollTop: 0
            }, 1000);
        });
        $(window).scroll(function () {
            if ($(this).scrollTop() > 300) {
                $('#gotop').fadeIn("fast");
            } else {
                $('#gotop').stop().fadeOut("fast");
            }
        });
    }

    //mobile search
    if ($('.myMenu .modal-header .right li.search').length > 0) {
        $(".myMenu .modal-header .right li.search").click(function () {
            $(".myMenu .searchBox").toggle();
        });
    }

    //收藏資料夾
    if ($('.saveBox ul li ').length > 0) {
        $(".saveBox ul li ").click(function () {
            $(this).toggleClass('check');
        });
        $(".saveBox .lightBoxBtn ").click(function () {
            $(this).parent().parent().addClass('goLibrary');
            $(this).parent().find('.addForm').removeClass('formOpen')
            $(this).parent().find('li.add').removeClass('addNew');
            //$(this).parent().find('li.add').removeClass('check');
        });
    }

    //收藏資料夾 - 新增資料夾
    if ($('.saveBox ul li.add ').length > 0) {
        $(".saveBox ul li.add ").click(function () {
            $(this).addClass('addNew');
            $(this).parent().parent().find('.addForm').addClass('formOpen')
        });
    }


    //收藏資料夾個人圖書館隠藏
    if ($('.clickItem li a').length > 0) {
        $(".clickItem li a").click(function () {
            $(".mySave .modal-body").removeClass("goLibrary");
        });
    }


    //footer訂閱 scroll效果
    var windowTop = 0;
    $(window).scroll(function () {
        var scrolls = $(this).scrollTop();
        if (scrolls >= windowTop) {
            $('body').addClass('hideUp');
            windowTop = scrolls;
        } else {
            $('body').removeClass('hideUp');
            windowTop = scrolls;
        }
        if (scrolls == 0) {
            $('body').removeClass('hideUp');
        }
    });

    //針對ie object-fit
    if ($('.itemthumb img').length > 0) {
        msieversion = function () {
            var ua = window.navigator.userAgent;
            var msie = ua.indexOf("MSIE ");

            if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) // If Internet Explorer, return version number
            {
                //alert(parseInt(ua.substring(msie + 5, ua.indexOf(".", msie))));
                $('.itemthumb').each(function () {
                    var $container = $(this),
                        imgUrl = $container.find('img').prop('src');
                    if (imgUrl) {
                        $container
                            .css('backgroundImage', 'url(' + imgUrl + ')')
                            .addClass('compat-object-fit');
                    }
                });
            } else // If another browser, return 0
            {
                //alert('otherbrowser');
            }

            return false;
        }
        msieversion();
    }

    //兩欄左側小版樣式設定
    if ($('.box ul li a').length > 0) {
        $('.box ul li a').click(function () {
            $(this).parents('li').toggleClass('active')
        });
    }
    if ($('.reBtn').length > 0) {
        $('.reBtn').click(function () {
            $('body').addClass('modal-openB');
        });
    }
    if ($('.studyBox aside .closeBtn').length > 0) {
        $('.studyBox aside .closeBtn').click(function () {
            $('body').removeClass('modal-openB');
        });
    }

    //大版兩欄左側固定
    if ($('body').hasClass('sideBar') === true) {
        var Sticky = new hcSticky('aside', {
            stickTo: 'main',
            responsive: {
                991: {
                    disable: true
                }
            }
        });
    }


    //文章Detail個人圖書館隠藏
    if ($('.articleMenuItem  a.dropdownToggle').length > 0) {
        $(".articleMenuItem  a.dropdownToggle").click(function () {
            $(".mySave .modal-body").removeClass("goLibrary");
        });
    }

    //文章Detail單篇購買輸入框
    if ($('.inputNumber').length > 0) {
        $('.inputNumber').bootstrapNumber();
    }

    //文章Detail字放大
    if ($('.fontBtn').length > 0) {
        $('.fontBtn').click(function () {
            //影片用
            if ($('.videoText').length > 0) {
                $('.videoText').toggleClass('fontBig');
            }
            else {
                $('.edit').toggleClass('fontBig');
            }
            $(this).toggleClass('fontBtnChange')
        });
    }

    //文章Detail左側小版選單
    if ($('.articleMenuItem .dropright a').length > 0) {
        $('.articleMenuItem .dropright a').click(function () {
            $('body').addClass('modal-openC');
            $('.articleMenuItem .closeBtn').click(function () {
                $('body').removeClass('modal-openC');
            });
        });
    }
    if ($('.mobileBtn').length > 0) {
        $('.mobileBtn').click(function () {
            $('.articleMenu').toggleClass('articleMenuOpen');
            $(this).toggleClass('mobileBtnOpen')
        });
    }



    //文章出處
    if ($('.provenanceArticleSlick').length > 0) {
        $('.provenanceArticleSlick').slick({
            dots: true,
            infinite: true,
            speed: 500,
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            prevArrow: '<button type="button" class="slick-prev provenanceBtn"><i class="icon-previous2"></i></button>',
            nextArrow: '<button type="button" class="slick-next provenanceBtn"><i class="icon-previous"></i></button>',
        });
    }

    //文章Detail頁編輯器限高度開閤
    if ($('.toggleBox').length > 0) {
        $('.toggleBox').expandable({
            height: 250,
            // expand_responsive: 992,
            // no_less: true,
            offset: 30,
            more: '&nbsp;',
            less: '&nbsp; ',
        });
    }

    //文章Detail頁編輯器兩欄限高度開閤
    if ($('.twocolumn').length > 0) {
        $('.twocolumn .expand-bar').click(function () {
            $(this).parent().parent().parent().toggleClass('fullWidth')
        });
    }
    //文章Detail頁建議問題
    if ($('.questionSlick').length > 0) {
        $('.questionSlick').slick({
            dots: true,
            infinite: true,
            speed: 500,
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            prevArrow: '<button type="button" class="slick-prev provenanceBtn"><i class="icon-previous2"></i></button>',
            nextArrow: '<button type="button" class="slick-next provenanceBtn"><i class="icon-previous"></i></button>',
        });
    }

    //大版打開搜尋隠藏進度條title及左側選單
    if ($('.search.dropdownBoxSet').length > 0) {
        $('.search.dropdownBoxSet').on('show.bs.dropdown', function (e) {
            $('body').addClass('hiddenObject');
        });
        $('.search.dropdownBoxSet').on('hide.bs.dropdown', function (e) {
            $('body').removeClass('hiddenObject');
        });
    }


    //文章Detail進度條
    if ($('#track-progress').length > 0) {
        $('#track-progress').scrollProgress({
            customCss: true
        });
    }

    // scroll animate 目前僅首頁
    if ($('.clickAnimate  a').length > 0) {
        $(".clickAnimate  a").on("click", function () {
            var hrefLink = $(this).attr("href");
            $("html,body").animate({
                scrollTop: $(hrefLink).offset().top
            },
                800
            );
        });
    }

    // scroll animate tab
    if ($('.tabAnimate  a').length > 0) {
        $(".tabAnimate  a").on("click", function () {
            jQuery("html,body").animate({
                scrollTop: 0 + $('.fixedInfo').offset().top - $('.navBox').innerHeight()
            }, 1000);
        });
    }

    //滿版版型 精選專題tab
    if ($('.titleSlick').length > 0) {
        $('.titleSlick').slick({
            dots: false,
            infinite: true,
            speed: 500,
            arrows: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 2000,
            focusOnSelect: true,
            prevArrow: '<button type="button" class="slick-prev provenanceBtn"><i class="icon-previous2"></i></button>',
            nextArrow: '<button type="button" class="slick-next provenanceBtn"><i class="icon-previous"></i></button>',
            responsive: [{
                breakpoint: 1441,
                settings: {
                    slidesToShow: 3,

                }
            }, {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,

                }
            }, {
                breakpoint: 641,
                settings: {
                    slidesToShow: 1,

                }
            }]
        });
    }

    //滿版版型 精選專題tab active狀態
    if ($('.titleFullVersionCtn .titleFullVersionItem').length > 0) {
        $('.titleFullVersionCtn .titleFullVersionItem a').click(function () {
            $('.titleFullVersionCtn .titleFullVersionItem a').removeClass('active');
            $(this).addClass('active');
        });
    }


    //計算 elementOffset top
    if ($('.fixedInfo').length > 0) {
        function elementOffset() {
            var offset = $('.fixedInfo').offset().top - $(window).scrollTop() - $('.navBox').innerHeight();
            if (offset <= 0) {
                if ($("body").hasClass('fixedProgress') == false) {
                    $('body').addClass('fixedProgress');
                }
            } else if (offset > 0) {
                $('body').removeClass('fixedProgress');
            }
        }
        elementOffset();
        $(window).scroll(elementOffset);
    }



    // Load Facebook SDK for JavaScript
    if ($('.fb-customerchat').length > 0) {
        window.fbAsyncInit = function () {
            FB.init({
                xfbml: true,
                version: 'v10.0'
            });
        };

        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s);
            js.id = id;
            js.src = 'https://connect.facebook.net/zh_TW/sdk/xfbml.customerchat.js';
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }

    //shopping cart加入購物車 顯示狀態
    if ($('.articleMenuItem .buyBox ').length > 0) {

        $('.articleMenuItem .buyBox button.lightBoxBtn').on('click', function () {

            $('.snackbar').toggleClass('show');

            setTimeout(function () {

                $('.snackbar').toggleClass('show');

            }, 5000);

        });
    }

    //edit 文章註記
    $('.edit .edit-mark').on('click', function () {

        var markNo = $(this.hash);

        $('html,body').animate({

            scrollTop: markNo.offset().top - 100

        }, 1000);

        return false;

    });

    //nav 小版時 購物車有東西 要顯示
    if ($(window).outerWidth() < 991 && $('nav .topMenuBox>.topMenu>li.shopCart .dropdown-menu>.ctn>div').hasClass('listBox')) {

        $('nav .topMenuBox>.topMenu>li.shopCart').css('display', 'flex');
    }


    //footer ad banner
    if ($('.footer_ad_banner .titleFullVersionCtn').length > 0) {
        $('.footer_ad_banner .titleFullVersionCtn').slick({
            dots: true,
            infinite: true,
            speed: 500,
            arrows: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            focusOnSelect: true,
            prevArrow: '<button type="button" class="slick-prev provenanceBtn"><i class="icon-previous2"></i></button>',
            nextArrow: '<button type="button" class="slick-next provenanceBtn"><i class="icon-previous"></i></button>',
            responsive: [
                {
                    breakpoint: 1300,
                    settings: {
                        slidesToShow: 3,
                    },
                },
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 1,
                    },
                },
            ],
        });

        // footer_banner();
        // $(window).resize(function () {
        //     console.log('in')
        //     footer_banner();
        // });
    }


    // function footer_banner() {
    //     console.log($('.footer_ad_banner .titleFullVersionCtn .slick-slide').length)
    //     console.log($(window).outerWidth())

    //     if ($('.footer_ad_banner .titleFullVersionCtn .slick-slide').length <= 4 && $(window).outerWidth() > 1300) {
    //         console.log('in2')
    //         $('.footer_ad_banner ul.slick-dots').hide();
    //     }
    //     else {
    //         $('.footer_ad_banner ul.slick-dots').show();
    //     }
    // }

});

// 針對IE可寫css
if ( /*@cc_on!@*/ false) {
    document.documentElement.className += ' ie' + document.documentMode;
}
if ( /*@cc_on!@*/ true) {
    document.documentElement.className += ' ie' + document.documentMode;
}


//左側選單scroll style    
$("nav .leftMenu .dropdown-menu,nav .topMenuBox .listBox").mCustomScrollbar({ theme: "minimal-dark" });


//選單固定
function fixedHeader() {
    if ($(window).scrollTop() > 0) {
        if (!$("body").hasClass("fixedHeader")) {
            $('body').addClass("fixedHeader");
        }
    }
    else {
        $('body').removeClass("fixedHeader");
    }
}
$(window).scroll(function () { fixedHeader() });




//svg fill color
SVGInject(document.querySelectorAll("img.svg"));

