define(["backbone","handlebars","common"],
    function(Backbone,Handlebars,common) {
        return Backbone.View.extend({
            tagName: 'section',
            className: 'person',
            template: Handlebars.compile( $('#personShort').html() ),
            events:{
                "click .person_info_control__read"  :"readInfo",
                "click .person_info_control__edit"  :"editInfo",
                "click .person_info_control__delete":"deleteInfo"
                //"mouseenter .person_photo__full":"showInfo",
                //"mouseleave .person_photo__full":"hideInfo"

            },
            initialize:function(){
                this.model.on('destroy',this.unrender,this);
                this.model.on('change',this.render,this);

                //обработчики событий на элементы
                this.$el.on('mouseenter','.person_photo__full',function(){
                    $(this).addClass('ss1488');
                });
                this.$el.on('mouseleave','.person_photo__full',function(){
                    $(this).removeClass('ss1488');
                });
            },
            render: function() {
                // TODO проверка заливки фото - по окончании замена на дефаулт
                this.$el.html( this.template( this.model.toJSON() ));
                return this;
            },
            unrender: function(){
                this.remove();//this.el.remove()
            },
            readInfo:function(){
                common.vent.trigger('person:read',this.model,this.$el.offset());
            },
            editInfo:function(){
                common.vent.trigger('person:edit',this.model,this.$el.offset());
            },
            deleteInfo:function(){
                console.log('delete');
            },
            showInfo:function(){
                this.$el.find('.person_photo__full').addClass('ss1499');
            },
            hideInfo:function(){
                this.$el.find('.person_photo__full').removeClass('ss1499');
            }

        });
});
