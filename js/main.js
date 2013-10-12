 require.config({
     paths:{
         'jquery': 'lib/jquery',
         'underscore': 'lib/underscore',
         'backbone': 'lib/backbone',
         'backbone.localStorage': 'lib/backbone.localStorage',
         'handlebars': 'lib/handlebars'
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

 define("main",["jquery","backbone","router/Router",'collections/People','views/App'],
     function($,Backbone,Router,PeopleCollection,AppView) {

    // try {
         new Router();
         Backbone.history.start();
         //глобальный объект чтобы удобно было смотреть
         var people = new PeopleCollection();
        if (!localStorage['shri']){
            _.each(allStudents,function(student){
                people.create(student);
            });
        }

         people.fetch().then(function(){
            new AppView({collection:people});
         });
     //} catch (e) {
    //     console.log(e);
     //}
 })
