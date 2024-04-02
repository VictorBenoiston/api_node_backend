import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

const router = Router();

router.get('/', (req, res) => {
    return res.send('Hey!!!');
});

router.get('/test', (req, res, next) => {
    return res.send('Hey, Test!!!');
});

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