import Hapi from 'hapi';


import {launch} from './lib/helpers';
import staff from './data/staff';
import routes from './routes';

const server = new Hapi.Server();

server.connection({port: process.env.PORT})
server.bind({data:staff})
server.route(routes)
server.start(launch(server))