module.exports = {
    dev_server: {
        admin_user: 'admin',
        admin_pass: 'admin',
        protocol: 'http',
        ip: 'localhost',
        port: 5984,
        exclude_dbs: ['_replicator'],
    },
    prod_server: {
        admin_user: 'admin',
        admin_pass: 'admin',
        protocol: 'http',
        ip: '192.168.1.2',
        port: 5984,
    }
}