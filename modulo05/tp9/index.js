const rootpath = require('rootpath')();
const express = require('express');
const app = express();
const morgan = require('morgan');
const config = require('./src/config/config.json');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('tiny'));
morgan(':method :url :status :res[content-length] - :response-time ms');



app.get('/', function (req, res) {
    res.send('ALPHA-SILICON');
});


//variables
const cursosCont = require('./src/controller/cursosControllers.js');
app.use('/api/cursos',cursosCont);

const materiasCont = require('./src/controller/materiasControllers.js');
app.use('/api/materias',materiasCont);

const sedesCont = require('./src/controller/sedesControllers.js');
app.use('/api/sedes',sedesCont);

const usuariosCont = require('./src/controller/usuariosControllers.js');
app.use('/api/usuarios',usuariosCont);

/*
const userCont = require('userController.js');
app.use('/api/usuario',userCont);
*/

app.listen(config.server.port, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log(`Server iniciado en puerto:${config.server.port}`);
    }
});
