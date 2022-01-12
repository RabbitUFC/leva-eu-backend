const {Router} = require ('express');
const router = Router();

const auth = require('./modules/auth');
const pickupPoints = require('./modules/pickup-points');
const users = require('./modules/users');

router.use('/auth', auth);
router.use('/users', users);
router.use('/pickup-points', pickupPoints);

module.exports = router;
