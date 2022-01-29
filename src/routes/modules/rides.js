const {Router} = require('express');

const router = Router();
const rides = require('../../controllers/rides');
const {validation} = require('../../middlewares/validation');
const {RidesSchema, RidesUpdateSchema, RidesQuerySchema} = require('../../schemas/rides');

router.post('/', validation(RidesSchema, 'body'), rides.create);
router.get('/', validation(RidesQuerySchema, 'query'), rides.list);
router.get('/:id', rides.retrieve);
router.put('/:id', validation(RidesUpdateSchema, 'body'), rides.update);
router.delete('/:id', rides.delete);

module.exports = router;
