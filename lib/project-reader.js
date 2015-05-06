'use strict';

var _ = require('lodash');
var Bluebird = require('bluebird');

var path = require('path');
var config = require('simpler-config');
var Project = require('./project');

var ProjectReader;
ProjectReader = _.mapValues({

  _loadConfig: function (configPath) {
    return config.load(require(configPath));
  },

  read: function (folderPath) {
    return ProjectReader.
      _loadConfig(path.join('.', folderPath, 'project.json'))
      .then(function (config) {
        return new Project(config.name, config.type);
      });
  }

}, Bluebird.method);

module.exports = ProjectReader;