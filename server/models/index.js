const moongoose = require('mongoose');

moongoose.set('debug', true);
moongoose.Promise = global.Promise;
// vote - это название бд - произвольное
moongoose.connect(process.env.DATABASE, { useNewUrlParser: true });

module.exports.User = require('./user');
module.exports.Poll = require('./poll');