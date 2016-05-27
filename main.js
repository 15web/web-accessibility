$(document).ready(function () {
    var panel1 = new accessibility.tabpanel("tabpanel1", false); //табы
    var hs1 = new accessibility.hideShow('idForScript'); //кнопка скрыть показать
    var hs2 = new accessibility.hideShow('showInputs');


    // прилипающее меню
    var stickyMenu = $('.main__sidebar nav');
    var stickyControl = $('.control-panel');
    var stickyOffset = stickyControl.offset().top;
    function sticky() {
        if ($(this).scrollTop() > stickyOffset) {
            $(stickyMenu).addClass("fixed");
            $(stickyControl).addClass("fixed");
            $('.main').css({'padding': '95px 0px 40px'})
        }
        else {
            $(stickyMenu).removeClass("fixed");
            $(stickyControl).removeClass("fixed");
            $('.main').css({'padding': '40px 0px'})
        }
    }
    sticky();
    $(window).scroll(sticky);


    //навигация по компонентам
    var stickyMenuLinks = stickyMenu.find('a'); //все ссылки в меню

    var anchorElements= []; //все элементы с якорями
    for (var i=0; i < stickyMenuLinks.length; i++) {
        var child = stickyMenuLinks[i];
        var ahref = $(child).attr('href');
        anchorElements.push(ahref);
    }
    // Присваивание активного класса ссылке при прокручивании
    $(window).scroll( function() {
        var windowScrollTop = $(window).scrollTop();
        for (var i=0; i < anchorElements.length; i++) {
            var elem = anchorElements[i];
            var elemPos = $(elem).offset().top;
            var elemHeight = $(elem).height();
            if (windowScrollTop >= elemPos - 80 && windowScrollTop < (elemPos -80 + elemHeight) ) {
                $(".main__sidebar a[href='" + elem + "']").addClass("active");
            } else {
                $(".main__sidebar a[href='" + elem + "']").removeClass("active");
            }
        }
    });

    // Прокручивание кликом по ссылке
    stickyMenuLinks.click(function (e) {
        e.preventDefault();
        stickyMenuLinks.removeClass('active');
        $(this).addClass('active');
        var distanceTopToSection = $($(this).attr('href')).offset().top - 70;
        $('body, html').animate({scrollTop: distanceTopToSection}, 'slow');
    });




    //Test Progressbar
    var run = function() {
        var obj = document.getElementById('progressTest');
        if (obj.getAttribute("data-value") < 100) {
            obj.setAttribute("data-value", parseInt(obj.getAttribute("data-value")) + 5);
            obj.setAttribute('aria-valuenow', obj.getAttribute("data-value"));
            obj.style.width = obj.getAttribute("data-value") + "%";
            obj.children[0].innerHTML = obj.style.width;
        }
    };
    $('#progressTestBtn').on('click', function() {
        run();
    });
});
