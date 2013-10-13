define('views/PersonShort',["backbone","jquery","handlebars","underscore","common","templates"],
    function(Backbone,$,Handlebars,_,common,tmpl) {
        "use strict";
        return Backbone.View.extend({
            tagName: 'section',
            className: 'block_wrapper',
            template: tmpl['personShort'],
            _timer:null,
            events:{
                "click .block_link_text__read"  :"onLink",
                "click .block_photo__link"      :"onLink",
                "mouseenter .block_short"       :"onMouseenter",
                "mouseleave .block_short"       :"onMouseleave"
            },
            initialize:function(){
                this.model.on('destroy',this.unrender,this);
                this.model.on('sync',this.render,this);
            },
            render: function() {
                // TODO проверка заливки фото - по окончании замена на дефаулт
                this.$el.html( this.template( this.model.toJSON() ));
                return this;
            },
            unrender: function(){
                this.remove();
            },
            close:function () {
                $(this.el).unbind();
                $(this.el).empty();
            },
            onLink:function(e){
               // common.navigate(e.currentTarget.getAttribute('href'));
               // return false
            },
            onMouseenter:function(e){
                this.$el.find('.block_photo__link').addClass('block_link_move');
                this.$el.find('.block_info__short').addClass('block_info_move');
            },
            onMouseleave:function(e){
                this.$el.find('.block_photo__link').removeClass('block_link_move');
                this.$el.find('.block_info__short').removeClass('block_info_move');
            }
        });
});
