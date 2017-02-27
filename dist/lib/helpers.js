'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var launch = exports.launch = function launch(server, err) {
	if (err) console.error('Error: ', err);
	console.log(process.env.TOKEN);
	console.log('Server started at ' + server.info.uri);
};
//# sourceMappingURL=helpers.js.map