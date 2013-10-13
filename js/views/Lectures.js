define('views/Lectures',["jquery","backbone","views/Lecture"],
    function($,Backbone,LectureView) {
        "use strict";
        return Backbone.View.extend({
            tagName:'section',
            className:'content',

            initialize:function(attrs){
                this.collection.on('sync',this.addOne,this);
                this.lectors = attrs.lectors;
            },

            render:function(){
                var fragment = document.createDocumentFragment();
                this.collection.each(function(lecture){
                    var oneLectureView = new LectureView({
                        model:lecture,
                        lectors:this.lectors
                    })
                    fragment.appendChild(oneLectureView.render().el);
                },this);

                this.$el.append(fragment);
                return this
            },

            addOne:function(lecture){
                var oneLectureView = new LectureView({
                    model:lecture,
                    lectors:this.lectors
                });
                this.$el.append(oneLectureView.render().el);
            }
        });
});
