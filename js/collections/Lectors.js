define(["backbone","models/Person","backbone.localStorage"],
    function(Backbone,PersonModel) {
        "use strict";
        return Backbone.Collection.extend({
            model: PersonModel,
            localStorage: new Backbone.LocalStorage('people'),

            // Filter down the list of all todo items that are finished.
            completed: function() {
                return this.filter(function( todo ) {
                    return todo.get('completed');
                });
            },
            // Filter down the list to only todo items that are still not finished.
            remaining: function() {
                // apply allowsus to define the context of this within our function scope
                return this.without.apply( this, this.completed() );
            },

            // We keep the Todos in sequential order, despite being saved by unordered
            // GUID in the database. This generates the next order number for new items.
            nextOrder: function() {
                if ( !this.length ) {
                    return 1;
                }
                return this.last().get('order') + 1;
            },
            comparator: function( todo ) {
                return todo.get('order');
            }
        });
});

