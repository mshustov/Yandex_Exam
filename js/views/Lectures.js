define(["jquery","backbone","views/Lecture"],
    function($,Backbone,LectureView) {
        "use strict";
        return Backbone.View.extend({
            tagName:'section',
            className:'content',

            initialize:function(attrs){
                this.collection.on('add',this.addOne,this);
                this.collection.on('lectures:filerData', this.render,this);
                this.lectors = attrs.lectors;
            },

            render:function(data){
                //рендерится только определенная роль (lectures)
                var rendData = data || this.collection.models,
                    fragment = document.createDocumentFragment(),
                    self=this;
                $.each(rendData,function(index,value){
                    if (value.get('role')===self.role){
                        var oneLectureView = new LectureView({
                            model:value,
                            lectors:self.lectors
                        })
                        fragment.appendChild(oneLectureView.render().el);
                    }
                });
                this.$el.html(fragment);
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
