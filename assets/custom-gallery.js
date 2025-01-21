$(document).ready(function(event) {
    let thumbSwiper = new Swiper('.js-product-thumbanails', {
        spaceBetween: 10,
        slidesPerView: 6,
        freeMode: true,
        watchSlidesProgress: true,
        direction: 'horizontal',
        navigation: {
            nextEl: '.thumbs-swiper-button-next',
            prevEl: '.thumbs-swiper-button-prev',
        },
    });

    let slideOptions = {
        direction: 'horizontal',
        loop: false,
        spaceBetween: 10,
        slidesPerView: 1,
        watchSlidesProgress: true,
        navigation: {
            nextEl: '.main-swiper-button-next',
            prevEl: '.main-swiper-button-prev',
        },
        thumbs: {
            swiper: thumbSwiper,
        }
    }

    const swiper = new Swiper('.js-main-image-container', slideOptions);
    $(document).on('shopify:section:load', () => {
    });

    $('.product-thumbanails').show();

    $('body').on('click', '.js-gallery-video-button', function(e) {
        let videoType = $(this).data('video-type');
        let $videoContainer = $(this).closest('.js-product-gallery__wrapper').find('.js-videos-modal');
        let $videoTest = $(this).closest('.js-product-gallery__wrapper').find('.js-video-modal__test');
        let $videoProduct = $(this).closest('.js-product-gallery__wrapper').find('.js-video-modal__video');
        
        $videoContainer.removeClass('hidden');
        $videoContainer.find('video').get(0).play();

        if (videoType == 'Test') {
            $videoTest.show();
            $videoProduct.hide();
        } else {
            $videoTest.hide();
            $videoProduct.show();
        }
    });
   
    $('body').on('click', '.js-close-modal', function(e) {
        $(this).closest('.js-product-gallery__wrapper').find('.js-videos-modal').addClass('hidden');
    });
});