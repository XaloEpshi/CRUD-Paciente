var express = require('express');
var pacienteController = require('../controllers/pacienteController'); // Importa el controlador de pacientes
var upload = require('../multer_config'); // Importa la configuración de multer para la carga de archivos
var router = express.Router(); // Crea un router de Express

// Ruta de prueba
router.get('/', (req, res) => { 
    return res.send('Ruta de Prueba para pacientes'); 
}); // http://localhost:3000/api/pacientes

// Rutas para el manejo de pacientes
router.post('/paciente', pacienteController.nuevoPaciente); // Ruta para crear un nuevo paciente
router.put('/paciente/:id', pacienteController.update); // Ruta para actualizar un paciente por su ID
router.delete('/paciente/:id', pacienteController.delete); // Ruta para eliminar (inhabilitar) un paciente por su ID
router.get('/paciente/:id', pacienteController.getPaciente); // Ruta para obtener un paciente por su ID
router.get('/pacientes/:last?', pacienteController.getPacientes); // Ruta para obtener todos los pacientes
router.get('/pacientes-eliminados/', pacienteController.getPacientesEliminados); // Ruta para obtener los pacientes eliminados
router.get('/paciente/search/:search', pacienteController.search); // Ruta para buscar pacientes por criterio de búsqueda

// Rutas para la carga y obtención de fotos de pacientes
router.post('/pacientes/photo/:id?', upload, pacienteController.upload); // Ruta para cargar una foto de paciente
router.get('/paciente/photo/:filename', pacienteController.getPhoto); // Ruta para obtener la foto de un paciente

module.exports = router; // Exporta el router para ser utilizado por la aplicación

