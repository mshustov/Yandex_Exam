define('views/PersonDetailed',["backbone","handlebars","underscore","common","templates"],
    function(Backbone,Handlebars,_,common,tmpl) {
        "use strict";
        return Backbone.View.extend({
            tagName: 'section',
            className: 'popup',
            template:tmpl['personDetailed.hbs'],
            events:{
                "click .block_link_icon__edit"  :"onEdit",
                "click .block_link_icon__delete":"onDelete",
                "click .block_link_icon__close" :"onClose"
            },
            initialize:function(){
                this.model.on('destroy',this.onClose,this);
                this.model.on('change',this.render,this);
            },
            render: function() {
                this.$el.html( this.template( this.model.toJSON() ));
                return this;
            },
            close:function () {
                $(this.el).unbind();
                $(this.el).empty();
            },
            onEdit:function(e){
                common.navigate(e.currentTarget.getAttribute('href'));
                return false
            },
            onDelete:function(){
                this.model.destroy();
                return false;
            },
            onClose:function(){
                this.close();
                common.hideModal();
                return false;
            }
        });
});
