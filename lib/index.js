var handle = require('hitd-handler'),
	debug = require('hitd-debug')('hitd-log404');

module.exports = function(endpoint, conf, cb) {

	var host = (conf['hitd-log404'] && conf['hitd-log404'].host) ? conf[
			'hitd-log404'].host :
		'127.0.0.1:3000';

	var rules = {};

	rules['http/*'] = function(key, body, cb) {
	 	var parts = key.split('/');
		var message =  parts[1] == host ?  'PAGE NOT FOUND' :  'HOST NOT FOUND';
		debug('%s for key %s', message , key);
		cb(null, 404, message );
	};


	handle(endpoint, conf, rules, cb);
};
