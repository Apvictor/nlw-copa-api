import Fastify from "fastify";
import jwt from "@fastify/jwt";
import cors from "@fastify/cors";

import { poolRoutes } from "./routes/pool";
import { userRoutes } from "./routes/user";
import { gameRoutes } from "./routes/game";
import { authRoutes } from "./routes/auth";
import { guessRoutes } from "./routes/guess";

async function main() {
    // Logger
    const fastify = Fastify({ logger: true, });

    // CORS
    await fastify.register(cors, { origin: true, });

    // Endpoints
    await fastify.register(jwt, { secret: "nlwcopa" });

    await fastify.register(authRoutes);
    await fastify.register(poolRoutes);
    await fastify.register(userRoutes);
    await fastify.register(guessRoutes);
    await fastify.register(gameRoutes);

    // Iniciar servidor
    await fastify.listen({
        port: 3333,
        host: "0.0.0.0"
    });
}

main();