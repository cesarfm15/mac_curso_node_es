<!-- 106 Codigo de respuestas HTTP, es un pdf  -->
1. Codigo de respuestas HTTP: Es un pdf



SE QUE ES UN MIDDLE CUANDO EN EL EJEMPLO USA UN APP.USE()



<!-- 109 Cors  -->
var express = require('express')
var cors = require('cors')
var app = express()
 
app.use(cors())
 
app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})
 
app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})

<!-- 110 Rutas y  Controladores  -->
1. Router es una funcion de Express.
2. 