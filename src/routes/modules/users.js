const {Router} = require('express');

const router = Router();
const users = require('../../controllers/users');
const {validation} = require('../../middlewares/validation');
const {UsersUpdateSchema} = require('../../schemas/users');

router.get('/', users.list);
router.get('/:id', users.retrieve);
router.put('/:id', validation(UsersUpdateSchema, 'body'), users.update);
router.delete('/:id', users.delete);

module.exports = router;
