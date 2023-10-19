import { test } from "node:test";
import assert from "node:assert/strict";
import { leerArchivos } from './leerArchivos';

test("leerArchivos", async () => {
    try {
        const message = await leerArchivos();
        assert.ok(message === "gogogogogogo TERCERA PARTEs GOGOGOGOGOGO");
    } catch (err) {
        assert.ok(false);
    }
});
