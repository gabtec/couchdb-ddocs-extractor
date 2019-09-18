/**
 * Removes a given array of values from a source array
 * @param {Array} dbs - The original source array
 * @param {Array} toRemove - The array of values, that will be removed from source array
 */
function purgeExcludedDBs(dbs, toRemove) {
    var result = dbs.filter(function(db, index, arr){
        return !toRemove.includes(db);
    });

    return result;
}

module.exports = {
    purgeExcludedDBs,
};