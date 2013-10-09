define(["backbone","views/Day"],
    function(Backbone,DayView) {
        "use strict";
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
                var day = new DayView({model:person});
                this.$el.append(day.render().el);
            }
        });
});
