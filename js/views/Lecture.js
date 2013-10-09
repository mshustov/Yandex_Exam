define(["backbone","jquery","handlebars","underscore","common","templates"],
    function(Backbone,$,Handlebars,_,common,tmpl) {
        "use strict";
        return Backbone.View.extend({
            tagName: 'section',
            className: 'day',
            template: Handlebars.compile($('#day').html()),
            _timer:null,
            events:{
                "click .person_info_control__read"  :"readInfo",
                "click .person_info_control__edit"  :"editInfo",
                "click .person_info_control__delete":"deleteInfo",
                "click .person_photo__full"         :"toggleShow",
                "mouseenter .person"                :"onMouseenter",
                "mouseleave .person"                :"onMouseleave"

            },
            initialize:function(){
                this.model.on('destroy',this.unrender,this);
                this.model.on('change',this.render,this);
            },
            render: function() {
                console.log('template =', Handlebars.templates)
                // TODO проверка заливки фото - по окончании замена на дефаулт
                this.$el.html( this.template( this.model.toJSON() ));
                return this;
            },
            unrender: function(){
                this.remove();//this.el.remove()
            },
            close:function () {
                $(this.el).unbind();
                $(this.el).empty();
            },
            readInfo:function(e){
                var href = e.currentTarget.getAttribute('href');
                //TODO make Event
                Backbone.history.navigate(href,true);
                return false;
            },
            editInfo:function(e){
                //TODO make Event
                var href = e.currentTarget.getAttribute('href');
                Backbone.history.navigate(href,true);
                return false
            },
            deleteInfo:function(){
                console.log('delete');
            }

        });
});
