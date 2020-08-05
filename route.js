const express = require('express');
const route = express.Router();

const db = require('./db');
const bodyParser = require('body-parser');

route.use(bodyParser.json());


route.post('/post',function(req,res,next){

	var val =[];
	var id = req.body.id;
	var package = req.body.package;
	val.push([id,package]);
	var temp = "select * from userAppPackage where id = '"+id+"' and package = '"+package+"' ";

	db.query(temp,(error,result,field)=>{
		
		if(result == "")
		{
			var sql = 'INSERT INTO 	userAppPackage(id,package) VALUES ? ';
			db.query(sql, [val], (err,reslt,fld)=>{})
			res.send({"do":"add"});

			db.query("select * from appPackageTest where package = '"+package+"'", (err,ans,field_1)=>{
				if(ans == ""){
					var sql = "INSERT INTO 	appPackageTest(package) VALUES('"+package+"') ";
					db.query(sql, (err_,reslt_,fld_)=>{})
				}
			})
		}
		else
		{
			res.send({"do":"nothing"});
		}		
	})

});

// For multiple packages
// route.post('/post',function(req,res,next){
// 		var id = req.body.id;
// 		var pkg =[]; 
// 		var val =[];
// 		for( var i =0;i<req.body.package.length;i++){
// 			pkg.push(req.body.package[i]);
// 		}
// 		for( var i =0;i<pkg.length;i++)
// 		{
// 			val.push([id,pkg[i]]);
// 		}

// 		for( var i =0 ; i<val.length;i++)
// 		{
			
// 			var ID = val[i][0];
// 			var pack = val[i][1];
// 			console.log(ID,pack);
// 			var temp = "select * from userAppPackage where id = '"+ID+"' and package = '"+pack+"' ";

// 			db.query(temp,(error,result,field)=>{
				
// 				if(result == "")
// 				{
// 					var t = [];
// 					t.push([ID,pack]);
// 					var sql = 'INSERT INTO 	userAppPackage(id,package) VALUES ? ';
// 					db.query(sql, [t], (err,reslt,fld)=>{})
// 					// res.send({"do":"add"});

// 					db.query("select * from appPackageTest where package = '"+pack+"'", (err,ans,field_1)=>{
// 						if(ans == ""){
// 							var sql = "INSERT INTO 	appPackageTest(package) VALUES('"+pack+"') ";
// 							db.query(sql, (err_,reslt_,fld_)=>{})
// 						}
// 					})
// 				}
// 				else
// 				{
// 					res.send({"do":"nothing"});
// 				}		
// 			})
// 		}		
// });

route.get('/get',function(req,res,next){
	var sql = 'select *from userAppPackage ';

	db.query(sql,  (error,result,field)=>{
		if(error){
			throw error;
		}
		console.log('get request');
		res.send(result);
	})
});

module.exports = route;





