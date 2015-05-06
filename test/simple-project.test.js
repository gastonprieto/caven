'use strict';

require('should');

var ProjectReader = require('lib/project-reader');

describe('Simple Project', function() {

  context('Binary Project', function() {

    it('should read the configuration', function (done) {
      var path = './test/samples/simple-project/binary';

      ProjectReader
        .read(path)
        .then(project => {
          project.type.should.be.eql('binary');
          project.name.should.be.eql('simple-project');
        })
        .then(done, done);
    });

  });

});