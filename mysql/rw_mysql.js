
var mysql = require('mysql');

var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : 'haifeng',
	database : 'genduyike',
});

function MySql() {

	this.ConnectMySql = function() {
		connection.connect();
	}

	this.DisconnectMySql = function() {
		connection.end();
	}

	this.AddPatientInfo = function(wechat_num, phone_num, city, callback) { 

		// check if already exist
                var sql = 'select * from patients where wechat_num = ' + "\'" + wechat_num + "\'";
                connection.query(sql, function(err, result) {
                        if (err) {
                                console.log('[SELECT ERROR] - ',err.message);
                                return;
                        }

			if (result.length > 0) {
				// exist
				callback(true, result)
			}
			else {
				// new add
				var addSql = 'INSERT INTO patients(patient_id, wechat_num, phone_num, city) VALUES(0,?,?,?)';
				var addSqlParams = [wechat_num, phone_num, city];
				connection.query(addSql, addSqlParams, function(err, result) {
		                        if (err) { 
	                        	        console.log('[SELECT ERROR] - ',err.message);
        	                        	return;
                		        }
					callback(false, result);
				});			
			}
                });
	}; 

	this.AddDoctorInfo = function(wechat_num, phone_num, name, age, identity_id, hospital, department, qualification_certificate_id, professional_certificate_id, city, push_status, order_status, audit_status, callback) {

                // check if already exist
                var sql = 'select * from doctors where wechat_num = ' + "\'" + wechat_num + "\'";
                connection.query(sql, function(err, result) {
                        if (err) {
                                console.log('[SELECT ERROR] - ',err.message);
                                return;
                        }

                        if (result.length > 0) {
                                // exist
                                callback(true, result)
                        }
                        else {
                                // new add
		                var addSql = 'INSERT INTO doctors(doctor_id, wechat_num, phone_num, name, age, identity_id, hospital, department, qualification_certificate_id, professional_certificate_id, city, push_status, order_status, audit_status) VALUES(0,?,?,?,?,?,?,?,?,?,?,?,?,?)';
                		var addSqlParams = [wechat_num, phone_num, name, age, identity_id, hospital, department, qualification_certificate_id, professional_certificate_id, city, push_status, order_status, audit_status];
                                connection.query(addSql, addSqlParams, function(err, result) {
                                        if (err) { 
                                                console.log('[SELECT ERROR] - ',err.message);
                                                return;
                                        }
                                        callback(false, result);
                                });
                        }
                });
        }; 

        this.AddOrderInfo = function(score, left_message, patient_id, doctor_id, illness_describe, chat_record, order_status, callback) {

                var addSql = 'INSERT INTO orders(order_id, score, left_message, patient_id, doctor_id, illness_describe, chat_record, order_status) VALUES(0,?,?,?,?,?,?,?)';
                var addSqlParams = [score, left_message, patient_id, doctor_id, illness_describe, chat_record, order_status];
                connection.query(addSql, addSqlParams, function(err, result) {
		        if (err) {
		                console.log('[INSERT ERROR] - ',err.message);
        		        return;
        		}
                        callback(result);
                });
        };
}

module.exports = MySql;
