define(["backbone","collections/People","views/People","views/PersonDetailed","views/editPerson",
    "collections/Lectures","views/Lectures","views/editLecture",
    "common","data/shri","templates"],
    function(Backbone,PeopleCollection,PeopleView,PersonDetailedView,EditPersonView,
             LecturesCollection,LecturesView,EditLectureView,
             common,shriData,tmpl) {
        "use strict";
        return Backbone.Router.extend({
            routes:{
                "lectures/"             :"allLectures",
                "lectures/edit/:id/"    :"editLecture",
                ":route/new/"           :"addNew",
                ":lectors/"             :"allPersons",
                ":person/read/:id/"     :"readPerson",
                ":person/edit/:id/"     :"editPerson",
                ""                      :"goDefault",
                "*404"                  :"go404"
            },

            initialize:function(){
                this.initLectures();
                this.initPersons();
                this.bind('route',function(){
                    common.showActTab();
                })
            },
            goDefault:function(){
                Backbone.history.navigate('#students/',true);
            },
            go404:function(){
                common.vent.trigger('hideModal');
                var url = Backbone.history.fragment;
                $('#content').html( tmpl['error_404']( {url:url} ));
                Backbone.history.navigate('404',{replace:true});
            },
            initLectures:function(callback){
                console.log('fetch Lectures from localStorage');
                this.lectures = new LecturesCollection();
                //если в local storage нет обеъкта, то грузим из переменной
                if (!localStorage['lectures']){
                    _.each(shriData.lectures,function(lecture){
                        this.lectures.create(lecture);
                    },this);
                }
                this.lectures.fetch();
            },
            initPersons:function(callback){
                console.log('fetch Person from localStorage');
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
                //если роут неизвестный, то отправим на 404
                if (!common.validPersonClass(route)){
                    return this.go404();
                }
                var self=this;
                this.people.fetch({success:function(){
                    common.vent.trigger('hideModal');
                    self.peopleView = new PeopleView({
                        collection:self.people,
                        role:route
                    });
                    $('#content').html(self.peopleView.render().el);
                }});
            },
            readPerson:function(route,id){
                    this.person = this.people.get(id);
                    if (!this.person || !common.validPersonClass(route)){
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
                    this.person =(id)? this.people.get(id):this.people.create();
                    if (!this.person || !common.validPersonClass(route)){
                        return this.go404()
                    }
                    var role = this.person.get("role") || route;

                    if (this.personEditView) this.personEditView.close();
                    this.personEditView = new EditPersonView({
                        model:this.person,
                        role :role
                    });
                    common.vent.trigger('showModal',this.personEditView.render().el);
            },
            allLectures:function(){
                var self = this;
                this.lectures.fetch({success:function(){
                    common.vent.trigger('hideModal');
                    var lectors = self.people.getShort('lectors');
                    self.lecturesView = new LecturesView({
                        collection:self.lectures,
                        lectors:lectors
                    });
                    $('#content').html(self.lecturesView.render().el);
                }});
            },

            editLecture:function(id){
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
                if (common.validPersonClass(route)){
                    this.editPerson(route);
                }
                if (route === "lectures"){
                    this.editLecture();
                }
            }
        });
});