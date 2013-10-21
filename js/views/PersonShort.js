define(["backbone","jquery","handlebars","underscore","common","templates"],
    function(Backbone,$,Handlebars,_,common,tmpl) {
        "use strict";
        return Backbone.View.extend({
            tagName: 'section',
            className: 'block_wrapper',
            template: tmpl['personShort'],
            _timer:null,
            events:{
                "mouseenter .block_short"       :"onMouseenter",
                "mouseleave .block_short"       :"onMouseleave"
            },
            initialize:function(){
                this.model.on('destroy',this.unrender,this);
                this.model.on('sync',this.render,this);
                $('.block_short',this.$el).on('mouseenter',this.onMouseenter);
                $('.block_short',this.$el).on('mouseleave',this.onMouseleave)
            },
            render: function() {
                this.delegateEvents();

                this.$el.html( this.template( this.model.toJSON() ));
                this.delegateEvents();
                return this;
            },
            unrender: function(){
                this.remove();
            },
            close:function () {
                $(this.el).unbind();
                $(this.el).empty();
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
