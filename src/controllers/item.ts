import { FastifyRequest, FastifyReply } from 'fastify';
import { getItemsInfo } from '../services/itemService';
import { rateLimiter } from '../utils/rateLimiter';
import { cacheUtil as cache } from '../utils/cache';

const CACHE_KEY = 'itemsCache';

export const getItems = async (request: FastifyRequest, reply: FastifyReply) => {
    try {
        const cacheData = cache.get(CACHE_KEY);
        if (cacheData) return reply.send(cacheData);

        if (!rateLimiter.canProceed()) return reply.status(429).send({ error: 'Rate limit exceeded' });
        
        let requestValue = { app_id: 730, currency: 'EUR' }
        
        const items = await getItemsInfo(requestValue);
        cache.set(CACHE_KEY, items, 5 * 60 * 1000);
        return reply.send(items);
    } catch (error) {
        throw error
    }
};
