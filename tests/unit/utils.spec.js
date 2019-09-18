const expect = require('chai').expect;

const utils = require('../../lib/utils/utils');

describe('Utils test suite', function() {
    const dbsList = ['alfa', 'beta', '_replication'];

    context('#purgeExcludedDBs tests', function() {
        it('should ignore a non existant name', function() {
            const toRemove = ['nonExistentName'];
            const expected = ['alfa', 'beta', '_replication'];
            const result = utils.purgeExcludedDBs(dbsList, toRemove);

            expect(result.length).to.be.equal(3);
        })

        it('should return an array without given name', function() {
            const toRemove = ['_replication'];
            const expected = ['alfa', 'beta'];
            const result = utils.purgeExcludedDBs(dbsList, toRemove);

            expect(result.length).to.be.equal(2);
            expect(result).to.eql(expected);
        })

        it('should return an array without given names', function() {
            const toRemove = ['_replication', 'beta'];
            const expected = ['alfa'];
            const result = utils.purgeExcludedDBs(dbsList, toRemove);

            expect(result.length).to.be.equal(1);
            expect(result).to.eql(expected);
        })
    })
})