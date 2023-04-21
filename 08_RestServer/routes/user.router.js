const { Router } = require('express');
const { getAllUsers } = require('../controllers/user.controller');
const router = Router();


//getAllUsers es una referencia del usuario que está en el controlador
router.get('/', getAllUsers); 


module.exports = router;