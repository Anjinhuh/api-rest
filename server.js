const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 3001
const controller = require('./src/controllers/controller')

app.use(require("cors")())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
// NECESSITA DE ADICIONAR DEV E COLOCAR PARA VER MAIS

 
app.get('/users', async (req, res) =>{
   controller.getUser(req, res)
})
app.post('/createUser/:id/:name/:age', async(req, res)=>{
    controller.createUser(req, res)
})
app.delete('/deleteUser/:id', async(req, res)=>{
    controller.deleteUser(req, res)
})
app.put('/updateUser/:id/:name/:age', async(req, res)=>{
    controller.updateUser(req, res)
})

app.listen(port, () =>{
        console.info(`Aplicação rodando na porta ${port}!`)
});
console.log("Servidor escutando na porta "+ port +"...")