var MODEL = (function(){


    var _getView = function(viewName){
        $.get(`views/pages/${viewName}.html`, function(data){
            $("#content").html(data);
        });

        $.get(`views/vids/${viewName}.html`, function(data){
            $("#vid").html(data);
        });
    };


    return {
        getView: _getView,
    }
})();