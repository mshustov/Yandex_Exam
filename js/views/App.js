define(["backbone","views/People","common"],
    function(Backbone,PeopleView,common) {
        return Backbone.View.extend({
            initialize:function(){
                console.log('collection =', this.collection.toJSON());
                common.vent.on('person:edit',this.editContact,this);
                common.vent.on('person:read',this.readContact,this);

                //var addContacts = new App.Views.AddContact({collection:App.contacts});
                var people = new PeopleView({collection:this.collection}).render();
                $('#content').append(people.el);
            },
            editContact: function(contact,coord){

                console.log("coord",coord);
      /*
                var editContactView = new PeopleView.editContact({ model:contact });
                $('.contact-form-block').html(editContactView.el);
*/
            },
            readContact: function(contact,coord){
                console.log("coord",coord);
           /*
                var editContactView = new PeopleView.editContact({ model:contact });
                $('.contact-form-block').html(editContactView.el);
*/
            }

        });
});