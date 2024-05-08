import { Router } from 'express';

import { CitiesController, PeopleControllers, UsersControllers } from './../controllers';
import { ensureAuthenticated } from '../shared/middlewares';

const router = Router();

router.get('/', (req, res) => {
    return res.send('Hey!!!');
});



router.post('/cities', ensureAuthenticated, CitiesController.createValidation, CitiesController.create);
router.get('/cities', ensureAuthenticated, CitiesController.getAllValidation, CitiesController.getAll);
router.get('/cities/:id', ensureAuthenticated, CitiesController.getIdParamValidation, CitiesController.getById);
router.put('/cities/:id', ensureAuthenticated, CitiesController.updateByIdValidation, CitiesController.updateById);
router.delete('/cities/:id', ensureAuthenticated, CitiesController.deleteByIdValidation, CitiesController.deleteById);

router.post('/people', ensureAuthenticated, PeopleControllers.createValidation, PeopleControllers.create);
router.get('/people', ensureAuthenticated, PeopleControllers.getAllValidation, PeopleControllers.getAll);
router.get('/people/:id', ensureAuthenticated, PeopleControllers.getIdParamValidation, PeopleControllers.getById);
router.put('/people/:id', ensureAuthenticated, PeopleControllers.updateByIdValidation, PeopleControllers.updateById);
router.delete('/people/:id', ensureAuthenticated, PeopleControllers.deleteByIdValidation, PeopleControllers.deleteById);

router.post('/signUp', UsersControllers.signUpValidation, UsersControllers.signUp);
router.post('/signIn', UsersControllers.signInValidation, UsersControllers.signIn);



// router.post('/all')

export { router };