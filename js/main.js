 require.config({
     paths:{
         'jquery': 'lib/jquery',
         'underscore': 'lib/underscore',
         'backbone': 'lib/backbone',
         'backbone.localStorage': 'lib/backbone.localStorage',
         'handlebars': 'lib/handlebars',
         'templates' : 'templates/templates',
         'form2js': 'lib/form2js'
     },
     shim: {
         'jquery': {
             exports: '$'
         },
         'underscore': {
             exports: '_'
         },
         'backbone': { exports: 'Backbone', deps: ['underscore', 'jquery'] },
         'backbone.localStorage': { deps: ['backbone'] },
         'handlebars': { exports: 'Handlebars'}
     }
 });

 define("main",["jquery","backbone","router/Router"],
     function($,Backbone,Router) {
         "use strict";
         var App = new Router();
         Backbone.history.start();

 })
