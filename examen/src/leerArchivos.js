import fs from 'node:fs/promises';
import path from 'path';

export const leerArchivos = async () => {
    return new Promise((resolve, reject) => {
        const input1 = path.join(__dirname, "input.txt");
        const input2 = path.join(__dirname, "output.txt");
        const input3 = path.join(__dirname, "other.txt");

        const startTime = process.hrtime();
        const readFiles = [
            fs.readFile(input1, 'utf8'),
            fs.readFile(input3, 'utf8'),
            fs.readFile(input2, 'utf8')
        ];
        Promise
            .all(readFiles)
            .then((data) => {
                resolve(data.join(" "));
                const hrTime = process.hrtime(startTime);
                console.log(`${hrTime[0] * 1000 + hrTime[1] / 1000000} milliseconds`);
            })
            .catch((err) => {
                reject(err);
            });
    });
} 
