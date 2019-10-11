const express = require('express')
const bodyParser = require('body-parser')
const app = express()


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());


 
app.get('/', function (req, res) {
  res.json({'mensaje':'BienVenido al api de NODE mas Mongo + mongodb + robot3t'})
});
 


app.get('/productos', function (req, res) {
    res.json({'data':'aqui van los productos'})
  });

  app.get('/producto/:id', function (req, res) {
    res.json({'data':`aqui recibi el id para mostar un producto.ID: ${req.params.id}`
})
  });

  app.post('/producto', function (req, res) {
    let datos = req.body;
    if(datos.nombre==undefined || 
     datos.marca==undefined||
     datos.color==undefined
     ){
         res.status(400).json({"err":"datos incompletos"
        
        });

    }else{
res.json({'dat':req.body})
    }
  });
  app.listen(3000, ()=>{
    console.log("Servidor Online");
})