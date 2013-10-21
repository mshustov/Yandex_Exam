define(["views/editView","templates"],
    function(EditView,tmpl) {
        "use strict";
        return EditView.extend({
            template:tmpl['personEdit'],
            initialize:function(attrs){
                this.model.on('destroy',this.onClose,this);
                this.model.on('sync',this.render,this);
                this.model.on('invalid',this.showFormError,this);
                //запишем какую роль (students, lectors и т.д.) класса Person надо отобразить
                this.role = { role : attrs.role };
            },
            render: function() {
                var renderData = this.template($.extend({},this.model.toJSON(),this.role));
                this.$el.html(renderData);
                return this;
            },
            onSave:function(e){
                var formData = form2js('personEdit', '.', false);
                this.model.save(formData);
                return false
            }
        });
});
