import { testServer } from '../jest.setup';



describe('Cities - Update By Id', () => {
    it('Update an item', async () => {
        const ans1 = await testServer
            .put('/cities/10')
            .send({
                name: 'Mossoró',
                state: 'Rio'
            });

        expect(ans1.statusCode).toEqual(200);
        // Will check if the type is a number (index of a new db entry)
    });

    it('Not Enough Characters', async () => {
        const ans1 = await testServer
            .put('/cities/10')
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
            .put('/cities/10')
            .send({
                namse: 'mos',
                statae: 'Rof'
            });

        expect(ans1.statusCode).toEqual(400);
        // Testing if both body params are wrong. 
        expect(ans1.body.errors.body).toEqual({'state': 'state is a required field', 'name': 'name is a required field'});
    });

    it ('Id is equal or less than 0', async () => {
        const ans2 = await testServer
            .put('/cities/0');
        expect(ans2.statusCode).toEqual(400);
        expect(ans2.body.errors.params).toEqual({'id': 'id must be greater than 0'});
    });
});
