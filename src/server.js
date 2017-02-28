import Hapi from 'hapi';
import Inert from 'inert';
import Server from 'socket.io';
import {launch} from './lib/helpers';
import staff from './data/staff';
import routes from './routes';
import init from './socket'

const server = new Hapi.Server();

server.register(Inert, (err)=>{
	if(err)console.log(err)

	server.connection({port: process.env.PORT})		
	server.bind({data:staff})
	server.route(routes)	
	server.start(launch(server))

	init(server)
})



