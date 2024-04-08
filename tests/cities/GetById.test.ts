import { testServer } from '../jest.setup';



describe('Cities - Get By ID', () => {
    it('Retrieve Item with ID', async () => {
        const ans1 = await testServer
            .get('/cities/12');
        expect(ans1.statusCode).toEqual(200);
        expect(ans1.body).toHaveProperty('name');
    });

    it ('Id is equal or less than 0', async () => {
        const ans2 = await testServer
            .get('/cities/0');
        expect(ans2.statusCode).toEqual(400);
        expect(ans2.body.errors.params).toEqual({'id': 'id must be greater than 0'});
    });

});