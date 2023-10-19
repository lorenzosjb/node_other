import fs from 'node:fs';
import path from 'path';

/*
    // New way
    import fs from 'node:fs/promises';
    await fs.readFile(path, 'utf8');
    fs.readFile(path, 'utf8').then(data) {});
 */

export const procesarArchivoPromesa = async () => {
    return new Promise((resolve, reject) => {
        try {
            // Leer archivo
            const fileInput = path.join(__dirname, "input.txt");
            fs.readFile(fileInput, 'utf8', function (err, data) {
                if (err) {
                    return reject(err);
                }
                // Grabar archivo
                const fileOutput = path.join(__dirname, "output.txt");
                fs.writeFile(fileOutput, data.toUpperCase(), function (err, data) {
                    if (err) {
                        return reject(err);
                    }
                    resolve(true);
                });
            });
        } catch (err) {
            reject(err);
        }
    });
} 

export const procesarArchivoCallback = (callback) => {
    // Leer archivo
    const fileInput = path.join(__dirname, "input.txt");
    fs.readFile(fileInput, 'utf8', function (err, data) {
        if (err) {
            callback(err);
            return;
        }
        // Grabar archivo
        const fileOutput = path.join(__dirname, "output.txt");
        fs.writeFile(fileOutput, data.toUpperCase(), function (err, data) {
            if (err) {
                callback(err);
                return;
            }
            callback(null, true);
        });
    });
} 
