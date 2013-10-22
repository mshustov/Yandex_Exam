define(["backbone","handlebars","underscore","lib/form2js","common", "templates"],
    function(Backbone,Handlebars,_,form2js,common,tmpl) {
        "use strict";
        return Backbone.View.extend({
            tagName: 'section',
            className: 'popup',
            template:tmpl['lectureEdit'],
            events:{
                "click .block_link_icon__close" :"onClose",
                "click .block_link_icon__save"  :"onSave",
                "keydown .block_edit_input"     :"onKeyDown",
                "focus .block_edit_input"       :"onFocus",
                "blur .block_edit_input"        :"onBlur"
            },
            initialize:function(attrs){
            },

            render: function() {
            },
            close:function () {
                $(this.el).unbind();
                $(this.el).empty();
            },
            onClose:function(){
                this.close();
                common.vent.trigger('hideModal');
                return false;
            },
            onKeyDown:function(e){
                //остановим всплытие событий при вводе в input, чтобы отменить переход
                if (e.keyCode === common.Key.BACKSPACE || e.keyCode === common.Key.ESCAPE ){
                    e.stopPropagation();
                }
            },
            onFocus:function(e){
                this.blockEdit = $(e.target).closest('.block_edit');
                this.blockEdit.addClass('block_edit__focused');
            },
            onBlur:function(e){
                this.blockEdit.removeClass('block_edit__focused');
                var newVal = $.trim( $(e.target).val() );
                $(e.target).val(newVal);
            },
            onSave:function(e){
                var formData = form2js('editLecture', '.', false);
                this.model.save(formData);
                return false
            },
            showFormError:function(errobj){
                var self = this;
                $.each(errobj.validationError,function(key,value){
                    self.$el.find("[name='" +key+"']")
                        .siblings('.block_edit_message').removeClass('hide').text(value)
                        .off()
                        .closest('.block_edit').addClass('block_edit__error')
                });
            }
        });
});
