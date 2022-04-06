const services = require( '../services/service' )


module.exports = {
     getUser(req, res){
        services.dbGetUser(req, res)
     },
     createUser(req, res){
        services.dbCreateUser(req, res)
     }
}
