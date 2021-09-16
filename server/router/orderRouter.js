const Router = require('express');
const router = new Router();
const orderController = require('./../controllers/orderController');
const checkRole = require('../middleware/CheckRoleMiddleware');

router.post('/', orderController.create);
router.get('/', checkRole('ADMIN'), orderController.getAll);

module.exports = router;