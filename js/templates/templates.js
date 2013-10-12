define(['handlebars'], function(Handlebars) {

this["JST"] = this["JST"] || {};

this["JST"]["personShort.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n            <img class=\"block_photo__short\" src=\"";
  if (stack1 = helpers.photo) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.photo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"фото:";
  if (stack1 = helpers.fname) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.fname; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.lname) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.lname; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\r\n        ";
  return buffer;
  }

function program3(depth0,data) {
  
  
  return "\r\n            <img class=\"block_photo__short\" src=\"img/default.png\" alt=\"default photo\">\r\n        ";
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n            <ul class=\"block_links\">\r\n                ";
  stack1 = helpers.each.call(depth0, depth0.socnetwork, {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n            </ul>\r\n        ";
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                    ";
  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                ";
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                        ";
  stack1 = helpers['if'].call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                    ";
  return buffer;
  }
function program8(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                            <li class=\"block_link\"><a class=\"block_link_icon block_link_icon__"
    + escapeExpression(((stack1 = ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" href=\""
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\" title=\""
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\"></a></li>\r\n                        ";
  return buffer;
  }

  buffer += "<figure class=\"block block_short\">\r\n    <a href=\"/read/";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "/\" class=\"block_photo__link\">\r\n        ";
  stack1 = helpers['if'].call(depth0, depth0.photo, {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n    </a>\r\n    <figcaption class=\"block_info__short\">\r\n        <header>\r\n            <h3 class=\"block_header\"> ";
  if (stack1 = helpers.fname) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.fname; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " <span class=\"first_letter__red\">";
  if (stack1 = helpers.lname) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.lname; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></h3>\r\n            <span class=\"block_info__city\">";
  if (stack1 = helpers.city) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.city; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\r\n        </header>\r\n        <a href=\"/read/";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "/\" class=\"block_link_text block_link_text__read\" title=\"подробнее\">подробнее...</a>\r\n        ";
  stack1 = helpers['if'].call(depth0, depth0.socnetwork, {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n    </figcaption>\r\n</figure>";
  return buffer;
  });

this["JST"]["personDetailed.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n            <img class=\"block_photo__avatar\" src=\"";
  if (stack1 = helpers.photo) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.photo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"фото:";
  if (stack1 = helpers.fname) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.fname; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.lname) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.lname; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\r\n        ";
  return buffer;
  }

function program3(depth0,data) {
  
  
  return "\r\n            <img class=\"block_photo__avatar\" src=\"img/default.png\" alt=\"default photo\">\r\n        ";
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n            <ul class=\"block_links\">\r\n                ";
  stack1 = helpers.each.call(depth0, depth0.socnetwork, {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n            </ul>\r\n        ";
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                    ";
  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                ";
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                        ";
  stack1 = helpers['if'].call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                    ";
  return buffer;
  }
function program8(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                            <li class=\"block_link\"><a class=\"block_link_icon block_link_icon__"
    + escapeExpression(((stack1 = ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" href=\""
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\" title=\""
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\"></a></li>\r\n                        ";
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n            <ul class=\"block_links\">\r\n                ";
  stack1 = helpers.each.call(depth0, depth0.lectures, {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n            </ul>\r\n        ";
  return buffer;
  }
function program11(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                    <li class=\"block_link__vert\"><a class=\"block_link_text\" href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" title=\"";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a></li>\r\n                ";
  return buffer;
  }

  buffer += "<div class=\"block\">\r\n    <div class=\"block_photo__full\">\r\n        ";
  stack1 = helpers['if'].call(depth0, depth0.photo, {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n    </div>\r\n    <div class=\"block_info\">\r\n        <header>\r\n            <h3 class=\"block_header\">";
  if (stack1 = helpers.fname) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.fname; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " <span class=\"first_letter__red\">";
  if (stack1 = helpers.lname) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.lname; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></h3>\r\n            <span class=\"block_info__city\">";
  if (stack1 = helpers.city) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.city; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\r\n        </header>\r\n        <p class=\"block_info_about\">";
  options = {hash:{},data:data};
  stack2 = ((stack1 = helpers.parseAbout || depth0.parseAbout),stack1 ? stack1.call(depth0, depth0.about, options) : helperMissing.call(depth0, "parseAbout", depth0.about, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</p>\r\n        ";
  stack2 = helpers['if'].call(depth0, depth0.socnetwork, {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n        ";
  stack2 = helpers['if'].call(depth0, depth0.lectures, {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n    </div>\r\n    <ul class=\"block_link_control\">\r\n        <a href=\"/edit/";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.id; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "/\" class=\"block_link_icon block_link_icon__edit\" title=\"Редактировать\"></a>\r\n        <a href=\"#\" class=\"block_link_icon block_link_icon__delete\" title=\"Удалить\"></a>\r\n        <a href=\"#\" class=\"block_link_icon block_link_icon__close\" title=\"Закрыть\"></a>\r\n    </ul>\r\n</div>";
  return buffer;
  });

this["JST"]["personEdit.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n            <img class=\"block_photo__avatar\" src=\"";
  if (stack1 = helpers.photo) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.photo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"фото:";
  if (stack1 = helpers.fname) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.fname; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.lname) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.lname; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\r\n        ";
  return buffer;
  }

function program3(depth0,data) {
  
  
  return "\r\n            <img class=\"block_photo__avatar\" src=\"css/img/default.png\" alt=\"default photo\">\r\n        ";
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                <li class=\"block_link__vert\">\r\n                    ";
  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                </li>\r\n            ";
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                        <label class=\"block_edit\">\r\n                            <span class=\"block_link_icon block_link_icon__"
    + escapeExpression(((stack1 = ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></span>\r\n                            <input class=\"block_edit_input block_edit__wide\"  name=\"socnetwork["
    + escapeExpression(((stack1 = ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "]."
    + escapeExpression(((stack1 = ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" value=\""
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\" type=\"text\">\r\n                        </label>\r\n                    ";
  return buffer;
  }

  buffer += "<form id=\"editPerson\">\r\n    <div class=\"block_photo__full\">\r\n        ";
  stack1 = helpers['if'].call(depth0, depth0.photo, {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n        <label class=\"block_edit\">\r\n            <span class=\"block_edit_label__photo\"></span>\r\n            <input class=\"block_edit_input block_edit__photo\" name=\"photo\" value=\"";
  if (stack1 = helpers.photo) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.photo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" type=\"text\">\r\n        </label>\r\n    </div>\r\n    <div class=\"block_info block_info__editable\">\r\n        <header>\r\n            <label class=\"block_edit\">\r\n                <span class=\"block_edit_label__text\">Имя</span>\r\n                <input class=\"block_edit_input\" name=\"fname\" value=\"";
  if (stack1 = helpers.fname) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.fname; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" type=\"text\">\r\n                <span class=\"block_edit_message hide\"></span>\r\n            </label>\r\n            <label class=\"block_edit\">\r\n                <span class=\"block_edit_label__text\">Фамилия</span>\r\n                <input class=\"block_edit_input\" name=\"lname\" value=\"";
  if (stack1 = helpers.lname) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.lname; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" type=\"text\">\r\n                <span class=\"block_edit_message hide\"></span>\r\n            </label>\r\n            <label class=\"block_edit\">\r\n                <span class=\"block_edit_label__text\">Город</span>\r\n                <input class=\"block_edit_input\" name=\"city\" value=\"";
  if (stack1 = helpers.city) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.city; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" type=\"text\">\r\n                <span class=\"block_edit_message hide\"></span>\r\n            </label>\r\n            <input class=\"block_edit_input\" name=\"role\" value=\"";
  if (stack1 = helpers.role) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.role; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" type=\"hidden\">\r\n        </header>\r\n        <p class=\"block_edit block_edit__textarea\"><textarea class=\"block_edit_input block_edit_input__textarea\" rows=\"15\" name=\"about\">";
  if (stack1 = helpers.about) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.about; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</textarea></p>\r\n        <ul class=\"block_links\">\r\n            ";
  stack1 = helpers.each.call(depth0, depth0.socnetwork, {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n        </ul>\r\n        <ul class=\"block_link_control block_link_control__editable\">\r\n            <li class=\"block_link\"><a href=\"#\" class=\"block_link_icon  block_link_icon__save\" title=\"Сохранить\"></a></li>\r\n            <li class=\"block_link\"><a href=\"#\" class=\"block_link_icon  block_link_icon__close\" title=\"Закрыть\"></a></li>\r\n        </ul>\r\n    </div>\r\n</form>";
  return buffer;
  });

this["JST"]["lecture.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                <img class=\"block_photo__avatar\" src=\"";
  if (stack1 = helpers.photo) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.photo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"фото:";
  if (stack1 = helpers.lector) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.lector; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\r\n            ";
  return buffer;
  }

function program3(depth0,data) {
  
  
  return "\r\n                <img class=\"block_photo__avatar\" src=\"css/img/default.png\" alt=\"default photo\">\r\n            ";
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                    ";
  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                ";
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                        ";
  stack1 = helpers['if'].call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                    ";
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                            <li class=\"block_link\"><a class=\"block_link_icon block_link_icon__"
    + escapeExpression(((stack1 = ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" href=\""
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\" title=\""
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\"></a></li>\r\n                        ";
  return buffer;
  }

  buffer += "<div class=\"block block__shadow\">\r\n    <div class=\"block_info_container\">\r\n        <div class=\"block_photo__full\">\r\n            ";
  stack1 = helpers['if'].call(depth0, depth0.photo, {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n        </div>\r\n        <div class=\"block_info\">\r\n            <header>\r\n                <h3 class =\"block_header\"><a class=\"block_header__link\" href=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.links),stack1 == null || stack1 === false ? stack1 : stack1[0])),stack1 == null || stack1 === false ? stack1 : stack1.video)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" title=\"Запись лекции\">";
  if (stack2 = helpers.title) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.title; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</a></h3>\r\n            </header>\r\n            <h5 class=\"block_subheader\">";
  if (stack2 = helpers.name) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.name; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</h5>\r\n            <ul class=\"block_links\">\r\n                ";
  stack2 = helpers.each.call(depth0, depth0.links, {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n            </ul>\r\n        </div>\r\n    </div>\r\n    <ul class=\"block_link_control\">\r\n        <li class=\"block_link\"><a href=\"/edit/";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.id; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "/\" class=\"block_link_icon  block_link_icon__edit\" title=\"Редактировать\"></a></li>\r\n        <li class=\"block_link\"><a href=\"/delete/";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.id; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" class=\"block_link_icon  block_link_icon__delete\" title=\"Удалить\"></a></li>\r\n    </ul>\r\n</div>";
  return buffer;
  });

this["JST"]["lectureEdit.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n            <img class=\"block_photo__avatar\" src=\"";
  if (stack1 = helpers.photo) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.photo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"фото:";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\r\n        ";
  return buffer;
  }

function program3(depth0,data) {
  
  
  return "\r\n            <img class=\"block_photo__avatar\" src=\"css/img/default.png\" alt=\"default photo\">\r\n        ";
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                        <option value=\""
    + escapeExpression(((stack1 = ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = depth0.name),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</option>\r\n                    ";
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                <li class=\"block_link__vert\">\r\n                    ";
  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                </li>\r\n            ";
  return buffer;
  }
function program8(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                        <label class=\"block_edit\">\r\n                            <span class=\"block_link_icon block_link_icon__"
    + escapeExpression(((stack1 = ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></span>\r\n                            <input class=\"block_edit_input block_edit__wide\"  name=\"links["
    + escapeExpression(((stack1 = ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "]."
    + escapeExpression(((stack1 = ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" value=\""
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\" type=\"text\">\r\n                        </label>\r\n                    ";
  return buffer;
  }

  buffer += "<form id=\"editLecture\">\r\n    <div class=\"block_photo__full\">\r\n        ";
  stack1 = helpers['if'].call(depth0, depth0.photo, {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n    </div>\r\n    <div class=\"block_info block_info__editable\">\r\n        <header>\r\n            <label class=\"block_edit\">\r\n                <span class=\"block_edit_label__text\">Название</span>\r\n                <input class=\"block_edit_input\" name=\"title\" value=\"";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" type=\"text\">\r\n                <span class=\"block_edit_message hide\"></span>\r\n            </label>\r\n            <label class=\"block_edit\">\r\n                <span class=\"block_edit_label__text\">Лектор</span>\r\n                <select class=\"block_edit_select\" name=\"lector\">\r\n                    <option value=\"\"></option>\r\n                    ";
  stack1 = helpers.each.call(depth0, depth0.lectors, {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                </select>\r\n                <span class=\"block_edit_message hide\"></span>\r\n            </label>\r\n        </header>\r\n        <ul class=\"block_links\">\r\n            ";
  stack1 = helpers.each.call(depth0, depth0.links, {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n        </ul>\r\n        <ul class=\"block_link_control block_link_control__editable\">\r\n            <li class=\"block_link\"><a href=\"#\" class=\"block_link_icon  block_link_icon__save\" title=\"Сохранить\"></a></li>\r\n            <li class=\"block_link\"><a href=\"#\" class=\"block_link_icon  block_link_icon__close\" title=\"Закрыть\"></a></li>\r\n        </ul>\r\n    </div>\r\n</form>";
  return buffer;
  });

return this["JST"];

});