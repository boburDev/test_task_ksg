import { FastifyRequest, FastifyReply } from 'fastify';
import { updateUserBalances } from '../services/userService';
import { UpdateUserBalanceBody, UpdateUserBalanceParams } from '../interfaces/updateUserBalance'

export const updateUserBalance = async (
    request: FastifyRequest<{ Params: UpdateUserBalanceParams; Body: UpdateUserBalanceBody }>,
    reply: FastifyReply) => {
    const userId = request.params.id;
    const { amount } = request.body;
    const updatedBalance = await updateUserBalances(userId, amount);
    return reply.send({ balance: updatedBalance });
};
