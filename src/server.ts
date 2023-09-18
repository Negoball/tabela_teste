import fastify from "fastify";
import {PrismaClient} from '@prisma/client'

const app = fastify();

const prisma = new PrismaClient();

app.listen({
    port:3333,
}).then(() =>{
    console.log("server running on port 3333")
})


app.get('/tabelateste', async () =>{

    const tabelateste = await prisma.tabelateste.findMany();

    return tabelateste
})