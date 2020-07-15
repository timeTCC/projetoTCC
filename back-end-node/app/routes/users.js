var express = require('express');
var router = express.Router();
const Users = require('../model/users.model');

//aqui recebo as informações do front e respondo com sucesso ou erro
router.post('/authenticate', (req, res) =>{  //validação do usuario no BD
  Users.findOne({where: { //procuro uma linha ONDE usuario recebido pelo front seja igual o usuario do BD
    userName: req.body.user,     
  }}).then((user) =>{   
    if(!user){
      return res.status(404).send('user not found') //caso não encontre o usuario volta erro 400 "usuario nao encontrado"
    }
    if(user.userPassword === req.body.password){ //verificação da senha
      return res.send({user: user.userName}) //caso encontre o usuario eu retorno o usuario para o front
    }else{
      return res.status(400).send('invalid password') //senha invalida erro 400
    }
  }).catch((error) =>{
    return res.status(500).send(error) //caso de um erro de conexao com banco ou erro pq pifou msm eu retorno um erro 500 
  })
})

router.post('/registerUser', (req, res) =>{//endereço register
  Users.findOne({where: { //procura na tabela users
    userName: req.body.user, //onde userName é igual o parametro passado pelo front
  }}).then((user) =>{
    if(!user){// se na tabela não ouver nenhum usuario com o nome que esta sendo inserido entao ele cria um novo usuario
      Users.create({// é criado na tabela
        userName: req.body.user,
        userPassword: req.body.password,
      }).then(()=>{
        return res.status(201).send('usuário criado com sucesso')
      }).catch((error) =>{
        return res.status(500).send(error)
      })
    }else{  
      console.log('usuário já existe')  
      return res.status(400).send('usuário já existe')      
    }
  }).catch((error) =>{
    return res.status(500).send(error)
  })  
  console.log(req.body)  
})

//teste do console log 
// router.post('/registerUser', (req, res) =>{
//   console.log('user: ', req.body.user,'password: ', req.body.password);
//   res.send({user: req.body.user, password: req.body.password});
// })


module.exports = router;
