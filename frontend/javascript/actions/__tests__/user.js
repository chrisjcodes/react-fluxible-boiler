import { addUser } from '../user';

describe('User actions', () => {
    test('add user action returns expected object', () => {
        const expected = { success:expect.any(String) }
        const actual = addUser();
        expect(expected).toEqual(actual);
    });
});