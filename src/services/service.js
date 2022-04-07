const database = require('../db/connection')



module.exports = {
    dbGetUser(req, res){
        return database.GET_USERS(req, res)
    },
    async dbCreateUser(req, res){
        await database.CREATE_USER_DB(req, res)
    }, 
    async dbDeleteUser(req, res){
        await database.DELETE_USER_DB(req, res)
    },
    async dbUpdateUser(req, res){
        await database.UPDATE_USER_DB(req, res)
    }
}