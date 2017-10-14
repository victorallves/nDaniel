//nVampeta 
(function ($) {

    var self = $.nVampeta = new function () { };

    $.extend(self, {

        nVampetaBackgrounds: [
            'http://www.away.com.br/nvampeta/bg1.png'
        ],

        nVampetaImgs: [
            'https://i.imgur.com/meT1G7T.jpg',
            'https://i.imgur.com/scpspdR.jpg',
            'https://i.imgur.com/097JazL.jpg',
            'https://i.imgur.com/8CzMjuC.jpg',
            'https://i.imgur.com/wSDz4VJ.jpg',
            'https://i.imgur.com/B8tOwat.jpg',
            'https://i.imgur.com/TVmRwJ4.jpg',
            'https://i.imgur.com/CM1nPI8.jpg',
            'https://i.imgur.com/xhcfSst.jpg',
            'https://i.imgur.com/rangHmZ.jpg',
            'https://i.imgur.com/edVhcjS.jpg',
            'https://i.imgur.com/WdPhUqm.jpg',
            'https://i.imgur.com/n1BBZlf.jpg',
            'https://i.imgur.com/xIEoPac.jpg',
            'https://i.imgur.com/yy3DwnX.gif',
            'https://i.imgur.com/hd0BUJm.jpg',
            'https://i.imgur.com/HE4dSil.jpg',
            'https://i.imgur.com/A3JJUut.jpg',
            'https://i.imgur.com/i4XKBvD.jpg',
            'https://i.imgur.com/XveMAVe.jpg',
            'https://i.imgur.com/epuUjge.jpg',
            'https://i.imgur.com/IT1VLti.jpg',
            'https://i.imgur.com/l412AZq.jpg',
            'https://i.imgur.com/sPdWGaK.jpg',
            'https://i.imgur.com/PQ3bg1q.jpg',
            'https://i.imgur.com/DeQ0qo3.jpg',
            'https://i.imgur.com/wFi3HXs.jpg',
            'https://i.imgur.com/PCm1v57.jpg',
            'https://i.imgur.com/Oxs2AHZ.jpg',
            'https://i.imgur.com/SKKwYtQ.jpg',
            'https://i.imgur.com/rfSvENU.jpg',
            'https://i.imgur.com/qguMH00.jpg',
            'https://i.imgur.com/4Jh46kV.jpg'
        ],

        handleImages: function (lstImgs, time) {
            $.each($('img'), function (i, item) {
                //Skip if image is already replaced
                if ($.inArray($(item).attr('src'), lstImgs) == -1) {
                    var h = $(item).height();
                    var w = $(item).width();

                    //If image loaded
                    if (h > 0 && w > 0) {
                        //Replace
                        $(item).css('width', w + 'px').css('height', h + 'px');
                        $(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]);
                    }
                    else {
                        //Replace when loaded
                        $(item).load(function () {
                            //Prevent 'infinite' loop
                            if ($.inArray($(item).attr('src'), lstImgs) == -1) {
                                var h = $(item).height();
                                var w = $(item).width();
                                $(item).css('width', w + 'px').css('height', h + 'px');
                                $(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]);
                            }
                        });
                    }
                }
            });

            //Keep replacing
            if (time > 0) {
                setTimeout(function () { self.handleImages(lstImgs, time); }, time);
            }
        },

        handleLogo: function (bgImgs, time) {
            $backgroundImages = $(
                '[class*=logo], [class*=header], [id*=header], [id*=logo],' +
                '[class*=logo] span, [class*=header] span, [id*=header] span, [id*=logo] span,' +
                '[class*=logo] h1, [class*=header] h1, [id*=header] h1, [id*=logo] h1,' +
                '[class*=logo] a, [class*=header] a, [id*=header] a, [id*=logo] a'
            )
                .filter(function () {
                    backgroundImg = $(this).css('background-image');
                    return backgroundImg && backgroundImg != 'none';
                }
                );

            $backgroundImages.each(function (i, item) {
                $(item).css('background-image', 'url(' + bgImgs[Math.floor(Math.random() * bgImgs.length)] + ')');
                $(item).css('background-position', '0 0');
                $(item).css('background-repeat', 'no-repeat');
                $(item).css('background-size', 'contain');
            });
        }
    });

    //Run on jQuery ready
    $(function () {
        self.handleImages(self.nVampetaImgs, 3000);
        self.handleLogo(self.nVampetaBackgrounds, 3000);
    });
})(jQuery);
