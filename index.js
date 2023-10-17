const server = Bun.serve({
    port: 3002,
    fetch(req) {
        return new Response('it works !');
    },
})