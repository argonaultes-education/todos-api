const os = require('os');

const networkInterfaces = os.networkInterfaces();

ips = []

for (const iface in networkInterfaces) {
    for (const addr of networkInterfaces[iface]) {
        if (addr.family == 'IPv4') {
            ips.push(addr.address)
        }
    }
}

Bun.serve({
    port: 3002,
    fetch(req) {
        const start = Date.now();
        const max = (Number.MAX_SAFE_INTEGER / 1000000) * Math.random();
        for (let i = 0 ; i < max ; i++) {}
        const end = Date.now();
        console.log(`${new Date(Date.now()).toLocaleString()}:\t${ips.join('\t')}\t1 request\t${(end - start) / 1000} seconds\t${max}`);
        return new Response(`it works from ${ips.join(', ')} ! ${process.env.API_TOKEN}`);
    },
})