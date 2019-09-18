const expect = require('chai').expect;

const dbConnector = require('../../lib/utils/db-connector');

describe('Utils test suite', function() {
    context('#global tests', function() {
        it('should expose a getDatabasesList() method', function() {
            expect(dbConnector.getDatabasesList).to.exist;
            expect(dbConnector.getDatabasesList).to.be.instanceOf(Function);
        })

        it('should expose a getDesignDocs() method', function() {
            expect(dbConnector.getDesignDocs).to.exist;
            expect(dbConnector.getDesignDocs).to.be.instanceOf(Function);
        })
    })
})