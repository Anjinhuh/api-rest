const mysql = require('mysql')


const con = mysql.createConnection({
    user: 'root',
    port: 3306, 
    database: 'myapi'
})


module.exports = {
    async CREATE_USER_DB(req, res){
        con.query(`INSERT INTO users(id, name, age) VALUES(${req.params.id}, '${req.params.name}', ${req.params.age})`, function(a, b, c){
            res.send('SUCESSO')
        })
    },
    async GET_USERS(req, res){
        con.query('SELECT * FROM users', function(err, results, field){
            res.send(results)
        })
    },
    async DELETE_USER_DB(req, res){
        con.query(`DELETE FROM users WHERE id=${Number(req.params.id)}`, function(err, results, field){
            if(err === null){
                res.send('DELETADO COM SUCESSO')
            }
        })
    }, 
    async UPDATE_USER_DB(req, res){
        con.query(`UPDATE users SET name='${req.params.name}', age=${req.params.age} WHERE id=${req.params.id}`, function(err,results, fields){
            console.log(err, results)
            res.send('FINISH')
        })
    }
}