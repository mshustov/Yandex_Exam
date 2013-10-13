define(["backbone","models/Person","backbone.localStorage"],
    function(Backbone,PersonModel) {
        "use strict";
        return Backbone.Collection.extend({
            model: PersonModel,
            localStorage: new Backbone.LocalStorage('peoples'),

            // вернуть список лиц заданной роли
            getRole: function(role) {
                return this.filter(function( person ) {
                    return person.get('role') === role;
                });
            },
            getShort: function(role) {
                var result={};
                this.each(function( person ) {
                    if (person.get('role')===role){
                        result[person.get('id')]={
                            name:person.get('fname') + '  '+ person.get('lname'),
                            photo:person.get('photo')
                        };
                    }
                });
                return result;
            }
        });
});

