import { testServer } from '../jest.setup';



describe('Cities - Delete By ID', () => {
    it('Delete Item with ID', async () => {
        const ans1 = await testServer
            .delete('/cities/12');
        expect(ans1.statusCode).toEqual(204);
    });

    it ('Id is equal or less than 0', async () => {
        const ans2 = await testServer
            .delete('/cities/0');
        expect(ans2.statusCode).toEqual(400);
        expect(ans2.body.errors.params).toEqual({'id': 'id must be greater than 0'});
    });

    it ('Id not found', async () => {
        const ans3 = await testServer
            .delete('/cities/99999');
        expect (ans3.statusCode).toEqual(500);
        expect (ans3.body.errors).toEqual({'default': 'No matching record found for the provided ID'});
    });

});
