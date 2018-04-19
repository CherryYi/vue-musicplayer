import express from 'express'
import mysql from 'mysql'

var api = express.Router();

var connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : '123456',
    database : 'mymusic'
  });
  
  connection.connect();
  

  


api.post('/login', function(req, res) {
    var user = req.body;
    connection.query("SELECT * FROM `users` WHERE `username` = '"+ user.username +"' AND `pwd` = '"+ user.pwd +"'", function (error, results, fields) {
       console.log(error, results, fields)
        if (error) {
            res.json({
                msg: error,
            });
        } else {
            if(results.length === 1){
                res.json({
                    msg: "登录成功"
                });
            } else {
                res.json({
                    msg: "登录失败"
                });
            }
        }
      });

    console.log('login......', req.body);
});


module.exports = api;