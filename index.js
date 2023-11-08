const server = Bun.serve({
    port: 3002,
    fetch(req) {
        return new Response(`it works from ${JSON.stringify(server.requestIP(req))} ! ${process.env.API_TOKEN}`);
    },
})