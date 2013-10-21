define(["backbone","views/PersonShort"],
    function(Backbone,PersonView) {
        "use strict";
        return Backbone.View.extend({
            tagName:'section',
            className:'content',
            cache:{},

            initialize:function(attrs){
                this.collection.on('add',this.addOne,this);
                this.collection.on('people:filerData', this.render,this);
                this.role=attrs.role;
            },

            render:function(data){
                //рендерится только определенная роль (students,lectors)
                var rendData = data || this.collection.models,
                    fragment = document.createDocumentFragment(),
                    self=this;
                $.each(rendData,function(index,value){
                    if (value.get('role')===self.role){
                        var personView = new PersonView({ model:value});
                        fragment.appendChild(personView.render().el);
                    }
                });
                this.$el.html(fragment);
                return this
            },

            addOne:function(person){
                var singlePerson = new PersonView({model:person});
                this.$el.append(singlePerson.render().el);
            }
        });
});
