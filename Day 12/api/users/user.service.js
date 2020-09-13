const pool = require('../../config/database')

module.exports = {
    create: (data, callback) => {
        pool.query(
            `INSERT INTO REGISTRATION(firstName,lastName,gender,email,password,number) VALUES(?,?,?,?,?,?)`,
            [
                data.firstName,
                data.lastName,
                data.gender,
                data.email,
                data.password,
                data.number
            ],
            (error, results, fields) => {
                if(error) {
                    return callback(error)
                }
                return callback(null, results)
            }
        );
    }
}