const {Router} = require('express');

const router = Router();
const pickupPoints = require('../../controllers/pickup-points');
const {validation} = require('../../middlewares/validation');
const {PickupPointCreateSchema, PickupPointUpdateSchema, PickupPointQuerySchema} = require('../../schemas/pickup-points');

router.post('/', validation(PickupPointCreateSchema, 'body'), pickupPoints.create);
router.get('/', validation(PickupPointQuerySchema, 'query'), pickupPoints.list);
router.get('/:id', pickupPoints.retrieve);
router.put('/:id', validation(PickupPointUpdateSchema, 'body'), pickupPoints.update);
router.delete('/:id', pickupPoints.delete);

module.exports = router;
