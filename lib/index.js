var handle = require('hitd-handler'),
	debug = require('hitd-debug')('hitd-log404');

module.exports = function(endpoint, conf, cb) {

	var host = (conf['hitd-log404'] && conf['hitd-log404'].host) ? conf[
			'hitd-log404'].host :
		'127.0.0.1:3000';

	var rules = {};

	rules['http/' + host + '/*'] = function(key, body, cb) {
		debug('PAGE NOT FOUND for key %s', key);
		cb(null, 404, 'PAGE NOT FOUND');
	};

	rules['http/*'] = function(key, body, cb) {
		debug('HOST NOT FOUND for key %s', key);
		cb(null, 404, 'HOST NOT FOUND');
	};


	handle(endpoint, conf, rules, cb);
};
