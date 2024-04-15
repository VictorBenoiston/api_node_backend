import { Router } from 'express';

import { CitiesController, PeopleControllers } from './../controllers';
import { createValidation } from '../controllers/cities/Create';

const router = Router();

router.get('/', (req, res) => {
    return res.send('Hey!!!');
});



router.post('/cities', CitiesController.createValidation, CitiesController.create);
router.get('/cities', CitiesController.getAllValidation, CitiesController.getAll);
router.get('/cities/:id', CitiesController.getIdParamValidation, CitiesController.getById);
router.put('/cities/:id', CitiesController.updateByIdValidation, CitiesController.updateById);
router.delete('/cities/:id', CitiesController.deleteByIdValidation, CitiesController.deleteById);

router.post('/people', PeopleControllers.createValidation, PeopleControllers.create);
router.get('/people', PeopleControllers.getAllValidation, PeopleControllers.getAll);
router.get('/people/:id', PeopleControllers.getIdParamValidation, PeopleControllers.getById);
router.put('/people/:id', PeopleControllers.updateByIdValidation, PeopleControllers.updateById);
router.delete('/people/:id', PeopleControllers.deleteByIdValidation, PeopleControllers.deleteById);




// router.post('/all')

export { router };