define(["backbone","handlebars","underscore","common"],
    function(Backbone,Handlebars,_,common) {
        "use strict";
        return Backbone.View.extend({
            tagName: 'section',
            className: 'popup',
            template: Handlebars.compile( $('#personTemplate').html() ),
            events:{
                "click .person_info_control__edit"  :"onEdit",
                "click .person_info_control__delete":"onDelete",
                "click .person_info_control__close" :"onClose",
                "keydown .person_edit_input"        :"onKeyDown",
                "focus .person_edit_input"          :"onFocus",
                "blur .person_edit_input"           :"onBlur"
            },
            initialize:function(){
                this.model.on('destroy',this.onClose,this);
                this.model.on('change',this.render,this);
            },
            render: function() {
                // TODO проверка заливки фото - по окончании замена на дефаулт
                this.$el.html( this.template( this.model.toJSON() ));
                return this;
            },
            close:function () {
                $(this.el).unbind();
                $(this.el).empty();
            },
            onEdit:function(){
                this.$el.find('.person_readable').addClass('hide');
                this.$el.find('.person_editable').removeClass('hide');
                return false;
            },
            onDelete:function(){
                //метод что удаляется модель и синхронизирует удаление с сервером
                this.model.destroy();
                //TODO убрать сделать удаление по
                this.onClose();
                return false;
            },

            onClose:function(e){
                //TODO нужны???????
                this.unbind();
                this.remove();
                //this.el.empty();
                common.vent.trigger('hideModal',e);
                return false;
            },
            onKeyDown:function(e){
                //TODO стоит ли убирать ESC???
                //TODO или вынести на глобальный уровень проверку для всех полей input, но это затратнее при всплытии
                if (e.keyCode === common.Key.BACKSPACE || e.keyCode === common.Key.ESCAPE ){
                    event.stopPropagation();
                }
            },
            onFocus:function(e){
                $(e.target).closest('.person_edit').addClass('person_edit__focused')
            },
            onBlur:function(e){
                $(e.target).closest('.person_edit').removeClass('person_edit__focused')
            }
        });
});
