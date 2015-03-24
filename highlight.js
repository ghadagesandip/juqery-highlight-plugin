(function($){

    $.fn.highlight = function(option){

        var setting = $.extend({
            color : "red",
            background : "pink"
        },option);

        return this.css(setting)
    }

    $.fn.showLink = function(option){
        this.filter("a").each(function(){
            var link = $(this);
            link.append("("+link.attr('href')+")");
        });
        return this;
    }


    $.fn.changeShpe = function(option){

        var defaultsettings = {
            'width' :'100px',
            'height':'100px',
            'border-radius':'25%'
        }

        var selector = this.selector;
        var settings = $.extend({},defaultsettings,option);
        this.each(function(){
            $(this).addClass("roundcolor");
            $(this).css(settings)
        });

        return this;



    }
}(jQuery));