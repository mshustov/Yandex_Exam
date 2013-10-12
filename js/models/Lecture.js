define(["backbone"],
    function(Backbone) {
        "use strict";
        return Backbone.Model.extend({
            defaults: {
                 //req unix-time к 00.00
                 id      :null,
                 events:[]
            },

            validate: function(attrs) {
                 var errors = {};

                 if (!attrs.id) errors.lname = 'Не заданая дата';

                 if (!_.isEmpty(errors)) return errors;
            }
        });
    }
);