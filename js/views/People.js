define(["backbone","views/Person"],
    function(Backbone,PersonView) {
        return Backbone.View.extend({
            tagName:'section',
            className:'content',

            initialize:function(){
                //без id событие не срабатывает!!
                this.collection.on('add',this.addOne,this);
            },

            render:function(){
                this.collection.each(this.addOne,this);
                return this
            },

            addOne:function(person){
                var singlePerson = new PersonView({model:person});
                this.$el.append(singlePerson.render().el);
            }
        });
});
