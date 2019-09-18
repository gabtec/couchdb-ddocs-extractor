var fs = require('fs');

const configs = require('../configs/config');
const dbConnector = require('./utils/db-connector');
const utils = require('./utils/utils');

var dbs;        // arrays of db names
var ddocs = {}; // object -- key: dbname, value: array of ddocs of that db

dbConnector
    .getDatabasesList()
    .then((res)=>{
        dbs = utils.purgeExcludedDBs(res.data, configs.dev_server.exclude_dbs);

        return Promise.all(dbs.map((db) => {
            return dbConnector
                .getDesignDocs(db)
                .then((someDBddocs) => {
                    return someDBddocs.data.rows;
                })
                .then((rows) => {
                    if(rows.length > 0) {
                        ddocs[db] = [];
                        return Promise.all(rows.map((row) => {
                            ddocs[db].push(row.doc);
                        }));
                    }
                });
        }));

    })
    .then(()=>{
        fs.writeFile('ddocs.json', JSON.stringify(ddocs), function (err) {
            if (err) throw err;
            console.log('Design Docs Saved to file!');
          });

    })
    .catch(e => e);
