define(["backbone","jquery","handlebars","underscore","common","templates"],
    function(Backbone,$,Handlebars,_,common,tmpl) {
        "use strict";
        return Backbone.View.extend({
            tagName: 'section',
            className: 'block_wrapper',
            template: tmpl['lecture'],
            _timer:null,
            events:{
                "click .block_link_icon__edit"  :"editInfo",
                "click .block_link_icon__delete":"deleteInfo",
                "mouseenter .block"             :"onMouseenter",
                "mouseleave .block"             :"onMouseleave"

            },
            initialize:function(attrs){
                this.model.on('destroy',this.unrender,this);
                this.model.on('sync',this.render,this);

                this.lectors = attrs.lectors;
            },
            render: function() {
                //по id получаем данные о лекторе из переданного массива lectors
                var id = this.model.get('lector');
                var renderData = this.template($.extend({},this.model.toJSON(),this.lectors[id]));

                this.$el.html( renderData);
                return this;
            },
            unrender: function(){
                this.remove();
            },
            close:function () {
                $(this.el).unbind();
                $(this.el).empty();
            },
            deleteInfo:function(){
                this.model.destroy();
                this.close();
                return false
            }
        });
});
