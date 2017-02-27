export function hello(request, reply){
	reply('Modular Hello World!')
}

export function bye(request, reply){
	reply('Modular Good Bye World!')
}

export function google(request, reply){
	reply.redirect('http://www.google.com')
}

export function staff(request, reply){
	reply(this.data)
}

export function staffPost(request, reply){
	this.data.push(request.payload)
	reply(this.data)
}