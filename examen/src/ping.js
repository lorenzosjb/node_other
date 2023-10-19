import net from 'net';

export const ping = async (host, port) => {
    return new Promise((resolve, reject) => {
        const startTime = process.hrtime();
        const client = net.createConnection({ port, host }, () => {
            client.end();
        });

        client.on('end', () => {
            const hrTime = process.hrtime(startTime);
            resolve(`ping ${host} ${port} ${hrTime[0] * 1000 + hrTime[1] / 1000000} milliseconds`);
        });

        client.on('error', (err) => {
            client.end();
            reject(err);
            // throw `Error conexion: ${err.message}`;
        });
    });
}
