import { testServer } from '../jest.setup';



describe('Cities - Create', () => {
    it('Create an Input', async () => {
        const ans1 = await testServer
            .post('/cities')
            .send({
                name: 'Mossoró',
                state: 'Rio'
            });

        expect(ans1.statusCode).toEqual(201);
        // Will check if the type is a number (index of a new db entry)
        expect(typeof ans1.body).toEqual('number');
    });

    it('Not Enough Characters', async () => {
        const ans1 = await testServer
            .post('/cities')
            .send({
                name: 'mo',
                state: 'Ro'
            });

        expect(ans1.statusCode).toEqual(400);
        // Will check if the res.body has either of those properties.
        expect(ans1.body).toHaveProperty('errors.body.state' || 'errors.body.name', 'state' + ' must be at least 3 characters' || 'name' + ' must be at least 3 characters');
    });

    it('Missing Required Fields', async () => {
        const ans1 = await testServer
            .post('/cities')
            .send({
                namse: 'mos',
                statae: 'Rof'
            });

        expect(ans1.statusCode).toEqual(400);
        // Testing if both body params are wrong. 
        expect(ans1.body.errors.body).toEqual({'state': 'state is a required field', 'name': 'name is a required field'});
    });
});