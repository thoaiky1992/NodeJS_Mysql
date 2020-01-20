const express = require('express');
const app = express();
const server = require('http').createServer(app);
const userModel = require('./models/user.model.js')
app.use(express.static('./public'));
app.set('views' , './views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
server.listen(3000);

app.get('/',async (req,res) => {
	var obj = {
		username : "bao Bao",
		password : "123456",
		address  : "tp.hcm",
		phone    : 123456789
	};
	let user = await userModel.getUser(21);
	console.log(user)
	res.render('index.html',{user});
})