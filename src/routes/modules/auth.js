const {Router} = require('express');

const router = Router();
const auth = require('../../controllers/auth');
const users = require('../../controllers/users');
const {validation} = require('../../middlewares/validation');
const {UsersCreateSchema} = require('../../schemas/users');

router.post('/sign-up', validation(UsersCreateSchema, 'body'), users.create);
router.post('/sign-in', auth.signIn);
router.post('/recover-password', auth.recoverPassword);
router.put('/reset-password', auth.resetPassword);
router.post('/confirm-account', users.confirmAccount);

module.exports = router;
