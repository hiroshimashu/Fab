var slideIndex = 1;
var slideIndex2 = 1;
var slideIndex3 = 1;
var isWhite = true;
var slider = document.getElementsByClassName('slide')[0];
var touchStartX;
var touchStartY;
var touchMoveX;
var touchMoveY;

showSlides(slideIndex);
showSlides2(slideIndex2);
showSlides3(slideIndex3);
displayThumbNail();

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function plusSlides2(n) {
    if(isWhite) {
        showSlides2(slideIndex2 += n);
    }else {
        showSlides2(slideIndex3 += n);
    }
}

function plusSlides3(n) {
    showSlides3(slideIndex3 += n);
}


// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function currentSlide2(n) {
    showSlides()
}



function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("a_dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

function showSlides2(n) {
    var i;
    var slides = document.getElementsByClassName("slide_img_white_1");
    var slides_black = document.getElementsByClassName("slide_img_black_1");
    if(isWhite) {
        if (n > slides.length) {
            slideIndex2 = 1
        }
        if (n < 1) {
            slideIndex2 = slides.length
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex2-1].style.display = "block";
    } else {
        if (n > slides_black.length) {
            slideIndex3 = 1
        }
        if (n < 1) {
            slideIndex3 = slides_black.length
        }
        for (i = 0; i < slides_black.length; i++) {
            slides_black[i].style.display = "none";
        }
        slides_black[slideIndex3-1].style.display = "block";
    }
}

function showSlides3(n) {
    var i;
    var slides = document.getElementsByClassName("slide_3");
    var dots = document.getElementsByClassName("a_dot2");
    if (n > slides.length) {slideIndex3 = 1}
    if (n < 1) {slideIndex3 = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex3-1].style.display = "block";
    dots[slideIndex3-1].className += " active";
}

function select_color_white() {
    var text_white = document.getElementsByClassName('white_text');
    var text_black = document.getElementsByClassName('black_text');
    var slides_black = document.getElementsByClassName('slide_img_black_1');
    text_white[0].style.display = "block";
    text_black[0].style.display = "none";
    isWhite = true;
    slides_black[slideIndex3-1].style.display = "none";
    showSlides2(slideIndex2);
}

function select_color_black() {
    var text_white = document.getElementsByClassName('white_text');
    var text_black = document.getElementsByClassName('black_text');
    var slides = document.getElementsByClassName('slide_img_white_1');
    text_white[0].style.display = "none";
    text_black[0].style.display = "block";
    isWhite = false;
    slides[slideIndex2-1].style.display = "none";
    showSlides2(slideIndex3);
}


if(window.innerWidth <= 480) {

    console.log("event has attached");

    slider.addEventListener("touchstart", function(event) {
        // 座標の取得
        touchStartX = event.touches[0].pageX;
        touchStartY = event.touches[0].pageY;
    }, false);

    // 移動時
    slider.addEventListener("touchmove", function(event) {
        // 座標の取得
        touchMoveX = event.changedTouches[0].pageX;
        touchMoveY = event.changedTouches[0].pageY;
    }, false);

    // 終了時
    slider.addEventListener("touchend", function(event) {
        // 移動量の判定
        var moveY = touchMoveY - touchStartY;
        if (touchStartX > touchMoveX) {
            if (touchStartX > (touchMoveX + 50)) {
                //右から左に指が移動した場合
                plusSlides(1);
            }
        } else if (touchStartX < touchMoveX) {
            if ((touchStartX + 50) < touchMoveX) {
                //左から右に指が移動した場合
                plusSlides(-1);
            }
        }
    }, false);

}

function displayThumbNail() {
    var voice = document.getElementsByClassName('allow-voice')[0];
    var mute = document.getElementsByClassName('disallow-voice')[0];
    var thumbNail = document.getElementsByClassName('thumb-nail')[0];
    var video = document.getElementsByClassName('key-visual-video')[0];

    video.addEventListener('ended', function() {
        thumbNail.style.display = 'block';
        video.style.display = 'none';
        voice.style.display = 'none';
        mute.style.display = 'none';
    })

    voice.addEventListener('click', allowVoice);
    mute.addEventListener('click', allowVoice);
}

function allowVoice() {
    var voice = document.getElementsByClassName('allow-voice')[0];
    var mute = document.getElementsByClassName('disallow-voice')[0];
    var video = document.getElementsByClassName('key-visual-video')[0];
    var muted = document.getElementsByClassName('key-visual-video')[0].muted;
    if(muted) {
        video.muted = false;
        voice.style.display = 'none';
        mute.style.display = 'block';
    }else {
        video.muted = true;
        voice.style.display = 'block';
        mute.style.display = 'none';
    }
    console.log(muted);
}





