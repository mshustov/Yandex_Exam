define('views/Lecture',["backbone","jquery","handlebars","underscore","common","templates"],
    function(Backbone,$,Handlebars,_,common,tmpl) {
        "use strict";
        return Backbone.View.extend({
            tagName: 'section',
            className: 'block_wrapper',
            template: tmpl['lecture.hbs'],
            _timer:null,
            events:{
                "click .block_link_icon__edit"  :"editInfo",
                "click .block_link_icon__delete":"deleteInfo",
                "mouseenter .block"             :"onMouseenter",
                "mouseleave .block"             :"onMouseleave"

            },
            initialize:function(attrs){
                this.model.on('destroy',this.unrender,this);
                this.model.on('change',this.render,this);

                this.lectors = attrs.lectors;

                console.log('lecture view INIT!!!')
            },
            render: function() {
                var id = this.model.get('lector');
                var renderData = this.template($.extend({},this.model.toJSON(),this.lectors[id]));

                this.$el.html( renderData);
                return this;
            },
            close:function () {
                $(this.el).unbind();
                $(this.el).empty();
            },
            editInfo:function(e){
                common.navigate(e.currentTarget.getAttribute('href'));
                return false
            },
            deleteInfo:function(){
                this.model.destroy();
                this.close();
                return false
            }
        });
});
