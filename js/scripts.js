$(document).ready(function () {
    /*Старые браузеры*/
    var yaBrowserUpdater = new ya.browserUpdater.init({
        "lang": "ru",
        "browsers": {
            "yabrowser": "15.10",
            "chrome": "52",
            "ie": "10",
            "opera": "40",
            "safari": "8",
            "fx": "47",
            "iron": "35",
            "flock": "Infinity",
            "palemoon": "25",
            "camino": "Infinity",
            "maxthon": "4.5",
            "seamonkey": "2.3",
            "theme": "blue"
        }
    });
    /* Работа формы */
    $(function () {
        $("body").on("submit", ".form_newsletter", function (e) {
            var message = "Укажите значения всех обязательных для заполнения полей!";
            var ret = 0;
            var emVal = $(".mail", this).val();
            var pVal = $(".phone", this).val();
            if ($(".mail", this).val().length < 1) {
                $(".mail", this).css("border-color", "red");
                ret = 1;
            }
            if (ret == 1) {
                alert(message);
                return false;
            }
            $(".email-block", this).addClass("hide");
            $(".phone-block", this).removeClass("hide");
            $(".infront", this).addClass("hide");
            $(".infront_submit", this).addClass("hide");
            $(".infront_submit", this).html("Зарегистрирован Ваш e-mail: " + emVal + " Бонус уже у Вас на почте").removeClass("hide");
            $(".span_phone", this).html("Введите свой номер телефона и мы напомним вам о начале интенсива").removeClass("hide");
            /* $(this).attr("onsubmit", "return true;"); */
            if (pVal) {
                window.open("https://mastervision.su/awareness/bonus.html");
                $('.span_phone', this).html('Ваш номер ' + pVal + ' зарегистрирован!');
            }
        });
        $(".phone-block input", this).keydown(function (e) {
            if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190, 107, 187]) !== -1 || (e.keyCode == 65 && (e.ctrlKey === true || e.metaKey === true)) || (e.keyCode >= 35 && e.keyCode <= 40)) {
                return;
            }
            if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                e.preventDefault();
            }
        });
    });
        /*Карусель отзывов*/
        $("#text_responses").owlCarousel({
            navigation: true,
            navigationText: ['←', '→'],
            slideSpeed: 300,
            goToFirst: true,
            goToFirstSpeed: 100,
            pagination: false,
            items: 1,
            itemsDesktop: false,
            itemsDesktopSmall: false,
            itemsTablet: false,
            itemsMobile: false
        });
        /* Галерея сертификатов */
        $(function () {
            $("[data-fancybox]").fancybox({
                speed: 330,
                opacity: 'auto',
                closeBtn: true
            });
        });

    /*Конец документа*/
});