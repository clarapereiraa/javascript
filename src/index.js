const express = require('express') //importa o modulo express

//define uma classe para organizar a logica de aplicação
class AppController{
    constructor(){
        //cria uma nova instancia do express dentro da classe
        this.express = express();
        //chama o metodo middlewares para config os middlewares
        this.middlewares();
        //chama o metodo routes para definir as rotas da Api 
        this.routes();
    }
    middlewares(){
        //permitir que aplicação receba dados em formato JSON nas requisições
        this.express.use(express.json());
    }
    //defineas rotas da nossa Api
    routes(){
        //define uma rota GET para o caminho health
        this.express.get('/health/',(req,res) => 
            {res.send({ nome: "Clara", idade: "16", cpf: "45052242875"});
    });//ess rota é usada para verificar se Api está OK
    }
}
//Exportando a instancia de Express configurada, para que seja acessada em outros arquivos
module.exports = new AppController().express;