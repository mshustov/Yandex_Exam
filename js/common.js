define('common',["jquery","underscore","backbone"],
    function($,_,Backbone) {
        "use strict";
        var common = {
            Key:{
                BACKSPACE:8,
                ESCAPE: 27,
                ENTER: 13
            },
            cacheObj:{},
            saveObj:function(selector){
                if (selector && $(selector)){
                    this.cacheObj[selector]= $(selector);
                }
                return this
            },
            //объект для проверки класса роутов Person
            validPersonClass:function(route){
                if (!route){route = this.getRoot()}
                var enable={
                    "students":"",
                    "lectors":""
                }
                return typeof enable[route]!=="undefined"
            },
            //объект для проверки доступных роутов
            validLecture:function(route){
                if (!route){route = this.getRoot()}
                var enable={
                    "lectures":""
                }
                return typeof enable[route]!=="undefined"
            },
            vent:_.extend({},Backbone.Events),

            //модуль управления модальным окном
            getRoot:function(){
                return Backbone.history.fragment.split('/')[0];
            },
            hideModal:function(){
                this.cacheObj['#modal'].addClass('hide').off('.detailed');
                $(document).off('.detailed');
                Backbone.history.navigate(this.getRoot()+'/', true);
                return this
            },
            showModal:function(content){
                var self = this;
                this.cacheObj['#modal'].html(content);
                this.cacheObj['#modal'].removeClass('hide');

                this.cacheObj['#modal'].on('click.detailed', function(e){
                    //скрываем модальное окно по клику вне popup окна
                    if ( e.target!=self.cacheObj['#modal'][0]){return}
                    self.hideModal();
                    // Backbone.history.navigate(self.getRoot()+'/', true);
                });
                $(document).on('keydown.detailed', function(e){
                    //скрываем модальное окно по ESC или BACKSPACE
                    if (e.keyCode!=self.Key.ESCAPE && e.keyCode!=self.Key.BACKSPACE){return}
                    self.hideModal();
                   // Backbone.history.navigate(self.getRoot()+'/', true);
                });
                return this
            },
            showActTab:function(){
                var route = this.getRoot();
                if (this.validPersonClass(route) || this.validLecture(route)){
                    var urlNew = '/new/';
                    this.cacheObj['.add_new'].prop('href','#'+route+urlNew).removeClass('hide');
                    this.cacheObj['.main_menu_item__link'].removeClass('main_menu_item__active').filter('.'+route).addClass('main_menu_item__active')
                } else {
                    this.cacheObj['.add_new'].addClass('hide');
                }
            },
            initialize:function(){
                this.vent.on('showModal',this.showModal,this);
                this.vent.on('hideModal',this.hideModal,this);
                this.saveObj('.add_new').saveObj('.main_menu_item__link').saveObj('#modal').saveObj('.search');
                console.log(this.cacheObj);
            }
        };
        common.initialize();

        return common
});
