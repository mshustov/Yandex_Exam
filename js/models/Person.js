define('models/Person',["backbone"],
    function(Backbone) {
        "use strict";
        return Backbone.Model.extend({
            defaults: {
                "fname":"",
                "lname":"",
                "photo":"css/img/default.png",
                "city":"",
                "role":"",
                "about":"",
                "socnetwork":[],
                "lectures":[]
            },

            validate: function(attrs) {
                var errors = {};
                if (!attrs.lname) errors.lname = 'Введите фамилию';
                if (!attrs.fname) errors.fname = 'Введите имя';
                //console.log(attrs.about.replace(/[-[\]{}()*+?.,\\^$|#\s]/gim,"\\$&"));
                if (!_.isEmpty(errors)) return errors;

            }
        });
    }
);