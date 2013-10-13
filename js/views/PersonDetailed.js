define(["backbone","handlebars","underscore","common","templates"],
    function(Backbone,Handlebars,_,common,tmpl) {
        "use strict";
        return Backbone.View.extend({
            tagName: 'section',
            className: 'popup',
            template:tmpl['personDetailed'],
            events:{
                "click .block_link_icon__edit"  :"onEdit",
                "click .block_link_icon__delete":"onDelete",
                "click .block_link_icon__close" :"onClose"
            },
            initialize:function(){
                //сервер удалил модель
                this.model.on('destroy',this.onClose,this);
                //сервер сохранил модель
                this.model.on('sync',this.render,this);
            },
            render: function() {
                this.$el.html( this.template( this.model.toJSON() ));
                return this;
            },
            close:function () {
                $(this.el).unbind();
                $(this.el).empty();
            },
            onDelete:function(){
                this.model.destroy();
                return false;
            },
            onClose:function(){
                this.close();
                common.vent.trigger('hideModal');
                return false;
            }
        });
});
