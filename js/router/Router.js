define("router/Router",["backbone","collections/People","views/People","views/PersonDetailed","views/editPerson",
    "collections/Lectures","views/Lectures","views/editLecture",
    "common","data/shri","templates"],
    function(Backbone,PeopleCollection,PeopleView,PersonDetailedView,EditPersonView,
             LecturesCollection,LecturesView,EditLectureView,
             common,shriData,tmpl) {
        "use strict";
        return Backbone.Router.extend({
            routes:{
                "lectures"              :"allLectures",
                "lectures/edit/:id/"    :"editLecture",
                ":route/new/"           :"addNew",
                ":person"               :"allPersons",
                ":person/read/:id/"     :"readPerson",
                ":person/edit/:id/"     :"editPerson",
                ""                      :"goDefault",
                "*404"                  :"go404"
            },
            initialize:function(){
                this.initLectures();
                this.initPersons();
            },
            goDefault:function(){
                Backbone.history.navigate('',true);
                common.hideModal();
            },
            go404:function(){
                var url = Backbone.history.fragment;
                $('#content').html( tmpl['error_404']( {url:url} ));
                Backbone.history.navigate('404',{replace:true});
            },
            initLectures:function(callback){
                console.log('INIT LECTURES');
                this.lectures = new LecturesCollection();
                //если в local storage нет обеъкта, то грузим из переменной
                if (!localStorage['lectures']){
                    _.each(shriData.lectures,function(lecture){
                        this.lectures.create(lecture);
                    },this);
                }
                //TODO переделать на нормальный фетч. как внизу
                this.lectures.fetch();
            },
            initPersons:function(callback){
                console.log('INIT PERSON');
                this.people = new PeopleCollection();
                //если в local storage нет обеъкта, то грузим из переменной
                if (!localStorage['peoples']){
                    _.each(shriData.people,function(person){
                        this.people.create(person);
                    },this);
                };
                this.people.fetch();
            },

            allPersons:function(route){
                console.log('allPersons',arguments)

                if (route!=="students" && route!=='lectors'){
                    return this.go404();
                }
                this.route = route;
                if (this.route==="lectures"){return}
                this.peopleView = new PeopleView({
                    collection:this.people,
                    role:this.route
                });
                $('#content').html(this.peopleView.render().el);
            },
            readPerson:function(route,id){
                console.log('readPerson',arguments);

                    this.person = this.people.get(id);
                    if (!this.person){
                        //throw new Error('нет пользователя с таким ID')
                        return this.go404();
                    }
                    var role = this.person.get("role") || route;

                    if (this.personDetailedView) this.personDetailedView.close();

                    this.personDetailedView = new PersonDetailedView({
                        model:this.person,
                        role :role
                    });
                    common.vent.trigger('showModal',this.personDetailedView.render().el);
            },
            editPerson:function(route,id){
                console.log('editPerson =',route,id);

                    this.person =(id)? this.people.get(id):this.people.create();
                    //TODO Error нет такого пользоватетя
                    if (!this.person){
                        return this.go404()
                    }
                    var role = this.person.get("role") || route;

                    //TODO проверить удаление!!
                    if (this.personEditView) this.personEditView.close();
                    this.personEditView = new EditPersonView({
                        model:this.person,
                        role :role
                    });
                    common.vent.trigger('showModal',this.personEditView.render().el);
            },
            // TODO menu click - Backbone.history!!!
            allLectures:function(){
                console.log('allLectures');
                var lectors = this.people.getShort('lectors');

                this.lecturesView = new LecturesView({
                        collection:this.lectures,
                        lectors:lectors
                    });
                $('#content').html(this.lecturesView.render().el);
            },

            editLecture:function(id){
                console.log('editLecture =',id);

                    this.lecture =(id)? this.lectures.get(id):this.lectures.create();
                    if (!this.lecture){
                        return this.go404()
                    }
                    if (this.lectureEditView) this.lectureEditView.close();
                    this.lectureEditView = new EditLectureView({
                        model:this.lecture,
                        lectors:this.people.getShort('lectors')
                    });
                    common.vent.trigger('showModal',this.lectureEditView.render().el);

            },
            addNew:function(route){
                console.log('new',arguments);
                if (route === "students" || route === "lectors"){
                    this.editPerson(route);
                }
                if (route === "lectures"){
                    this.editLecture();
                }
            }
        });
});