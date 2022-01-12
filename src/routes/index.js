const {Router} = require ('express');
const router = Router();

const auth = require('./modules/auth');
const districts = require('./modules/districts');
const pickupPoints = require('./modules/pickup-points');
const users = require('./modules/users');

router.use('/auth', auth);
router.use('/users', users);
router.use('/pickup-points', pickupPoints);
router.use('/districts', districts);

module.exports = router;
