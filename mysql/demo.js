var MySql = require('./rw_mysql');

mysql = new MySql();

/*----------------------------------------------------------------------------------------------------------------*/

// connect
mysql.ConnectMySql();

// add patient
mysql.AddPatientInfo('last21', '18500813403', 'tianjin', function(exist, res) {
	if (exist) {
		console.log("the patient has already registered!!")
	}
	else {
		console.log("the patient will be registered now!!")
		console.log(res);
	}
});

// add doctor
mysql.AddDoctorInfo('last21', '18500813403', 'Li', 20, '220110198901107867', 'ZhongYiYuan', 0, 'AA', 'BB', 'tianjin', 0, 1, 1, function(exist, res) {
        if (exist) {
                console.log("the doctor has already registered!!")
        }
        else {
                console.log("the doctor will be registered now!!")
                console.log(res);
        }
});

// add order
function callback_AddOrderInfo(result) {
        console.log('--------------------------INSERT----------------------------');
        console.log('INSERT ID:',result);
        console.log('------------------------------------------------------------\n\n');
}
mysql.AddOrderInfo(5, 'the doctor is so kindly!!', 4, 5, 'illness', 'illness chat', 0, callback_AddOrderInfo);

// disconnect
//mysql.DisconnectMySql();

/*----------------------------------------------------------------------------------------------------------------*/

