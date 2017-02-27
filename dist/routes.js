'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _handlers = require('./handlers');

var Handlers = _interopRequireWildcard(_handlers);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var routes = [{
	method: 'GET',
	path: '/hello',
	handler: Handlers.hello
}, {
	method: 'GET',
	path: '/bye',
	handler: Handlers.bye
}, {
	method: 'GET',
	path: '/google',
	handler: Handlers.google
}, {
	method: 'GET',
	path: '/staff',
	handler: Handlers.staff
}, {
	method: 'POST',
	path: '/staff',
	handler: Handlers.staffPost
}];

exports.default = routes;
//# sourceMappingURL=routes.js.map