import { server } from './server/Server';
import { Knex } from './server/database/knex';

const startServer = () => {
    server.listen(process.env.PORT || 3333, () =>
        console.log(`Server Running on port ${process.env.PORT || 3333}! 🚀`));
};

if (process.env.IS_LOCALHOST !== 'true') {
    Knex.migrate.latest().then(() => {
        Knex.seed.run().then(() =>
            startServer()).catch(console.log);
    }).catch(console.log);
} else {
    startServer();
}
