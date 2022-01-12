const {Router} = require ('express');
const router = Router();

const auth = require('./modules/auth');
const users = require('./modules/users');

router.use('/auth', auth);
router.use('/users', users);

module.exports = router;
