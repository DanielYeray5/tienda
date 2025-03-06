const {ProductController} = require('../controllers/products.controller');

const router = require('express').Router();

//? Put all the routes from file products.controller

router.get('/', ProductController.getAll)
router.get('/:id', ProductController.getOneById)
router.post('/', ProductController.create)
router.patch('/:id', ProductController.update)
router.delete('/:id', ProductController.delete)

module.exports = router;