//Importando o express
const express = require ('express');
const app = express();


//atividade 1
const estudantes = [
    {id:1, nome: 'Juliana', idade: 17},
    {id:2, nome: 'Karyne', idade: 16},
    {id:3, nome: 'Gabriely', idade: 16},
    {id:4, nome: 'Daiane', idade: 16},
    {id:5, nome: 'Débora', idade: 17},
    {id:6, nome: 'Ana', idade: 16},
    {id:7, nome: 'Lucas', idade: 16},
    {id:8, nome: 'Guilherme', idade: 16},
    {id:9, nome: 'Arthur', idade: 16}
];


app.get('/estudante/:id', (req,res) => {


let id = req.params.id;
let estudante = estudantes [id-1]
if(estudante){
    res.send('nome:' + estudante.nome +
        'idade:' + estudante.idade);
} else {
    res.send('Estudante não encontrado');
}
});




//atividade 2
app.get('/adicao/:n1/:n2', (req,res) => {
    let n1 =parseInt(req.params.n1);
    let n2=parseInt (req.params.n2);
     if (!isNaN(n1) & !isNaN(n2)) {
    let soma = n1+n2
      res.send('Resultado = ' + soma.toString());
}else{
   
  res.send('Resultado não encontrado, não é um número');
}});

app.get('/subtracao/:n1/:n2', (req,res) => {
    let n1= parseInt(req.params.n1);
    let n2= parseInt(req.params.n2);
     if (!isNaN(n1) & !isNaN(n2)) {
    let subtracao = n1-n2;
    res.send('Resultado:'+subtracao.toString());
    }else{
         res.send('Resultado não encontrado, não é um número');
    }});

app.get('/divisao/:n1/:n2', (req,res) => {
    let n1= parseInt(req.params.n1);
    let n2= parseInt(req.params.n2);
     if (!isNaN(n1) & !isNaN(n2)) {
    let divisao = n1/n2;
    res.send('Resultado:'+divisao.toString()); 
    }else{
       res.send('Resultado não encontrado, não é um número'); 
    }
});

app.get('/multiplicacao/:n1/:n2',(req,res) => {

    let n1 = parseInt(req.params.n1);
    let n2 = parseFloat(req.params.n2);
     if (!isNaN(n1) & !isNaN(n2)) {
    let multiplicacao = n1*n2;
    res.send('Resultado:'+multiplicacao.toString());
    }else{
       res.send('Resultado não encontrado, não é um número');   
    }


});

app.listen (3000, () => {
    console.log('pegou! :) ')
    console.log('Rota de Adiçãop: http://localhost:3000/adicao/20/5');
    console.log('Rota de Subtração: http://localhost:3000/subtracao/30/20');
    console.log('Rota de divisão: http://localhost:3000/divisao/20/2');
    console.log('Rota de multiplicação: http://localhost:3000/multiplicacao/20/2');
    console.log("rota de estudante: http://localhost:3000/estudante/6");

});