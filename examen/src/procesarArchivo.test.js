import fs, { unlinkSync, writeFileSync } from 'node:fs';
import path from 'path';

import { describe, it, beforeEach, afterEach } from "node:test";
import assert, { ifError } from "node:assert/strict";

import { procesarArchivoPromesa, procesarArchivoCallback } from './procesarArchivo';

describe("procesar archivo", () => {
    afterEach(() => {
        try {
            const fileOutput = path.join(__dirname, "output.txt");
            if (fs.existsSync(path)) {
                unlinkSync(fileOutput);
            }
        } catch (err) {
            console.log("Error borrando output.txt", err.message);
        };
    });

    it("procesar Archivo Callback 1", () => {
        const fileInput = path.join(__dirname, "input.txt");
        writeFileSync(fileInput, 'gogogogogogo');

        procesarArchivoCallback((err, data) => {
            if (err) {
                assert.ok(false);
                return;
            }
            // Cargar archivo output.txt
            const fileOutput = path.join(__dirname, "output.txt");
            fs.readFile(fileOutput, 'utf8', function (err, data) {
                if (err) {
                    assert.ok(false);
                    return;
                }
                assert.ok(data === "GOGOGOGOGOGO");
            });
        });
    });

    it("procesar Archivo Callback 2", () => {
        procesarArchivoCallback((err, resultado) => {
            // Cargar archivo input.txt
            const fileInput = path.join(__dirname, "input.txt");
            fs.readFile(fileInput, 'utf8', function (err, dataInput) {
                ifError(err);
                // Cargar archivo output.txt
                const fileOutput = path.join(__dirname, "output.txt");
                fs.readFile(fileOutput, 'utf8', function (err, dataOutput) {
                    ifError(err);
                    // Comparar contenidos
                    assert.ok(dataInput.toUpperCase() === dataOutput);
                });
            });
        });
    });
    
    it("procesar Archivo Promesa", async () => {
        try {
            const res = await procesarArchivoPromesa();
            // Cargar archivo input.txt
            const fileInput = path.join(__dirname, "input.txt");
            fs.readFile(fileInput, 'utf8', function (err, dataInput) {
                ifError(err);
                // Cargar archivo output.txt
                const fileOutput = path.join(__dirname, "output.txt");
                fs.readFile(fileOutput, 'utf8', function (err, dataOutput) {
                    ifError(err);
                    // Comparar contenidos
                    assert.ok(dataInput.toUpperCase() === dataOutput);
                });
            });
        } catch(err) {
            assert.ok(false);
        }
    });
});
