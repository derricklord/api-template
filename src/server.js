import Hapi from 'hapi';
import Inert from 'inert';


import {launch} from './lib/helpers';
import staff from './data/staff';
import routes from './routes';


const server = new Hapi.Server();




server.register(Inert, (err)=>{
	if(err)console.log(err)
	server.connection({port: process.env.PORT})		
	server.bind({data:staff})
	server.route(routes)	
	server.start(launch(server))
})
