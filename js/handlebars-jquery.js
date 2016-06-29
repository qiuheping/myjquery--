/**
 * Created by Administrator on 2016/6/7.
 */
(function($){ //12-2µÄ´úÂë
    var compiled={};
    $.fn.template=function(data){
        var template= $.trim($(this).first().html());
        if(compiled[template]==undefined){
            compiled[template]=Handlebars.compile(template);
        }
        return $(compiled[template](data));
    }
})(jQuery);
