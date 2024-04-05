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



// router.post('/all')

export { router };