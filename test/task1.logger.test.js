const { expect } = require('chai');
const logger = require('../src/logger');


describe('Task1 - logger module', function() {
it('should expose logger functions', function() {
expect(logger).to.have.property('info');
expect(logger).to.have.property('warn');
expect(logger).to.have.property('error');
expect(typeof logger.info).to.equal('function');
});
});