import { testServer } from '../jest.setup';



describe('Cities - Get All', () => {
    it('Retrieve all', async () => {

        const ans1 = await testServer
            .post('/cities')
            .send({name: 'Mossoro', state: 'Rio Grande'});
        expect(ans1.statusCode).toEqual(201);

        const ans2 = await testServer
            .get('/cities')
            .send();

        expect(Number(ans2.header['x-total-count'])).toBeGreaterThan(0);
        expect(ans2.statusCode).toEqual(200);
        // expect(ans2.body.length).toBeGreaterThan(0);
    });
});
