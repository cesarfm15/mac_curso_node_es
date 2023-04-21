<!-- 89 Servir Contenido Estico  -->
1. Para que cualquier persona que entra a la ruta principal vea un contenido estatico.
   1. Para eso se crea la carpeta 'public' que es la carpeta publica para todos.
   2. Dentro creamos un index.html
   3. Middleware: Funcion que se ejecuta antes de entrar al controller, routes, service, etc.
   4. app.use(express.static('public'));
   5. la carpeta 'public' tiene prioridad sobre las ruta principal '/'.
   6. podemos poner css/  js/
   7. solo funciona cuando el archivo dentro de la carpeta 'public' es index no index2, ni indexdada, ni nada.

2. Ejemplo con 404.html
   1. app.get('*', (req,res) => {
    // res.send('404|NotFound');
    res.sendFile(__dirname+'/public/404.html');
    })
       1. 

<!-- 90 Servir un Sitio Web Completo  -->
1. Yo no quiero que aparezca el generic.html, elements.html ni index.html
   1. app.get('/generic', function (req, res) {
    res.sendFile(__dirname+'/public/generic.html');
    })
   2. Para cambiar en el index.html hacemos lo siguiente
      1. En el href='/generic'
      2. En el href='/elements'

<!-- 91 Handlebars  -->
1. Para trabajar con sitios web semi-dinámicos
   1. Para las cosas son sencillas, si es una webapp(angular, react, vuejs).
   
2. Forma de trabajar con Handlebars
3. npm i handlebars(NO HACER), hacer npm i hbs
   1. hbs para usar con Express Engine
4. Lo archivos elements.html, index.html, generic.html, index_89, 404.html los guardamos en una carpeta 'template'.
5. Documentacion: https://github.com/pillarjs/hbs
6. Cuando seteo esto: app.set('view engine', 'hbs'), le digo que va a buscar si o si en la carpeta 'views' por lo que tiene que estar creada.
7. uso el método res.render que permite 2 parametros, 1. el archivo y 2. un objeto para pasar data dinamicamente.
8. 

<!-- 93 Usando PARTIALS -->
1. Para reutilizar codigo que tengo en un template.
   1. Para componentes que se repiten muchos como <header>, este se repite mucho, entonces puedo crear un 'partial' header y lo mando a llamar cuando lo necesito.
   2. Creamos una carpeta dentro de 'views' llamado 'partials'.
   3. Usamos lo que esta en la documentacion para definir su uso: https://github.com/pillarjs/hbs
   4. La parte del <header> del home.hbs lo cortamos y pegamos en header.hbs
   5. En home.hbs lo llamamos con los brackets {{> header}}
   6. Lo mismo haremos con <navbar> y <footer>
   7. Creamos archivos generic.hbs y elements.hbs para terminar con la lección.


<!-- 94 Preparar aplicacion para subirlo a un hosting -->
1. Preparar archivo app.js y package.json. Debo tener en cuenta el puerto en el que correra mi aplicacion.
   1. Para eso usamos el dotenv
2. Debo especificar en el package.json un comando en la propiedad 'scripts' que tiene que tener el nombre 'start'. Este le especificará al hosting que espera la aplicacion de node que hay ejecutar para levantar la aplicacion cuando este lista. No usar nodemon app.js porque si hay un cambio en el proyecto que esta subido en el servidor este se va a reiniciar con nodemon... osea si es payments y hacemos un cambio en un archivo js del payments en el mismo servidor como está con nodemon este se va a reiniciarlizar.
3. Se puede usar Yargs(mandando una bandera que estamos en modo produccion o desarrollo).
4. LOS pasos son 2:
   1. start en package.json
   2. port especifico desde la variable de entorno con el .env
5. Usar GIT
   1. crear .gitignore  node_modules/
   2. git init en carpeta del proyecto
   3. git add .
   4. git commit -m "WebServer 1st commit"
   5. enter

<!-- 95 Desplegar Aplicacion en Railway.app --> FALTA
1. Docker: crear imagen y esa img subirla a un web hosting.
2. Subir directamente la app de Node.
   
Usaremos railway.app para subirlo
1. Crear cuenta de github
2. Enlazar cuenta de github con railway.app
3. 



