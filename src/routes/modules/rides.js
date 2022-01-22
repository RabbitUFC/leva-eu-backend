const {Router} = require('express');

const router = Router();
const rides = require('../../controllers/rides');
const {validation} = require('../../middlewares/validation');
const {RidesSchema} = require('../../schemas/rides');

router.post('/', validation(RidesSchema, 'body'), rides.create);
router.get('/', rides.list);
router.get('/:id', rides.retrieve);
router.put('/:id', validation(RidesSchema, 'body'), rides.update);
router.delete('/:id', rides.delete);

module.exports = router;
