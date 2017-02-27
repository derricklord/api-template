'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.hello = hello;
exports.bye = bye;
exports.google = google;
exports.staff = staff;
exports.staffPost = staffPost;
function hello(request, reply) {
	reply('Modular Hello World!');
}

function bye(request, reply) {
	reply('Modular Good Bye World!');
}

function google(request, reply) {
	reply.redirect('http://www.google.com');
}

function staff(request, reply) {
	reply(this.data);
}

function staffPost(request, reply) {
	this.data.push(request.payload);
	reply(this.data);
}
//# sourceMappingURL=handlers.js.map