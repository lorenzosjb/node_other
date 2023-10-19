import fs from 'node:fs/promises';

const config = async ({ path } ) => {
    return new Promise((resolve, reject) => {
        fs
            .readFile(path, 'utf8')
            .then((content) => {
                const output = content.split('\n').map(item => {
                    const values = item.split("=");
                    if (values[0]) {
                        const data = {};
                        data[values[0]] = values[1];
                        return data;
                    }
                });
                resolve(output[0]);
            })
            .catch((err) => {
                reject(err);
            });
    });
}

export const getVariables = async ({ path }) => {
    return await config({ path });
}