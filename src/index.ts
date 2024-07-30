import Fastify from 'fastify';
import fastifyPostgres from '@fastify/postgres';
import { config } from 'dotenv';
config();

const app = Fastify();

app.register(fastifyPostgres, {
    connectionString: process.env.DATABASE_URL,
});

app.get('/', async (request, reply) => {
    return { hello: 'Hello world!!!' };
});

app.listen({ port: 4000 }, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening at ${address}`);
});
