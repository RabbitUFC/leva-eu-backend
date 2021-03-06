const {Router} = require('express');

const router = Router();
const routines = require('../../controllers/routines');
const {validation} = require('../../middlewares/validation');
const {RoutinesSchema, RoutinesUpdateSchema} = require('../../schemas/routines');

router.post('/', validation(RoutinesSchema, 'body'), routines.create);
router.get('/', routines.list);
router.get('/:id', routines.retrieve);
router.put('/:id', validation(RoutinesUpdateSchema, 'body'), routines.update);
router.delete('/:id', routines.delete);

module.exports = router;
