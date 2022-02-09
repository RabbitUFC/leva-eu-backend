const {Router} = require('express');

const router = Router();
const rideRequests = require('../../controllers/rides-requests');
const {validation} = require('../../middlewares/validation');
const {RidesRequestsSchema, RidesRequestsUpdateSchema, RidesRequestsQuerySchema} = require('../../schemas/rides-requests');

router.post('/', validation(RidesRequestsSchema, 'body'), rideRequests.create);
router.get('/', validation(RidesRequestsQuerySchema, 'query'), rideRequests.list);
router.get('/:id', rideRequests.retrieve);
router.put('/:id', validation(RidesRequestsUpdateSchema, 'body'), rideRequests.update);
router.delete('/:id', rideRequests.delete);

module.exports = router;
