const Router = require('express');
const router = new Router();
const deviceController = require('../controllers/deviceController')
const checkRole = require('../middleware/CheckRoleMiddleware');

router.get('/', deviceController.getAll);
router.get('/info/:id', deviceController.getInfo);
router.get('/:id', deviceController.getOne);
router.post('/',  deviceController.create);

// checkRole('ADMIN'),

module.exports = router;
