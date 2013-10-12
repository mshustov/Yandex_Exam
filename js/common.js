define('common',["jquery","underscore","backbone","handlebars"],
    function($,_,Backbone,Handlebars) {
        "use strict";
        var common = {
            Key:{
                BACKSPACE:8,
                ESCAPE: 27,
                ENTER: 13
            },
            //TODO пока нигде не используется?
            vent:_.extend({},Backbone.Events),

            //модуль управления модальным окном
            modal:$('#modal'),

            navigate:function(url,silent){
                var silent = silent || ''
                var href = '#' + Backbone.history.fragment.split('/')[0];
                if (url) {href += url;}
                Backbone.history.navigate(href,true);
            },

            hideModal:function(){
                this.modal.addClass('hide').off('.detailed');
                $(document).off('.detailed');
                this.navigate();
            },
            showModal:function(content){
                var self = this;
                this.modal.html(content);
                this.modal.removeClass('hide');
                //если привязать методы напрямую, можно обойтесь без оберток
                this.modal.on('click.detailed', function(e){
                    if ( e.target!=self.modal[0]){return}
                    self.hideModal();
                });
                $(document).on('keydown.detailed', function(e){
                    if (e.keyCode!=self.Key.ESCAPE && e.keyCode!=self.Key.BACKSPACE){return}
                    self.hideModal();
                });
            },

            showFormError:function(errobj){
                var self = this;
                $.each(errobj.validationError,function(key,value){
                    self.$el.find("[name='" +key+"']")
                        .siblings('.block_edit_message').removeClass('hide').text(value)
                        .off()
                        .closest('.block_edit').addClass('block_edit__error')
                });
            },
            initialize:function(){
                var self = this;
                this.vent.on('showModal',this.showModal,this);
                this.vent.on('hideModal',this.hideModal,this);

                $('.add_new').on('click',function(e){
                    self.navigate(e.currentTarget.getAttribute('href'));
                    return false
                });

                // хелпер для обработки переносов строк в {{about}}
                Handlebars.registerHelper('parseAbout', function(about) {
                    if (!about) return
                    return about.replace(/[\n]+/gim,'<br>');
                });
            }
        };

        common.initialize();

        return common
});
