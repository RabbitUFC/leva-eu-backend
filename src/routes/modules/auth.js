const {Router} = require('express');

const router = Router();
const auth = require('../../controllers/auth');

router.post('/sign-in', auth.signIn);

module.exports = router;
