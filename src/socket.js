const init = (server)=>{
	var io = require('socket.io')(server.listener)

	io.on('connection', function(socket){
		console.log('new connection');
	});	
}

export default init