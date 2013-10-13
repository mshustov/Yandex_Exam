define('views/editPerson',["backbone","handlebars","underscore","lib/form2js","common","templates"],
    function(Backbone,Handlebars,_,form2js,common,tmpl) {
        "use strict";
        return Backbone.View.extend({
            tagName: 'section',
            className: 'popup',
            template:tmpl['personEdit'],
            events:{
                "click .block_link_icon__close"     :"onClose",
                "click .block_link_icon__save"      :"onSave",
                "keydown .block_edit_input"         :"onKeyDown",
                "focus .block_edit_input"           :"onFocus",
                "blur .block_edit_input"            :"onBlur"
            },
            initialize:function(attrs){
                this.model.on('destroy',this.onClose,this);
                this.model.on('sync',this.render,this);
                this.model.on('invalid',common.showFormError,this);

                this.role = { role : attrs.role };
            },
            render: function() {
                var renderData = this.template($.extend({},this.model.toJSON(),this.role));
                this.$el.html(renderData);
                return this;
            },
            close:function () {
                $(this.el).unbind();
                $(this.el).empty();
            },
            onClose:function(){
                this.close();
                common.hideModal();
                return false;
            },
            onKeyDown:function(e){
                if (e.keyCode === common.Key.BACKSPACE || e.keyCode === common.Key.ESCAPE ){
                    e.stopPropagation();
                }
            },
            onFocus:function(e){
                $(e.target).closest('.block_edit').addClass('block_edit__focused');
            },
            onBlur:function(e){
                $(e.target).closest('.block_edit').removeClass('block_edit__focused');
                var newVal = $.trim( $(e.target).val() );
                $(e.target).val(newVal);
            },
            onSave:function(e){
                var formData = form2js('editPerson', '.', false);
                this.model.save(formData);
                return false
            }
        });
});
