const {Router} = require('express');

const router = Router();
const districts = require('../../controllers/districts');
const {validation} = require('../../middlewares/validation');
const {DistrictsSchema, DistrictsQuerySchema} = require('../../schemas/districts');

router.post('/', validation(DistrictsSchema, 'body'), districts.create);
router.get('/', validation(DistrictsQuerySchema, 'query'), districts.list);
router.get('/:id', districts.retrieve);
router.put('/:id', validation(DistrictsSchema, 'body'), districts.update);
router.delete('/:id', districts.delete);

module.exports = router;
