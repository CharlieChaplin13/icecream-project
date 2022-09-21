$("#slideshow > div:gt(0)").hide();
        setInterval(function() {
            $('#slideshow > div:first')
                .fadeOut(500) // скорость исчезания блока
                .next()
                .fadeIn(1000) // скорость появления блока
                .end()
                .appendTo('#slideshow');
        }, 3000); // скорость смены блоков