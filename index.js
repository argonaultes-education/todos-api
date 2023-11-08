const os = require('os');

const networkInterfaces = os.networkInterfaces();

const server = Bun.serve({
    port: 3002,
    fetch(req) {
        return new Response(`it works from ${JSON.stringify(networkInterfaces)} ! ${process.env.API_TOKEN}`);
    },
})