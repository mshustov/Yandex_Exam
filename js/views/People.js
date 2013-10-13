define('views/People',["backbone","views/PersonShort"],
    function(Backbone,PersonView) {
        "use strict";
        return Backbone.View.extend({
            tagName:'section',
            className:'content',

            initialize:function(attrs){
                this.collection.on('sync',this.addOne,this);
                this.role=attrs.role;
            },

            render:function(){
                var fragment = document.createDocumentFragment();
                this.collection.each(function(person){
                    if (person.get('role')===this.role){
                        var onePersonView = new PersonView({
                            model:person
                        })
                        fragment.appendChild(onePersonView.render().el);
                    }
                },this);

                this.$el.append(fragment);
                return this
            },

            addOne:function(person){
                var singlePerson = new PersonView({model:person});
                this.$el.append(singlePerson.render().el);
            }
        });
});
