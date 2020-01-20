let db = require('../config/connectDB');
var SinhVien={
	create: function(user,callback){
		return new Promise((resolve,reject) => {
			db.query("Insert into users(username,password,address,phone) values(?,?,?,?)",[user.username,user.password,user.address,user.phone],(err,data)=>{
				resolve(data);
			});
		})
	},
	getUser : function(id){
		return new Promise((resolve,reject) => {
			db.query("Select * from users where id = ?",[id],(err,data) => {
				resolve(data);
			})
		});
	}
};
 module.exports=SinhVien;