import { describe, it, test } from "node:test";
import assert from "node:assert/strict";
import { obtenerDatosPromise } from './obtenerDatosPromise';

test("obtenerDatosPromise", async () => {
    const data = await obtenerDatosPromise();
    assert.deepStrictEqual(data, { data: 'datos importantes' });
});
