define(["backbone","handlebars","underscore","lib/form2js","common","templates"],
    function(Backbone,Handlebars,_,form2js,common,tmpl) {
        "use strict";
        return Backbone.View.extend({
            tagName: 'section',
            className: 'popup',
            template:tmpl['personEdit.hbs'],
            events:{
                "click .person_info_control__close" :"onClose",
                "click .person_info_control__save"  :"onSave",
                "keydown .person_edit_input"        :"onKeyDown",
                "focus .person_edit_input"          :"onFocus",
                "blur .person_edit_input"           :"onBlur"
            },
            initialize:function(){

                var self = this;
                this.model.on('destroy',this.onClose,this);
                this.model.on('change',this.render,this);
                this.model.on('invalid',function(err){
                    $.each(err.validationError,function(key,value){
                        self.$el.find("[name='" +key+"']")
                            .siblings('.person_edit_message').removeClass('person_edit_message__hide').text(value)
                            .off()
                            .closest('.person_edit').addClass('person_edit__error')
                    });
                });
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
            onClose:function(e){
                //TODO нужны???????
                this.close();
                common.vent.trigger('hideModal',e);
                return false;
            },
            onKeyDown:function(e){
                //TODO стоит ли убирать ESC???
                //TODO или вынести на глобальный уровень проверку для всех полей input, но это затратнее при всплытии
                if (e.keyCode === common.Key.BACKSPACE || e.keyCode === common.Key.ESCAPE ){
                    e.stopPropagation();
                }
            },
            onFocus:function(e){
                $(e.target).closest('.person_edit').addClass('person_edit__focused');
            },
            onBlur:function(e){
                $(e.target).closest('.person_edit').removeClass('person_edit__focused');
                var newVal = $.trim( $(e.target).val() );
                $(e.target).val(newVal);
            },
            onSave:function(e){
                var formData = form2js('editForm', '.', false);
                this.model.save(formData);
                return false
            }
        });
});
