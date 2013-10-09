define(['handlebars'], function(Handlebars) {

this["JST"] = this["JST"] || {};

this["JST"]["person.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n            <img class=\"person_photo__avatar\" src=\"";
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
  
  
  return "\r\n            <img class=\"person_photo__avatar\" src=\"img/default.png\" alt=\"default photo\">\r\n        ";
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                <ul class=\"person_socnetwork\">\r\n                    ";
  stack1 = helpers.each.call(depth0, depth0.socnetwork, {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                </ul>\r\n            ";
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                        ";
  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                    ";
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                            ";
  stack1 = helpers['if'].call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                        ";
  return buffer;
  }
function program8(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                                <li class=\"person_socnetwork_icon\"><a class=\"person_socnetwork_icon_link person_socnetwork_icon_link__"
    + escapeExpression(((stack1 = ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" href=\""
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\" title=\""
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\"></a></li>\r\n                            ";
  return buffer;
  }

  buffer += "<div class=\"person\">\r\n    <div class=\"person_photo__full\">\r\n        ";
  stack1 = helpers['if'].call(depth0, depth0.photo, {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n    </div>\r\n    <div class=\"person_info_container\">\r\n        <div class=\"person_info_detailed_control\">\r\n            <a href=\"#edit/";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "/\" class=\"person_info_control person_info_control__edit\" title=\"Редактировать\"></a>\r\n            <a href=\"#\" class=\"person_info_control person_info_control__delete\" title=\"Удалить\"></a>\r\n            <a href=\"#\" class=\"person_info_control person_info_control__close\" title=\"Закрыть\"></a>\r\n        </div>\r\n        <div class=\"person_info person_info__detailed\">\r\n            <header>\r\n                <h3 class=\"person_info_name\">";
  if (stack1 = helpers.fname) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.fname; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.lname) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.lname; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h3>\r\n                <span class=\"person_info_city\">";
  if (stack1 = helpers.city_id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.city_id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\r\n                <span class=\"person_info_role\">";
  if (stack1 = helpers.role_id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.role_id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\r\n                <span class=\"person_info_age\">";
  if (stack1 = helpers.dateOfBirth) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.dateOfBirth; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\r\n            </header>\r\n            <p class=\"person_info_about\">";
  options = {hash:{},data:data};
  stack2 = ((stack1 = helpers.parseAbout || depth0.parseAbout),stack1 ? stack1.call(depth0, depth0.about, options) : helperMissing.call(depth0, "parseAbout", depth0.about, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</p>\r\n            ";
  stack2 = helpers['if'].call(depth0, depth0.socnetwork, {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n        </div>\r\n    </div>\r\n</div>";
  return buffer;
  });

this["JST"]["personEdit.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n            <img class=\"person_photo__avatar\" src=\"";
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
  
  
  return "\r\n            <img class=\"person_photo__avatar\" src=\"css/img/default.png\" alt=\"default photo\">\r\n        ";
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                    <li class=\"person_socnetwork_icon__edit\">\r\n                        ";
  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                    </li>\r\n                ";
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                            <label class=\"person_edit\">\r\n                                <span class=\"person_socnetwork_icon_link person_socnetwork_icon_link__"
    + escapeExpression(((stack1 = ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></span>\r\n                                <input class=\"person_edit_input person_edit__socnetwork\"  name=\"socnetwork["
    + escapeExpression(((stack1 = ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "]."
    + escapeExpression(((stack1 = ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" value=\""
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\" type=\"text\">\r\n                            </label>\r\n                        ";
  return buffer;
  }

  buffer += "<form id=\"editForm\" class=\"person_editable\">\r\n    <div class=\"person_photo__edit\">\r\n        ";
  stack1 = helpers['if'].call(depth0, depth0.photo, {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n        <label class=\"person_edit\">\r\n            <span class=\"person_edit_label_photo\"></span>\r\n            <input class=\"person_edit_input person_edit__photo\" name=\"photo\" value=\"";
  if (stack1 = helpers.photo) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.photo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" type=\"text\">\r\n        </label>\r\n    </div>\r\n    <div class=\"person_info_editable_container\">\r\n        <div class=\"person_info_detailed_control\">\r\n            <a href=\"#\" class=\"person_info_control person_info_control__save\" title=\"Сохранить\"></a>\r\n            <a href=\"#\" class=\"person_info_control person_info_control__close\" title=\"Закрыть\"></a>\r\n        </div>\r\n        <div class=\"person_info person_info__detailed\">\r\n            <header>\r\n                <label class=\"person_edit\">\r\n                    <span class=\"person_edit_label_text\">Имя</span>\r\n                    <input class=\"person_edit_input person_edit__fname\" name=\"fname\" value=\"";
  if (stack1 = helpers.fname) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.fname; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" type=\"text\">\r\n                    <span class=\"person_edit_message person_edit_message__hide\"></span>\r\n                </label>\r\n                <label class=\"person_edit\">\r\n                    <span class=\"person_edit_label_text\">Фамилия</span>\r\n                    <input class=\"person_edit_input person_edit__lname\" name=\"lname\" value=\"";
  if (stack1 = helpers.lname) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.lname; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" type=\"text\">\r\n                    <span class=\"person_edit_message person_edit_message__hide\"></span>\r\n                </label>\r\n                <label class=\"person_edit\">\r\n                    <span class=\"person_edit_label_text\">Город</span>\r\n                    <input class=\"person_edit_input person_edit__city\" name=\"city_id\" value=\"";
  if (stack1 = helpers.city_id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.city_id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" type=\"text\">\r\n                </label>\r\n                <label class=\"person_edit\">\r\n                    <span class=\"person_edit_label_text\">Должность</span>\r\n                    <input class=\"person_edit_input person_edit__role\" name=\"role_id\" value=\"";
  if (stack1 = helpers.role_id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.role_id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" type=\"text\">\r\n                </label>\r\n            </header>\r\n            <p class=\"person_edit person_edit__textarea\"><textarea class=\"person_edit_input person_edit_input__textarea\" rows=\"15\" name=\"about\">";
  if (stack1 = helpers.about) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.about; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</textarea></p>\r\n            <ul class=\"person_socnetwork\">\r\n                ";
  stack1 = helpers.each.call(depth0, depth0.socnetwork, {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</form>";
  return buffer;
  });

this["JST"]["personShort.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n            <img class=\"person_photo__avatar\" src=\"";
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
  
  
  return "\r\n            <img class=\"person_photo__avatar\" src=\"img/default.png\" alt=\"default photo\">\r\n        ";
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                <ul class=\"person_socnetwork\">\r\n                    ";
  stack1 = helpers.each.call(depth0, depth0.socnetwork, {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                </ul>\r\n            ";
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                        ";
  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                    ";
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                            ";
  stack1 = helpers['if'].call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                        ";
  return buffer;
  }
function program8(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                                <li class=\"person_socnetwork_icon\"><a class=\"person_socnetwork_icon_link person_socnetwork_icon_link__"
    + escapeExpression(((stack1 = ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" href=\""
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\" title=\""
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\"></a></li>\r\n                            ";
  return buffer;
  }

  buffer += "<div class=\"person\">\r\n    <div class=\"person_photo__full\">\r\n        ";
  stack1 = helpers['if'].call(depth0, depth0.photo, {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n    </div>\r\n    <div class=\"person_info_container\">\r\n        <div class=\"person_info\">\r\n            <header>\r\n                <h3 class=\"person_info_name\">";
  if (stack1 = helpers.fname) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.fname; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.lname) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.lname; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h3>\r\n                <span class=\"person_info_city\">";
  if (stack1 = helpers.city_id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.city_id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\r\n                <span class=\"person_info_role\">";
  if (stack1 = helpers.role_id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.role_id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\r\n                <span class=\"person_info_age\">";
  if (stack1 = helpers.dateOfBirth) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.dateOfBirth; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\r\n            </header>\r\n            <a href=\"#read/";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "/\" class=\"person_info_control person_info_control__read\" title=\"подробнее\">подробнее...</a>\r\n            ";
  stack1 = helpers['if'].call(depth0, depth0.socnetwork, {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n        </div>\r\n    </div>\r\n</div>";
  return buffer;
  });

return this["JST"];

});