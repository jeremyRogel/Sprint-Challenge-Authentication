const db = require('../database/dbConfig');
const Users = require('./auth-model');

describe('Users Model', () => {
    beforeEach(async () => {
        await db('users').truncate();
    });

    describe('Add new user', () => {
        it('Should be empty', async () => {
            const users = await db('users');
            expect(users).toHaveLength(0);
        })

        it('Should add a new user', async () => {
            await Users.add({ username: 'alexia', password: 'cats' });
            const users = await db('users');
            expect(users).toHaveLength(1);
        })

        it('Should only add a new user when password is specified', async () => {
            await Users.add({ username: 'thisiswrong' })
            const users = await db('users');
            expect(users).toHaveLength(1);
        }) 
    })
})