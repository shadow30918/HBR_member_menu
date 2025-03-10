

$(function () {

    /*folder 左欄折疊區塊*/
    //刪除
    if ($('.studyBox aside a.delete').length > 0) {
        $('.studyBox aside a.delete').click(function () {

            $('.folder').removeClass('open');
            $(this).parent().find('.deleteFolder').addClass('open');
        });
    }
    //修改
    if ($('.studyBox aside a.modify').length > 0) {
        $('.studyBox aside a.modify').click(function () {

            $('.folder').removeClass('open');
            $(this).parent().find('.modifyFolder').addClass('open');
        });
    }
    //新增
    if ($('.studyBox aside a.insert').length > 0) {
        $('.studyBox aside a.insert').click(function () {

            $('.folder').removeClass('open');
            $(this).parent().find('.insertFolder').addClass('open');
        });
    }


    $('.folder .close').on('click', function () {
        $(this).parents('.folder').removeClass('open');
    });

    $('.folder .submit').on('click', function () {
        $(this).parents('.folder').removeClass('open');
    });

    //太多項目的tab 小版變點擊下拉
    if ($(window).outerWidth() < 767) {
        $('.memberCenterList a').on('click', function () {

            $(this).toggleClass('open');
        });
    }
    if ($(window).outerWidth() < 767) {
        $('.QATabList a.now').on('click', function () {

            $(this).toggleClass('open');
        });

        var tab_active;
        $('.QATabList .nav.nav-tabs .nav-link').on('click', function () {
            tab_active = $(this).html()
            $(this).parents('.QATabList').find('.now').html(tab_active)
            $(this).parents('.QATabList').find('.now').attr('title', tab_active)
            $(this).parents('.QATabList').find('.now').toggleClass('open')
        });
    }
    if ($(window).outerWidth() < 767) {
        $('.PrivacyTabList a.now').on('click', function () {

            $(this).toggleClass('open');
        });

        var tab_active;
        $('.PrivacyTabList .nav.nav-tabs .nav-link').on('click', function () {
            tab_active = $(this).html()
            $(this).parents('.PrivacyTabList').find('.now').html(tab_active)
            $(this).parents('.PrivacyTabList').find('.now').attr('title', tab_active)
            $(this).parents('.PrivacyTabList').find('.now').toggleClass('open')
        });
    }



    /*帳號管理修改*/
    if ($('.ManageItem .detail .accountItem').length > 0) {

        $('.ManageItem .detail .accountItem .modify').on('click', function () {

            $(this).parents('.accountItem').addClass('open');
        });

        $('.ManageItem .detail .accountItem .close').on('click', function () {

            $(this).parents('.accountItem').removeClass('open');
        });
        $('.ManageItem .detail .accountItem .submit').on('click', function () {

            $(this).parents('.accountItem').removeClass('open');
        });

    }



    /*會員登入 協助事項 跳出視窗*/


    if ($('footer.footer_login .helpBox .helpInnerBox').length > 0) {

        if ($(window).outerWidth() < 767) {

            $('footer.footer_login .helpBox .helpInnerBox').removeClass('open');

        }

        $('footer.footer_login .helpBox a.help').on('click', function () {

            $(this).parents('.helpBox').find('.helpInnerBox').toggleClass('open');

        });

        $('footer.footer_login .helpBox .helpInnerBox .close').on('click', function () {

            $(this).parents('.helpBox').find('.helpInnerBox').toggleClass('open');

        });



    }

    //login 密碼是否可視
    $('.loginBox .input-item .seepassword').click(function (event) {
        if ($(this).hasClass('canSee')) {
            $(this).parents('.input-item').find('input').attr('type', 'password')
            $(this).addClass('cannotSee');
            $(this).removeClass('canSee')
        } else {
            $(this).parents('.input-item').find('input').attr('type', 'text')
            $(this).addClass('canSee')
            $(this).removeClass('cannotSee')
        }
    });


    //shopping car invoice type
    let invoiceType = "";
    $('input[type=radio][name=invoicetypeRadio]').on('change', function () {

        invoiceType = $(this).val();

        if (invoiceType != null && $('.invoicetypeBox .' + invoiceType).length > 0) {

            $('.invoicetypeBox>div').addClass('hide');
            $('.invoicetypeBox .' + invoiceType).removeClass('hide');

        }

    });

    let twopartInvoiceType = "";
    $('.twopartInvoice .selectStyleBox select').on('change', function () {

        twopartInvoiceType = this.value;

        if (twopartInvoiceType != null && $('.twopartInvoiceBox .' + twopartInvoiceType).length > 0) {

            $('.twopartInvoiceBox>div').addClass('hide');
            $('.twopartInvoiceBox .' + twopartInvoiceType).removeClass('hide');

        }

    });

    //input
    //驗證
    $(".verificationBox input").keyup(function () {
        console.log(this.value.length);
        if (this.value.length == this.maxLength) {
            $(this).parent(".input-item").next().find("input").focus();
        }
    });

    /*國際電話*/
    $(".globalphoneBox .form-check input[name=check-globalphone]").on('change', function () {


        if ($(this).is(":checked")) {
            $(this).parents('.globalphoneBox').addClass('active');
        }
        else {
            $(this).parents('.globalphoneBox').removeClass('active');
        }

    });
    /*國際地址*/
    $(".globaladdressBox .form-check input[name=check-globaladdress]").on('change', function () {


        if ($(this).is(":checked")) {
            $(this).parents('.globaladdressBox').addClass('active');
        }
        else {
            $(this).parents('.globaladdressBox').removeClass('active');
        }

    });


    /*modal addNewUser 、addPurchaser*/
    let radio_id = "";
    $('.modal .radioBox .radio-inline input').on('change', function () {

        radio_id = $(this).attr('id');

        if ($(this).is(":checked")) {
            $('.modal .selectTimeBox #' + radio_id + 'Box').addClass('show').siblings().removeClass('show');
        }
    });

    //select limit text
    let text_length = $('select option').length;
    var option_text = "";
    if (text_length > 0) {

        $('select option').each(function () {

            option_text = $(this).text();
            if (option_text.length > 20) {
                $(this).text(option_text.substring(0, 20) + "...");
            }
        });

    }


    let aside_list = $('.phpPage .twoColumn .mainCtn aside .dropdown-menu .box ul')
    let articles_h = $('.phpPage .twoColumn .mainCtn article .thingBox').height();
    let close_h = 440;
    //console.log(close_h)

    //add member aside more btn
    if ($('.phpPage .twoColumn .mainCtn article').length > 0 && $('.phpPage .twoColumn .mainCtn aside').length > 0) {

        let more_html = '<div class=\"moreBtn moreBtnB\"><a href=\"javascript:void(0)\" title=\"\"><div class=\"txt\"><i class=\"icon-icon-load-more\"></i>更多</div><div class=\"loader\"></div></a></div>'

        if ($(window).outerWidth() > 991 && $('.phpPage .twoColumn .mainCtn aside .dropdown-menu .box ul').height() > close_h) {

            aside_list.css('max-height', close_h);
            aside_list.css('overflow', 'hidden');
            aside_list.parent().append(more_html)

        }
        else {
            aside_list.css('max-height', 'none');
            aside_list.css('overflow', 'auto');
            aside_list.parent().find('.moreBtn').remove();
        }
    }

    //open/close member aside
    aside_list.parent().find('.moreBtn').on('click', function () {

        if (!aside_list.hasClass('open')) {

            aside_list.toggleClass('open');
            aside_list.css('max-height', articles_h);
            aside_list.css('overflow', 'auto');
            aside_list.parent().find('.moreBtn').find('.txt').html('<i class="icon-icon-load-more" style="transform:rotate(180deg);"></i>較少')
        }
        else {
            aside_list.scrollTop(0);
            aside_list.toggleClass('open');
            aside_list.css('max-height', close_h);
            aside_list.css('overflow', 'hidden');
            aside_list.parent().find('.moreBtn').find('.txt').html('<i class="icon-icon-load-more"></i>較多')
        }

    });

    //check input status once/.1s 
    setInterval(function () {

        updateTextFields();

    }, 100);


    //大版測攔固定
    if ($('body').hasClass('sideBar') === true & $('body').hasClass('store') === true) {

        var Sticky = new hcSticky('#rightAddToCart', {
            stickTo: '#storeBox',
            top: 40,
            responsive: {
                991: {
                    disable: true
                }
            },
        });

    }

    //course header height
    var header_h = $('body.course nav .navBox').outerHeight();
    if ($('body.course').length > 0) {
        // $('body.course').css('margin-top', header_h);
        $('body.course').css('min-height', 'calc(100vh - ' + header_h + 'px)');
    }

    //course header menu
    if ($('body.course .mobileMenuList').length > 0) {
        $('.mobileMenuList >li>a').click(function (event) {

            if ($(window).outerWidth() <= 991) {
                if ($(this).parent('li').hasClass('hasLv2')) {
                    event.preventDefault();

                    $(this).parents('li').toggleClass('open-lv2')
                    $(this).parents('li').siblings().removeClass('open-lv2')
                }
            }

        });
    }

    //course leftMenu modal
    if ($('body.course nav .leftMenu a[data-toggle="modal"]').length > 0) {
        $('body.course nav .leftMenu a[data-toggle="modal"]').on('click', function () {

            $('#courseContact').modal('toggle');

        });
    }



    //course banner slick

    if ($('body.course .bannerBox').length > 0) {
        $('.bannerBox').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            dots: true,
            autoplay: true,
            autoplaySpeed: 3000
        });


    }


    //course change banner page num
    if ($('body.course .bannerBox .banner-item').length > 0) {
        var banner_total = $('.courseBanner .banner-item').length
        if (banner_total > 9) {
            banner_total = banner_total
        }
        else {
            banner_total = '0' + banner_total;
        }
        $('.courseBanner .banner-count .total').text(banner_total);


        // On before slide change
        $('.bannerBox').on('beforeChange', function (event, slick, currentSlide, nextSlide) {

            var banner_active = parseFloat(nextSlide) + 1;

            if (banner_active > 9) {
                banner_active = banner_active
            }
            else {
                banner_active = '0' + banner_active;
            }

            $('.courseBanner .banner-count .active').text(banner_active);
            //console.log(banner_active);
        });
    }

    var offset = $(':target').offset();
    var nav_h = $('body.course nav .navBox').height();
    var scroll_Top = $('html, body').scrollTop();
    //course scroll
    if ($('body.course .scroll-fixed').length > 0) {
        var scroll = $('.scroll-fixed');



        scroll.find('a').on('click', function () {
            var scroll_h = $(window).height();
            nav_h = $('body.course nav .navBox').height();
            console.log(nav_h)

            $('html, body').animate({
                scrollTop: scroll_h - nav_h - 50
            }, 1000);
            return false;

        })

    }


    //錨點
    if ($('body.course .mainContainer a[href*=#]').length > 0 && $('body.course nav .navBox a[href*=#]').length > 0) {


        $('body.course .mainContainer a[href*=#]:not([href=#]):not(.btn-collapse-more):not(.nav-link)').on('click', function () {
            scroll_Top = $('html, body').scrollTop();
            var target = $(this.hash);


            if (scroll_Top == 0) {
                $('html, body').animate({
                    scrollTop: target.offset().top - nav_h - 50
                }, 1000);


                return false;
            }
            else {
                $('html, body').animate({
                    scrollTop: target.offset().top - 50
                }, 1000);


                return false;
            }



        });




        $('body.course nav .navBox a[href*=#]').on('click', function () {

            scroll_Top = $('html, body').scrollTop();
            var target = $(this.hash);
            var targrtStr = $(this).attr("href");



            if (scroll_Top == 0) {
                $('html, body').animate({
                    scrollTop: target.offset().top - nav_h - 50
                }, 1000);


                return false;
            }
            else {
                $('html, body').animate({
                    scrollTop: target.offset().top - 50
                }, 1000);


                return false;
            }

        });
    }


    if ($('body.course footer .topFooter .item .card-body a[href*=#]').length > 0) {
        $('body.course footer .topFooter .item .card-body a[href*=#]').on('click', function () {

            var target = $(this.hash);
            $('html, body').animate({
                scrollTop: target.offset().top - 50
            }, 1000);
            return false;

        });
    }

    //course mobile menu
    if ($('.myMenu .modal-body .mobileMenuList li a').length > 0) {

        $('.myMenu .modal-body .mobileMenuList li a[href*=#]').on('click', function () {
            if ($('#myMenu').hasClass('show')) {

                $('#myMenu').modal('toggle');
            }


            var target = $(this.hash);
            $('html, body').animate({
                scrollTop: target.offset().top - 50
            }, 1000);


            return false;

        });
    }



});

// Function to update labels of text fields
var updateTextFields = function () {
    var input_selector = '.input-item input';
    var input_selector_textarea = '.input-item textarea';
    $(input_selector).each(function (index, element) {
        var $this = $(this);

        if (element.value.length > 0 || $(element).is(':focus') || element.autofocus) {
            $this.siblings('label').addClass('active');
        } else if (element.validity) {
            $this.siblings('label').toggleClass('active', element.validity.badInput === true);
        } else {
            $this.siblings('label').removeClass('active');
        }
    });
};

