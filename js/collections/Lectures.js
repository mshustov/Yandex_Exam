define(["backbone","models/Lecture","backbone.localStorage"],
    function(Backbone,LectureModel) {
        "use strict";
        return Backbone.Collection.extend({
            model: LectureModel,
            localStorage: new Backbone.LocalStorage('lectures'),
            initialize:function(){
                console.log('collection lectures INIT!!!')
            }
        });
});

