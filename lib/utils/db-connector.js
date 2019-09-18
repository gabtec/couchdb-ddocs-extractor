const axios = require('axios');

const configs = require('../configs/config');

function getDatabasesList() {
    const query = `${configs.dev_server.protocol}://${configs.dev_server.admin_user}:${configs.dev_server.admin_pass}@${configs.dev_server.ip}:${configs.dev_server.port}/_all_dbs`;

    return axios.get(query);
};


function getDesignDocs(db) {
    const query = '' +
        configs.dev_server.protocol + '://' +
        configs.dev_server.admin_user + ':' +
        configs.dev_server.admin_pass + '@' +
        configs.dev_server.ip + ':' +
        configs.dev_server.port + '/' +
        db + '/' +
        '_all_docs?startkey="_design"&endkey="_e"&include_docs=true';

    return axios.get(query);
};

// function postDesignDocs(db, data) {
//     const endpoint = '' +
//         configs.prod_server.protocol + '://' +
//         configs.prod_server.admin_user + ':' +
//         configs.prod_server.admin_pass + '@' +
//         configs.prod_server.ip + ':' +
//         configs.prod_server.port + '/' +
//         db + '/_bulk_docs';


//     return axios.post(endpoint, data, {new_edits: false});
// };

module.exports = {
    getDatabasesList,
    getDesignDocs,
    // postDesignDocs,
};
