define(["views/editView","templates"],
    function(EditView,tmpl) {
        "use strict";
        return EditView.extend({
            template:tmpl['lectureEdit'],
            initialize:function(attrs){
                this.model.on('destroy',this.onClose,this);
                this.model.on('sync',this.render,this);
                this.model.on('invalid',this.showFormError,this);

                this.lectors =attrs.lectors;
            },
            render: function() {
                //по id получаем данные о лекторе из переданного массива lectors
                var id = this.model.get('lector');
                var renderData = this.template($.extend({},this.model.toJSON(),this.lectors[id],{lectors:this.lectors}));
                this.$el.html(renderData);
                this.$el.find('select[name="lector"]').val(id);
                return this;
            }
        });
});
