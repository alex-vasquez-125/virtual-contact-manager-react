import { rest } from 'msw';

const handlers = [
    // what about /user/{id}?
    rest.get('/user', (req, res, ctx) => {

        return res(
            ctx.status(200),
            ctx.json({
                name: 'Fry'
            }),
            ctx.set('Content-Type', 'application/json'),
        );
    }),
];

export { handlers };
