$(document).ready(function () {

// ==========================================================================
// Initialization
// ==========================================================================

// ==========================================================================
// Sticky nav & control-panel
// ==========================================================================
    if ($('.docs-nav').length) {
        var stickyMenu = $('.docs-nav'),
            stickyControl = $('.docs-control-panel'),
            stickyOffset = stickyControl.offset().top;

        sticky();
        $(window).scroll(sticky);

        function sticky() {
            if ($(this).scrollTop() > stickyOffset) {

                $(stickyMenu).addClass("docs-nav_fixed");
                $(stickyControl).addClass("docs-control-panel_fixed");

            } else {

                $(stickyMenu).removeClass("docs-nav_fixed");
                $(stickyControl).removeClass("docs-control-panel_fixed");

            }
        }

        // ==========================================================================
// Components navigation
// ==========================================================================

        var stickyMenuLinks = stickyMenu.find('a'); //все ссылки в меню
        var anchorElements = []; //все элементы с якорями

        for (var i = 0; i < stickyMenuLinks.length; i++) {
            var child = stickyMenuLinks[i];
            var ahref = $(child).attr('href');
            anchorElements.push(ahref);
        }

        // Присваивание активного класса ссылке при прокручивании
        $(window).scroll(function () {
            var windowScrollTop = $(window).scrollTop();
            for (var i = 0; i < anchorElements.length; i++) {
                var elem = anchorElements[i];
                var elemPos = $(elem).offset().top;
                var elemHeight = $(elem).height();
                if (windowScrollTop >= elemPos - 80 && windowScrollTop < (elemPos - 80 + elemHeight)) {
                    $(".main__sidebar a[href='" + elem + "']").addClass("active");
                } else {
                    $(".main__sidebar a[href='" + elem + "']").removeClass("active");
                }
            }
        });

        // Прокручивание кликом по ссылке
        stickyMenuLinks.on('click', function (e) {
            e.preventDefault();
            var distanceTopToSection = $($(this).attr('href')).offset().top - 79;
            $('body, html').animate({scrollTop: distanceTopToSection}, 'slow');
        });

        stickyMenuLinks.on('mousedown', function (e) {
            return false;
        });

// ==========================================================================
// Progress bar demo
// ==========================================================================

        var run = function () {
            var obj = document.getElementById('progressTest');
            if (obj.getAttribute("data-value") < 100) {
                obj.setAttribute("data-value", parseInt(obj.getAttribute("data-value")) + 5);
                obj.setAttribute('aria-valuenow', obj.getAttribute("data-value"));
                obj.style.width = obj.getAttribute("data-value") + "%";
                obj.children[0].innerHTML = obj.style.width;
            }
        };

        $('#progressTestBtn').on('click', function () {
            run();
        });
    }
});

