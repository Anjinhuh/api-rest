
module.exports = {
    dbGetUser(req, res){
        return res.json({id: 1, nome: 'Julinao'})
    },
    dbCreateUser(req, res){
        return res.json({id: req.params.id, nome: req.params.nome})
    }
}