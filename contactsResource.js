'use strict';

var urljoin = require('url-join');
var contactsServer = (process.env.CONTACTS_URL || 'https://aws2018-staging.herokuapp.com/api/v1');
var contactsKey = '1234abcd';

module.exports = function(url) {
    return urljoin(contactsServer, url, '?apikey='+contactsKey);
};
