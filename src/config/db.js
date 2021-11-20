const mysql = require('mysql');

const db = mysql.createConnection({  // 연결하는 db에 대한 정보 
    host: "localhost",
    user: "root",
    password: "12345678",
    database : "nodejs",
});

db.connect();  //db 연결 요청 


module.exports = db;