define("router/Router",["backbone","collections/People","views/People","views/PersonDetailed","views/editPerson",
    "collections/Lectures","views/Lectures","views/editLecture",
    "common","data/shri"],
    function(Backbone,PeopleCollection,PeopleView,PersonDetailedView,EditPersonView,
             LecturesCollection,LecturesView,EditLectureView,
             common,shriData) {
        "use strict";
        return Backbone.Router.extend({
            routes:{
                "lectures"              :"allLectures",
                "lectures/edit/:id/"    :"editLecture",
                ":route/new/"           :"addNew",
                ":person"               :"allPersons",
                ":person/read/:id/"     :"readPerson",
                ":person/edit/:id/"     :"editPerson",
                ""                      :"goDefault"
            },
            initialize:function(){

            },
            goDefault:function(){
                Backbone.history.navigate('',true);
                common.hideModal();
            },
            personInit:function(callback){

            },
            allPersons:function(route){
                console.log('allPersons',route)

                this.people = this.people || new PeopleCollection();

                //если в local storage нет обеъкта, то грузим из переменной
                if (!localStorage['peoples']){
                    _.each(shriData.people,function(person){
                        self.people.create(person);
                    });
                }

                if (route!=="students" && route!=='lectors' && route!=="lectures"){
                    return this.goDefault();
                }

                this.route = route;
                var self = this;

                //TODO переделать на нормальный фетч. как внизу
                this.people.fetch({
                    success:function () {
                        if (self.route==="lectures"){return}
                        self.peopleView = new PeopleView({
                            collection:self.people,
                            route:self.route
                        });

                        $('#content').html(self.peopleView.render().el);


                        if (self.readID) {
                            self.readPerson(self.route,self.readID);
                            self.readID=self.route=null;
                        };
                        if (self.editID) {
                            self.editPerson(self.route,self.editID);
                            self.editID=self.route=null;
                        }
                        if (self.newID) {
                            self.editPerson(self.route);
                            self.editID=self.route=null;
                        }
                    }
                });
            },
            readPerson:function(route,id){
                console.log('readPerson',arguments);
                if (this.people) {
                    this.person = this.people.get(id);
                    if (!this.person){
                        //throw new Error('нет пользователя с таким ID')
                        return this.goDefault();
                    }
                    if (this.personDetailedView) this.personDetailedView.close();

                    this.personDetailedView = new PersonDetailedView({model:this.person});
                    common.vent.trigger('showModal',this.personDetailedView.render().el);
                } else {
                    this.readID = id;
                    this.allPersons(route);
                }
            },
            editPerson:function(route,id){
                console.log('editPerson =',route,id);
                if (this.people) {

                    this.person =(id)? this.people.get(id):this.people.create();
                    //TODO Error нет такого пользоватетя
                    if (!this.person){return this.goDefault()}
                    var role = this.person.get("role") || route;

                    //TODO проверить удаление!!
                    if (this.personEditView) this.personEditView.close();
                    this.personEditView = new EditPersonView({
                        model:this.person,
                        role :role
                    });
                    common.vent.trigger('showModal',this.personEditView.render().el);
                } else {

                    if (id){this.editID = id}
                    else {this.newID = true}

                    this.allPersons(route);
                }

            },
            // TODO menu click - Backbone.history!!!
            allLectures:function(){
                console.log('allLectures');

                //подготовка массива лекторов
                if (!this.people){
                    this.allPersons('lectures')
                }

                this.lectures = this.lectures || new LecturesCollection();
                var self = this;

                //если в local storage нет обеъкта, то грузим из переменной
                if (!localStorage['lectures']){
                    _.each(shriData.lectures,function(lecture){
                        self.lectures.create(lecture);
                    });
                }
                //TODO переделать на нормальный фетч. как внизу
                this.lectures.fetch({
                    success:function () {
                        var lectors = self.people.getShort('lectors');
                        self.lecturesView = new LecturesView({
                                collection:self.lectures,
                                lectors:lectors
                            });
                        $('#content').html(self.lecturesView.render().el);

                        if (self.editID) {
                            self.editLecture(self.editID);
                            self.editID=null;
                        }

                        if (self.newID) {
                            self.addNew(route);
                            self.newID=null;
                        }
                    }
                });
            },

            editLecture:function(id){
                console.log('editLecture =',id);
                //подготовка массива лекторов
                if (!this.people) {
                    this.allPersons()
                }

                if (this.lectures){
                    this.lecture =(id)? this.lectures.get(id):this.lectures.create();
                    if (!this.lecture){return this.goDefault()}
                    if (this.lectureEditView) this.lectureEditView.close();
                    this.lectureEditView = new EditLectureView({
                        model:this.lecture,
                        lectors:this.people.getShort('lectors')
                    });
                    common.vent.trigger('showModal',this.lectureEditView.render().el);
                } else {
                    if (id){this.editID = id}
                    else {this.newID = true}
                    this.allLectures();
                }
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