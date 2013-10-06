define(["backbone"],
    function(Backbone) {
        "use strict";
        return Backbone.Model.extend({
            defaults: {
                /*
                //req autoinc
                id      :0,
                fname   :'',
                //req
                lname   :'',
                city_id :1,
                date_birdth:null,
                role_id :0,
                photo   :'',
                about   :'',
                socnetwork:[
                    {
                        name:'vk',
                        link:''
                    },
                    {
                        name:'fb',
                        link:''
                    }
                ]
                */
            },

            validate: function(attrs) {
                /*
                var errors = {};

                if (!attrs.lname) errors.lname = 'last name is empty';
                if (!attrs.id) errors.id = 'ID is required';

                if (!_.isEmpty(errors)) return errors;
                */
            }
        });
    }
);