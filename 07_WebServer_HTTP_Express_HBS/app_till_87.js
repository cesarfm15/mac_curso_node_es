const http = require('http');

/* 
req: lo que viene de la solicitud que este intentando accecer a este webserver
res: lo que respondemos cuando procesamos la request
*/
const server = http.createServer((req, res) => {
 
/*   res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');     */
  res.writeHead(200, {'Content-Type': 'application/json'});
  
  const persona = {
    id: 31,
    nombre: 'César'
  }

  res.end(JSON.stringify(persona));
});

server.listen(3005, () => {
  console.log('Server running at http://localhost:3005/');
});
