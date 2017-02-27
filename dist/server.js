'use strict';

var _hapi = require('hapi');

var _hapi2 = _interopRequireDefault(_hapi);

var _helpers = require('./lib/helpers');

var _staff = require('./data/staff');

var _staff2 = _interopRequireDefault(_staff);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var server = new _hapi2.default.Server();

server.connection({ port: process.env.PORT });
server.bind({ data: _staff2.default });
server.route(_routes2.default);
server.start((0, _helpers.launch)(server));
//# sourceMappingURL=server.js.map