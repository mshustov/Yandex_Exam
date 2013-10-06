define(["backbone","handlebars","underscore","common"],
    function(Backbone,Handlebars,_,common) {
        "use strict";
        return Backbone.View.extend({
            tagName: 'section',
            className: 'person_container',
            template: Handlebars.compile( $('#personShort').html() ),
            _timer:null,
            events:{
                "click .person_info_control__read"  :"readInfo",
                "click .person_info_control__edit"  :"editInfo",
                "click .person_info_control__delete":"deleteInfo",
                //"click person_info__close"          :"hideInfo",
                "click .person_photo__full"         :"toggleShow",
                "mouseenter .person"                :"onMouseenter",
                "mouseleave .person"                :"onMouseleave"

            },
            initialize:function(){
                this.model.on('destroy',this.unrender,this);
                this.model.on('change',this.render,this);
            },
            render: function() {
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
            readInfo:function(){
                //TODO переделать на полуение ссылки из href
                Backbone.history.navigate('#read/'+this.model.get('id')+'/',true);
                    return false;
            },
            editInfo:function(){
            },
            deleteInfo:function(){
                console.log('delete');
            },
            showInfo:function(e){
                $(e.currentTarget).addClass('person_detailed');
                //console.log(e.currentTarget);
                //this.$el.find('.person').addClass('person_detailed');
                //this.el.scrollIntoView();
                this._timer=null;
            },
            hideInfo:function(e){
                if (this._timer){
                    clearInterval(this._timer);
                    this._timer=null
                }
                $(e.currentTarget).removeClass('person_detailed');
                //this.$el.find('.person').removeClass('person_detailed');
            },
            toggleShow:function(e){
                this.$el.find('.person').toggleClass('person_detailed');
            },
            onMouseenter:function(e){
                this._timer = setTimeout(
                    _.bind(this.showInfo,this,e)
                ,800);
            },
            onMouseleave:function(e){
               this.hideInfo(e);
            }

        });
});
