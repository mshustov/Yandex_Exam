define('models/Lecture',["backbone"],
    function(Backbone) {
        "use strict";
        return Backbone.Model.extend({
            defaults: {
                "title":"",
                "lector":null,
                "photo":null,
                "links":[
                    {"slides":""},
                    {"video":""}
                ]

            },

            validate: function(attrs) {
                var errors = {};

                if (!attrs.lector) errors.lector = 'Укажите лектора';
                if (!attrs.title) errors.title = 'Укажите название лекции';

                if (!_.isEmpty(errors)) return errors;
            }
        });
    }
);