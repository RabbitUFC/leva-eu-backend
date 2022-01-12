const {Router} = require ('express');
const router = Router();

const users = require('./modules/users');

router.use('/users', users);

module.exports = router;
