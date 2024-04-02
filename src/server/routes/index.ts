import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

import { CitiesController } from './../controllers';

const router = Router();

router.get('/', (req, res) => {
    return res.send('Hey!!!');
});




router.post('/cities', CitiesController.create);

router.post('/cities/id', CitiesController.updateReq);


router.post('/testpost', (req, res) => {
    const { message } = req.body;

    res.status(201);
    res.json({message});
});


router.post('/clients/create', (req, res) => {
    const { id, name } = req.body;

    res.status(201);
    res.json({ id, name });

});

router.post('/clients/confer/:id', (req, res) => {
    const { id } = req.params;

    res.status(201);
    console.log(`Created: ${id}`);
    res.json({ id });
});

router.post('/clients', (req, res) => {
    const { test_n } = req.query;

    console.log(test_n);

});



export { router };