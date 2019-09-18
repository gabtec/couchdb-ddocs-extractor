# couchdb-ddocs-extractor
A utility tool to extract _design documents from a dev couchdb server to a json file

Features:
* Extracts all design docs from all databases, from a CouchDB server, to a json file
* Allows the possibility to exclude some databases, from this process

## Instalation

1. `npm install https://github.com/gabtec/couchdb-ddocs-extractor.git `
2. `npm install `
2. or `npm install --production`
3. edit `lib/configs/config.js` and set your server configs and if needed, the databases to exclude


## Usage

1. `npm start`
2. The file **ddocs.json** will be created on the package folder


## Testing

For those who want to contribute, I wrote some tests. 
To run then:
`npm test`
