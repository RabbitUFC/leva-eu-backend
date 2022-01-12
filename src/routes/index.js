const {Router} = require ('express');
const router = Router();

const auth = require('./modules/auth');
const districts = require('./modules/districts');
const pickupPoints = require('./modules/pickup-points');
const routines = require('./modules/routines');
const users = require('./modules/users');

router.use('/auth', auth);
router.use('/users', users);
router.use('/pickup-points', pickupPoints);
router.use('/districts', districts);
router.use('/routines', routines);

module.exports = router;
