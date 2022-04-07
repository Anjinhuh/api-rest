const services = require( '../services/service' )


module.exports = {
     getUser(req, res){
        services.dbGetUser(req, res)
     },
     createUser(req, res){
        services.dbCreateUser(req, res)
     },
     deleteUser(req, res){
        services.dbDeleteUser(req, res)
     },
     updateUser(req, res){
        services.dbUpdateUser(req, res)
     }
}
