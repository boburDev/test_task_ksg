import fastify from 'fastify';
import { config } from 'dotenv';
config();

import { routes } from './routes';

const app = fastify();
let PORT:number = Number(process.env.PORT) || 3000
routes(app);

app.listen({ port: PORT }, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening at http://localhost:${PORT}`);
});
