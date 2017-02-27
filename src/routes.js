import * as Handlers from './handlers';

const routes = [{
	method: 'GET',
	path: '/hello',
	handler: Handlers.hello
},
{
	method: 'GET',
	path: '/bye',
	handler: Handlers.bye
},
{
	method: 'GET',
	path: '/google',
	handler: Handlers.google
},
{
	method: 'GET',
	path: '/staff',
	handler: Handlers.staff
},
{
    method: 'GET',
    path: '/{param*}',
    handler: {
        directory: {
        	path:'public',
            listing: true
        }
    }
},
{
	method: 'POST',
	path: '/staff',
	handler: Handlers.staffPost
}];

export default routes