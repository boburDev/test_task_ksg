import { FastifyInstance } from 'fastify';
import { getItems } from './controllers/item';
import { updateUserBalance } from './controllers/user';

export const routes = (app: FastifyInstance) => {
    app.get('/items', getItems);
    app.post('/users/:id/balance', updateUserBalance);
};