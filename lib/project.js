'use strict';

var Class = require('jsclass/src/core').Class;

var Project = {

  initialize : function (name, type) {
    this.name = name;
    this.type = type;
  }

};

module.exports = new Class(Project);